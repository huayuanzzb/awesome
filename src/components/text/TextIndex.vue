<template>
  <el-tabs type="demo-tabs">
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
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
