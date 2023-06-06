
<template>
    <div id="editorjs"></div>
</template>

<script setup lang="ts">
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; 
import SimpleImage from '@editorjs/simple-image';
import Link from '@editorjs/link';

const editor = new EditorJS({
    holder: "editorjs",
    tools: { 
        header: Header, 
        simpleImage: SimpleImage,
        link: Link,
  }, 
});
</script>