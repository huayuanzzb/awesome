<template>
  <el-descriptions :column="1" border>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">Epoc</div>
      </template>
      {{ mills }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">Timestamp</div>
      </template>
      {{ now }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">Timezone</div>
      </template>
      {{ Intl.DateTimeFormat().resolvedOptions().timeZone }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const now = ref<Date>()
const mills = ref<number>()

onMounted(() => {
  setInterval(() => {
    now.value = new Date()
    mills.value = now.value.getTime()
  }, 1)
})

</script>

<style scoped>
.ep-row {
  margin: 0 !important;
}
</style>
