<template>
  <el-row :gutter="5">
    <el-col :span=12>
      <el-descriptions :column="1" border>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">epoch</div>
          </template>
          {{ epoch }}
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
    </el-col>
    <el-col :span=12>
      <el-input ref="beforeInput" v-model="before"></el-input>
    </el-col>
  </el-row>

</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const now = ref<Date>()
const epoch = ref<number>()
const before = ref<string>()
const beforeInput = ref()

onMounted(() => {
  beforeInput?.value?.focus()
  setInterval(() => {
    now.value = new Date()
    epoch.value = now.value.getTime()
  }, 1)
})

</script>

<style scoped>
.ep-row {
  margin: 0 !important;
}
</style>
