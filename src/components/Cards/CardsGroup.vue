<script setup>
import CardItem from "@/components/Cards/CardItem.vue";

defineProps({
  cards: { type: Array, required: true },
  faceUp: { type: Boolean, default: false },
});
</script>

<template>
  <div class="cards-group">
    <CardItem
        v-if="cards[0]"
        :card="cards[0]"
        :face-up="faceUp"
        class="cards-group__left"
    />
    <CardItem
        v-if="cards[1]"
        :card="cards[1]"
        :face-up="faceUp"
        class="cards-group__right"
    />
  </div>
</template>

<style scoped lang="scss">
.cards-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  position: absolute;
  inset-block-end: calc(100% - 25px);
  inset-inline-start: 50%;
  transform: translateX(-50%);

  &__left {
    transform: rotate(-15deg) translateX(4px);
  }

  &__right {
    transform: rotate(15deg) translateX(-4px);
  }
}
</style>