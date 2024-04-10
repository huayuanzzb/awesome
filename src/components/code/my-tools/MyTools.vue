<template>
  <div>
    <el-card v-for="t in tools" class="tool" shadow="hover">
      <div class="tool-name">
        <el-text class="mx-1" size="large">Large</el-text>
      </div>
      <div class="tool-desc">
        <el-text class="mx-1" size="small">Small</el-text>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from 'vue'

interface Tool {
  name: string,
  description: string,
  url: string,
}

const tools = reactive<Tool[]>([
  {
    name: "AAA",
    description: "aaa",
    url: "/aaa"
  }
])

onMounted(() => {
})

</script>

<style scoped>
.tool {
  width: 8rem; 
  height: 8rem;
}

.tool-name {
}

.tool-desc {
}
</style>
