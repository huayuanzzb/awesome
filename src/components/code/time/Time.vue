<template>
  <div class="flex gap-4 mb-4 items-center">
    <el-input ref="beforeInput" v-model="before" @input="covert()"></el-input>
    {{ '>>' }}
    <el-input ref="afterInput" v-model="after">
      <template #append>
        <el-select v-model="selectFormat" placeholder="Select a format" style="width: 320px" @change="onSelectChange">
          <el-option-group v-for="f in formats" :key="f.group" :label="f.group">
            <el-option v-for="item in f.options" :key="item.value" :label="item.label" :value="item.value">
              <template v-if="f.group == 'Custom'">
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right;">
                  <el-button type="danger" :icon="Delete" size="small" @click.stop="removeCustomFormat(item.label)" />
                </span>
              </template>

            </el-option>
          </el-option-group>
          <template #footer>
            <el-button v-if="!isAdding" text bg size="small" @click="onAddOption">
              Add a format
            </el-button>
            <template v-else>
              <el-form ref="customFormatFormRef" :label-position="'top'" :rules="customFormatFormRules"
                :model="customFormatForm">
                <el-form-item label="New Format" prop="customFormat">
                  <el-input v-model="customFormatForm.customFormat" />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" size="small" @click="saveCustomFormat(customFormatFormRef)">
                    confirm
                  </el-button>
                  <el-button size="small" @click="clear">cancel</el-button>
                </el-form-item>
              </el-form>
            </template>
          </template>
        </el-select>
      </template>
    </el-input>


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
import { ref, reactive, onMounted } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { dayjs } from 'element-plus'
import { Delete } from "@element-plus/icons-vue";


interface CustomFormatForm {
  customFormat: string,
}

const CUSTOM_DATETIME_FORMAT_KEY = 'custom-datetime-formats'
const SELECTED_DATETIME_FORMAT_KEY = 'selected-datetime-formats'
const DEFAULT_FORMATS = [
  'YYYY-MM-DD hh:mm:ss.SSS'
]

const now = ref<Date>()
const epoch = ref<number>()
const before = ref<string>()
const after = ref<string>()
const beforeInput = ref()
const afterInput = ref()
const selectFormat = ref('')
const isAdding = ref(false)


const customFormatForm = reactive<CustomFormatForm>({
  customFormat: ''
})

const validateCustomFormat = (rule: any, value: any, callback: any) => {
  try {
    dayjs(new Date()).format(customFormatForm.customFormat)
    callback()
  } catch {
    callback(new Error("Invalid format!"))
  }
}

const customFormatFormRef = ref<FormInstance>()

const customFormatFormRules = reactive<FormRules>({
  customFormat: [
    { required: true, message: 'Please input custom format', trigger: 'blur' },
    { validator: validateCustomFormat, trigger: 'blur' }
  ]
})

interface GroupOptions {
  group: string,
  options: {
    label: string,
    value: string
  }[]
}
const formats = reactive<GroupOptions[]>([])

onMounted(() => {
  beforeInput?.value?.focus()
  before.value = String(new Date().getTime())
  formatDate(new Date(Number(before.value)))
  setInterval(() => {
    now.value = new Date()
    epoch.value = now.value.getTime()
  }, 1)
  selectFormat.value = localStorage.getItem(SELECTED_DATETIME_FORMAT_KEY) || DEFAULT_FORMATS[0]
  computeForamts()
})

const computeForamts = () => {
  formats.length = 0
  formats.push({ group: "Default", options: DEFAULT_FORMATS.map(i => { return { label: i, value: i } }) })
  var customFormats = Array.from(getCachedFormats())
  if (customFormats) {
    formats.push({ group: "Custom", options: customFormats.map(i => { return { label: i, value: i } }) })
  }
  
}

const saveCustomFormat = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      var originSet = getCachedFormats()
      originSet.add(customFormatForm.customFormat)
      localStorage.setItem(CUSTOM_DATETIME_FORMAT_KEY, JSON.stringify(Array.from(originSet)))
      isAdding.value = false
      customFormatForm.customFormat = ''
      computeForamts()
    }
  })
}

const removeCustomFormat = (format: string) => {
  localStorage.setItem(CUSTOM_DATETIME_FORMAT_KEY, JSON.stringify(Array.from(getCachedFormats()).filter(i => i !== format)))
  computeForamts()
}

const getCachedFormats = () => {
  var cached = localStorage.getItem(CUSTOM_DATETIME_FORMAT_KEY) || '[]'
  var cachedSet = new Set<string>()
  if (origin) {
    let dataArray = JSON.parse(cached) as string[];
    cachedSet = new Set(dataArray)
  }
  return cachedSet
}

const onAddOption = () => {
  isAdding.value = true
}
const clear = () => {
  customFormatForm.customFormat = ''
  isAdding.value = false
}

const onSelectChange = () => {
  localStorage.setItem(SELECTED_DATETIME_FORMAT_KEY, selectFormat.value)
  covert()
}

const covert = () => {
  formatDate(new Date(Number(before.value)))
}

const formatDate = (date: Date) => {
  after.value = dayjs(date).format(selectFormat.value)
}

</script>

<style scoped>
</style>
