<template>
  <el-tabs >
    <el-tab-pane label="Diff">
      <Diff></Diff>
    </el-tab-pane>
    <el-tab-pane label="Random">
      <Diff></Diff>
    </el-tab-pane>
  </el-tabs>
  
</template>

<script setup lang="ts">
import Diff from './Diff.vue'
</script>

<style scoped>
</style>
