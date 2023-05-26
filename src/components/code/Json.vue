<template>
  <el-row :gutter="5">
    <el-col :span="12">
      <el-input input-style="height: 100%" v-model="before" type="textarea" placeholder="Please input"
        @input="onBeforeChange" />
    </el-col>

    <el-col :span="12">
      <el-input input-style="height: 100%" v-model="after" type="textarea" placeholder="Please input" />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const before = ref('')
const after = ref('')

const onBeforeChange = () => {
  try {
    if (before.value == null || before.value == undefined || before.value.trim() == '') {
      after.value = '';
    } else {
      after.value = JSON.stringify(JSON.parse(before.value), null, 4);
    }
  } catch (error: any) {
    after.value = error.message;
  }
}

</script>

<style scoped>
.ep-row {
  height: 100%;
}
</style>
