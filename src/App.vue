<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header></header>
  <RouterView />
</template>

<style scoped>
html,
body {
  height: 100%;
  text-align: center;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
