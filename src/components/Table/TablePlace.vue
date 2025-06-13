<script setup>
import { onMounted } from "vue";
import TableUser from "@/components/Table/TableUser.vue";
import { usePokerStore } from '@/stores/poker.js';
import TableUserPlace from "@/components/Table/TableUserPlace.vue";

const pokerStore = usePokerStore();


const trySetUserPlace = (index) => {
  pokerStore.setUserPlace(index);
}

onMounted(() => {
  pokerStore.generatePlaces();
})
</script>

<template>
  <div class="table-place-wrapper">
    <div class="controls">
      <button class="button" @click="pokerStore.dealCards">Раздать карты</button>
      <button class="button" @click="pokerStore.toggleVisibility">Показать/Скрыть карты</button>
    </div>

    <div class="table-place">
      <TableUserPlace
        v-for="(place, index) in pokerStore.placesDisplayData"
        :style="place.style"
        :is-hero="place.isHero"
        :name="place.name"
        :cards="place.cards"
        :key="index"
        :show-cards="pokerStore.showAllCards || place.isHero"
        @click.stop="trySetUserPlace(index)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table-place {
  width: 1000px;
  height: 400px;
  border-radius: 9999px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    display: block;
    background: radial-gradient(circle, #4a8d6f, #35654d, #2a503c);
    inset: 0;
    border-radius: 999px;
    z-index: 2;
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: calc(100% + 40px);
    height: calc(100% + 40px);
    background: linear-gradient(to bottom, #4f4039, #3a2d27);
    inset-block-start: -20px;
    inset-inline-start: -20px;
    border-radius: 999px;
    z-index: 1;
    border: 1px solid #3a2d27;
    box-shadow: 4px 4px 4px #ffffff20 inset, -4px 4px 4px #00000020;
  }
}

.controls {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 8px;
  color: #F2EFE9;
  display: flex;
  gap: 8px;
  flex-direction: column;

  .select {
    background: #3a2d27;
    color: #F2EFE9;
    border-radius: 4px;
    padding: 12px 24px;
    border: 2px solid #d4af37;
  }

  .button {
    padding: 12px 24px;
    border: 2px solid #d4af37;
    border-radius: 8px;
    background: linear-gradient(to bottom, #4f4039, #3a2d27);
    color: #F2EFE9;
    font-family: inherit;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);

    transition: all 0.2s ease-in-out;
    user-select: none;


    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
      border-color: #fadf7a;
    }

    &:active {
      transform: translateY(1px);
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4), inset 0 2px 4px rgba(0, 0, 0, 0.3);
      transition-duration: 0.1s;
    }
  }
}
</style>