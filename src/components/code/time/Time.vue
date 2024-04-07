<template>
  <div class="flex gap-4 mb-4 items-center">
    <el-input ref="beforeInput" v-model="before" @input="covert()"></el-input>
    {{ '>>' }}
    <el-input ref="afterInput" v-model="after">
      <template #append>
        <el-select v-model="selectFormat" placeholder="Select a format" style="width: 240px" @change="onSelectFormat()">
          <el-option v-for="f in formats" :label="f" :value="f" />
          <el-option label="Custom..." value="custom" />
        </el-select>
      </template>
    </el-input>
    <el-link>
      <el-icon>
        <QuestionFilled />
      </el-icon>
    </el-link>

    <el-dialog v-model="dialogVisible" width="500" title="Tips">
      <span>Use dayjs to format date</span>
      <el-input v-model="customFormat"></el-input>
      <el-text type="danger" v-for="e in customFormatError">{{ e }}</el-text>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="saveCustomFormat()">
            Confirm
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>

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

</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { dayjs } from 'element-plus'
import {
  QuestionFilled
} from "@element-plus/icons-vue";

const CUSTOM_DATETIME_FORMAT_KEY = 'custom-datetime-formats'

const now = ref<Date>()
const epoch = ref<number>()
const before = ref<string>()
const after = ref<string>()
const beforeInput = ref()
const afterInput = ref()
const selectFormat = ref('YYYY-MM-DD hh:mm:ss.SSS')
const customFormat = ref('')
const customFormatError = ref<string[]>([])
const dialogVisible = ref(false)
const formats = ref([
  'YYYY-MM-DD hh:mm:ss.SSS'
])

onMounted(() => {
  beforeInput?.value?.focus()
  before.value = String(new Date().getTime())
  formatDate(new Date(Number(before.value)))
  setInterval(() => {
    now.value = new Date()
    epoch.value = now.value.getTime()
  }, 1)
})

const onSelectFormat = () => {
  dialogVisible.value = selectFormat.value == 'custom'
}
const saveCustomFormat = () => {
  // try {
  //   dayjs(new Date()).format(customFormat.value)
  // } catch {
  //   customFormatError.value.push('Invalid format')
  // }
  // let origin = localStorage.getItem(CUSTOM_DATETIME_FORMAT_KEY)
  // let originSet = new Set<string>()
  // if (origin) {
  //   let dataArray = JSON.parse(origin) as string[];
  //   originSet = new Set(dataArray)
  // }
  // originSet.add(customFormat.value)
  // localStorage.setItem(CUSTOM_DATETIME_FORMAT_KEY, JSON.stringify(Array.from(originSet)))
  // customFormat.value = ''
  // dialogVisible.value = false
}
const covert = () => {
  formatDate(new Date(Number(before.value)))
}

const formatDate = (date: Date) => {
  after.value = dayjs(date).format(selectFormat.value)
}

</script>

<style scoped>
.ep-row {
  padding: 1rem !important;
}
</style>
