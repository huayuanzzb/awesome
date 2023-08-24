<template>
  <el-row :gutter="5">
    <el-col :span="12">
      <el-input input-style="height: 100%" v-model="before" type="textarea" placeholder="Please input"
        @input="onBeforeChange" />
    </el-col>

    <el-col :span="12">
      <!-- 貌似 vue3-code-block 有bug， after 有变化时， 代码高亮和行号插件都不能及时响应 -->
      <!-- <CodeBlock v-if="after" prismjs prism-plugin lang="json" class="line-numbers" :code="after"></CodeBlock>
      <CodeBlock v-else prismjs lang="html" :code="hint"/> -->
      <preview-code v-if="after" :code="after" lang="json" lineNumbers></preview-code>

    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'


const before = ref('')
const placeholder = "左侧输入json字符串，此处将自动展示格式化后的效果"
const hint = ref(placeholder)
const after = ref<string | null>(null)

const onBeforeChange = () => {
  try {
    if (before.value == null || before.value == undefined || before.value.trim() == '') {
      after.value = null;
      hint.value = placeholder;
    } else {
      after.value = JSON.stringify(JSON.parse(before.value), null, 4);
    }
  } catch (error: any) {
    after.value = null;
    hint.value = error.message;
  }
}

</script>

<style scoped>
.ep-row {
  height: 100%;
  margin: 0 !important;
}
</style>
