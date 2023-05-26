<template>
  <el-row :gutter="10">
    <el-col :span="12">
      <el-input
    v-model="before"
    :autosize="{ minRows: 40, maxRows: 40 }"
    type="textarea"
    placeholder="Please input"
  />
    </el-col>
    <el-col :span="12">
<el-input
    v-model="befafterore"
    :autosize="{ minRows: 40, maxRows: 40 }"
    type="textarea"
    placeholder="Please input"
  />

    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const before = ref('')
const after = ref('')
</script>

<style scoped>
</style>
