<template>
    <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1">
        <el-link :underline="false" href="ws">
          <el-icon>
            <UserFilled />
          </el-icon>
        </el-link>
        <template #title>WebSocket</template>
      </el-menu-item>
    </el-menu>
  </template>
  
  <script lang="ts" setup>
  import { ref } from "vue";
  import {
    Location,
    DocumentCopy,
    Menu as IconMenu,
    Setting,
    Switch,
    UserFilled,
  } from "@element-plus/icons-vue";
  
  const isCollapse = ref(true);
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
  };
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
  };
  </script>
  