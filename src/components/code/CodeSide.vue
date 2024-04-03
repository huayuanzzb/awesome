<template>
  <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
    @close="handleClose">
    <el-menu-item index="1">
      <el-link :underline="false" href="profile">
        <el-icon>
          <UserFilled />
        </el-icon>
      </el-link>
      <template #title>My Profile</template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-link :underline="false" href="json">
        <el-icon>
          <Switch />
        </el-icon>
      </el-link>
      <template #title>Json</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-link :underline="false" href="text">
        <el-icon>
          <DocumentCopy />
        </el-icon>
      </el-link>
      <template #title>Text</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-link :underline="false" href="time">
        <el-icon>
        <clock />
      </el-icon>
      </el-link>
      <template #title>Time</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  Clock,
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
