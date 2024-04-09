<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <el-config-provider namespace="ep">
    <div class="flex main-container">
      <BaseHeader />
      <div class="main-content">
        <RouterView />
      </div>
    </div>
  </el-config-provider>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}
.content {
  padding: 1rem;
}
</style>

<style scoped>
.main-container {
  height: 100vh;
  flex-direction: column;
}

.main-content {
  flex-grow: 1;
  display: flex;
}
</style>
