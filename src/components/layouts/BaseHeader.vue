<script lang="ts" setup>
import { toggleDark } from "~/composables";
import { UserFilled, Tools } from "@element-plus/icons-vue";
import logo from "~/assets/logo.svg"
</script>

<template>
  <el-menu mode="horizontal">

    <el-menu-item index="0">
      <el-link :underline="false" @click="$router.push({ name: 'home' })">
        <el-icon><img :src="logo"></el-icon>
        Awesome
      </el-link>
    </el-menu-item>
    <el-menu-item index="1">
      <el-link :underline="false" @click="$router.push({ name: 'tool-box' })">
        <el-icon>
          <Tools />
        </el-icon>
        Tool Box
      </el-link>
    </el-menu-item>
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
    <el-menu-item index="3">
      <el-link :underline="false" @click="$router.push({ name: 'tester' })">
        Tester
      </el-link>
    </el-menu-item>
    <el-sub-menu index="4">
      <template #title>Language</template>
      <el-menu-item index="4-1">
        <el-link :underline="false" @click="$router.push({ name: 'test-land/rich-text' })">
          Rich Text
        </el-link>
      </el-menu-item>
      <el-menu-item index="4-2">item two</el-menu-item>
    </el-sub-menu>
    <el-menu-item h="full" @click="toggleDark()">
      <button class="border-none w-full bg-transparent cursor-pointer" style="height: var(--ep-menu-item-height)">
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item> 
  </el-menu>



</template>
<script lang="ts">



</script>

<style scoped>
/* 第一个li居左 */
ul li:first-child {
  margin-right: auto;
}

/* 最后两个li居右 */
ul li:nth-last-child(2),
ul li:last-child {
  margin-left: auto; /* 将最后两个li推向右边 */
}
</style>
