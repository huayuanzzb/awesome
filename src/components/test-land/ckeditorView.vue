<template>
    <div id="ep-ckeditor" style="height: 500px">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MyUploadAdapter } from './myUploadAdapter';

function MyCustomUploadAdapterPlugin( editor ) {
    editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
        // Configure the URL to the upload script in your back-end here!
        return new MyUploadAdapter( loader );
    };
}

export default {
    name: 'ep-ckeditor',
    data() {
        return {
            editor: ClassicEditor,
            editorData: '<p>Content of the editor.</p>',
            editorConfig: {
                height: "500",
                extraPlugins: [ MyCustomUploadAdapterPlugin ],
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

:deep() .ck {
    --ck-color-text: var(--ep-menu-text-color);
    --ck-color-base-background: var(--ep-bg-color);
    --ck-color-toolbar-background: var(--ep-bg-color);
    --ck-color-toolbar-border: var(--ep-border-color);
    --ck-color-base-border: var(--ep-border-color);

    
    --ck-color-panel-background: var(--ep-bg-color);
    --ck-color-button-default-hover-background: var(--ep-menu-item-hover-fill);
}
</style>

<style>
/* 删除Powered by CKEditor, 应该在App.vue 或者全局css中, 使其全局生效 */
.ck-body-wrapper {
    display: none;
}
</style>
