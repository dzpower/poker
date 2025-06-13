<script setup>
import CardsGroup from "@/components/Cards/CardsGroup.vue";

defineProps({
  isHero: { type: Boolean, default: false },
  name: { type: String, default: '' },
  cards: { type: Array, default: () => [] },
  showCards: { type: Boolean, default: false },
});
</script>

<template>
  <div class="table-user" :class="{ 'table-user--hero': isHero }">
    <span class="table-user--name">{{ name }}</span>
    <CardsGroup :cards="cards" :face-up="showCards" />
  </div>
</template>

<style lang="scss" scoped>
.table-user {
  background: linear-gradient(to top, #a98623, #fadf7a, #d4af37);
  width: 100px;
  height: 100px;
  border-radius: 9999px;
  position: absolute;
  z-index: 10;
  border: 3px solid transparent;
  transition: border-color 0.3s;

  &--hero {
    border-color: #fadf7a;
    box-shadow: 0 0 15px #fadf7a50;
  }

  &--name {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-start: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 12px;
    font-weight: bold;
    color: #3a2d27;
  }
}
</style>