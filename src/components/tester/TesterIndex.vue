<template>
  <TesterSide />
  <div class="content" w="full" py="4">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import TesterSide from './TesterSide.vue'
</script>

<style scoped>
.content {
  padding: 1rem;
}
</style>