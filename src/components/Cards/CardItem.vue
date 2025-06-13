<script setup>
import { computed } from 'vue';

const props = defineProps({
  card: { type: Object, required: true },
  faceUp: { type: Boolean, default: false },
});

const suitColor = computed(() => {
  if (props.card.suit === '♥' || props.card.suit === '♦') {
    return '#c84b49';
  }
  return '#000000';
});
</script>

<template>
  <div class="card-item">
    <div v-if="!faceUp" class="card-item__back"></div>

    <div v-else class="card-item__face">
      <span class="card-item--value" :style="{ color: suitColor }">
        {{ card.rank }}
      </span>
      <span class="card-item--suit" :style="{ color: suitColor }">
        {{ card.suit }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-item {
  width: 35px;
  height: 50px;
  border-radius: 4px;
  position: relative;
  background: #fefefe;
  border: 1px solid #aaa;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.2);

  &__back {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background: linear-gradient(135deg, #c84b49, #a42a28);
    border: 4px solid #fff;
    box-sizing: border-box;
  }

  &__face {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 2px;
    box-sizing: border-box;
  }

  &--value {
    font-size: 16px;
    line-height: 1;
    font-weight: bold;
  }

  &--suit {
    font-size: 14px;
    line-height: 1;
  }
}
</style>