<script lang="ts" setup>
import { toggleDark } from "~/composables";
import { UserFilled } from "@element-plus/icons-vue";
</script>

<template>
  <el-menu mode="horizontal">
    <el-menu-item index="1">Tool Box</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Test Land</template>
      <el-menu-item index="2-1">
        <el-link :underline="false" @click="$router.push({ name: 'test-land/rich-text' })">
          <el-icon>
            <UserFilled />
          </el-icon>
          Rich Text
        </el-link>
      </el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
    <el-menu-item h="full" @click="toggleDark()">
      <button class="border-none w-full bg-transparent cursor-pointer" style="height: var(--ep-menu-item-height)">
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
  </el-menu>
</template>
