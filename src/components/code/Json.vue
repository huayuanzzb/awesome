<template>
  <el-row :gutter="5">
    <el-col :span="12">
      <el-input input-style="height: 100%" v-model="before" type="textarea" placeholder="Please input"
        @input="onBeforeChange" />
    </el-col>

    <el-col :span="12">
      <preview-code v-if="after" :code="after" lang="json" lineNumbers></preview-code>
      <preview-code v-else :code="hint" lang="html"></preview-code>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'

const before = ref('')
const placeholder = "左侧输入json字符串，此处将自动展示格式化后的效果"
const hint = ref(placeholder)
const after = ref<string | null>(null)

const onBeforeChange = () => {
  after.value = null;
  if (before.value == null || before.value == undefined || before.value.trim() == '') {
    hint.value = placeholder;
  } else {
    nextTick(() => {
      try {
        after.value = JSON.stringify(JSON.parse(before.value), null, 4)
      } catch (error: any) {
        hint.value = error.message;
      }
    }
    )
  }
}

</script>

<style scoped>
.ep-row {
  height: 100%;
  margin: 0 !important;
}
</style>
