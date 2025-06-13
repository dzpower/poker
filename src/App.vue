<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="poker">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.poker {
  width: 100%;
  height: 100vh;

  background: linear-gradient(to left, #4f4039 96%, #000 100%) repeat;
  background-size: 40px 40px;
}
</style>
