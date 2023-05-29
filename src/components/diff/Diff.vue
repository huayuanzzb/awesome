<template>
  <el-row :gutter="5">
    <el-col :span="12">
      <el-input :autosize="{minRows:20, maxRows:20}" v-model="prev" type="textarea" placeholder="Please input Before"/>
    </el-col>
    <el-col :span="12">
      <el-input :autosize="{minRows:20, maxRows:20}" v-model="current" type="textarea" placeholder="Please input After"/>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="4" :offset="10">
      <!-- <el-button type="primary" @click="compare()">Compare</el-button> -->
    </el-col>
  </el-row>
  <el-row>
    <el-col :span=24>
      <VueDiff :mode="mode" :theme="theme" :language="language" :prev="prev" :current="current" :folding="folding" :input-delay="0"
      :virtual-scroll="{ lineMinHeight: 24, delay: 100 }"
  />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/components/prism-json';

const showDiff = ref<boolean>(false)
const prev = ref('')
const current = ref('')
const placeholder = "左侧输入json字符串，此处将自动展示格式化后的效果"
const mode = ref<'split' | 'unified'>('unified')
const theme = ref<'dark' | 'light'>('dark')
const language = ref<string>('plaintext')
const folding = ref<boolean>(false)

// const compare = () => {
//   showDiff.value = true
// }
</script>

<style scoped>
.ep-row {
  margin: 0 !important;
}
</style>
