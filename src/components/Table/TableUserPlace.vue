<template>
  <div class="table-user-place">
    <span v-if="!name">
      +
    </span>
    <TableUser
        v-else
        :name="name"
        :cards="cards"
        :is-hero="isHero"
        :show-cards="showCards"
    />
  </div>
</template>

<script setup>
import { usePokerStore } from '@/stores/poker.js'
import TableUser from "@/components/Table/TableUser.vue";

defineProps({
  isHero: { type: Boolean, default: false },
  name: { type: String, default: '' },
  cards: { type: Array, default: () => [] },
  showCards: { type: Boolean, default: false },
})
const pokerStore = usePokerStore();
</script>

<style lang="scss" scoped>
.table-user-place {
  background: #00000040;
  width: 104px;
  height: 104px;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  line-height: 1;
  color: #fff;
  position: absolute;
  z-index: 9;
  top: 50%;
  cursor: pointer;
  left: 50%;
}
</style>