<template>
  <pre :class="'language-' + lang + ' ' + lineNumbers">
    <code :class="'language-' + lang" v-html="Prism.highlight(fCode, Prism.languages[lang], lang)"></code>
  </pre>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import Prism from 'prismjs'

const props = defineProps({
  lineNumbers: Boolean,
  lang: String,
  code: String
})

const lineNumbers = computed(() => {
  return props.lineNumbers ? 'line-numbers' : ''
})

const fCode = computed(() => {
  return props.code?.replaceAll("\n", "\n    ")
})

onMounted(() => {
  Prism.highlightAll()
})

</script>

<style scoped>
code {
  padding: 2px 0px;
}
pre[class*="language-"].line-numbers {
    padding-left: 1rem;
}
</style>
