
<template>
    <div id="editorjs"></div>
</template>

<script setup lang="ts">
import EditorJS from '@editorjs/editorjs';

const editor = new EditorJS({
    holder: "editorjs"
});
</script>