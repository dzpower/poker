<template>
  <div class="table-wrapper">
    <TablePlace />
  </div>
</template>

<style>
.table-wrapper {
  width: 100%;
  height: 100vh;
  background: transparent;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
}
</style>
<script setup lang="ts">
import TablePlace from '@/components/Table/TablePlace.vue'
</script>