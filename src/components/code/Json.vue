<template>
  <el-row :gutter="5">
    <el-col :span="12">
      <el-input input-style="height: 100%" v-model="before" type="textarea" placeholder="Please input"
        @input="onBeforeChange" />
    </el-col>

    <el-col :span="12">
      <CodeBlock prismjs :code="after"></CodeBlock>
      <!-- <el-input input-style="height: 100%" v-model="after" type="textarea" placeholder="Please input" /> -->
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const before = ref('')
const hint = "左侧填入 Json 字符串后，此处将显示格式化后的结果。"
const after = ref(hint)

const onBeforeChange = () => {
  try {
    if (before.value == null || before.value == undefined || before.value.trim() == '') {
      after.value = hint;
    } else {
      after.value = JSON.stringify(JSON.parse(before.value), null, 4);
    }
  } catch (error: any) {
    after.value = error.message;
  }
}

</script>

<style scoped>
.ep-row {
  height: 100%;
  margin: 0 !important;
}
</style>
