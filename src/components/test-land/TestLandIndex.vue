<template>
    <div id="ep-ckeditor" style="height: 500px">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    name: 'ep-ckeditor',
    data() {
        return {
            editor: ClassicEditor,
            editorData: '<p>Content of the editor.</p>',
            editorConfig: {
                height: "500"
                // The configuration of the editor.
            }
        };
    }
}
</script>

<style scoped>
:deep() .ck-editor__editable:not(.ck-editor__nested-editable) {
    min-height: 400px;
}
</style>

<style>
/* 删除Powered by CKEditor, 应该在App.vue 或者全局css中, 使其全局生效 */
.ck-body-wrapper {
    display: none;
}
</style>
