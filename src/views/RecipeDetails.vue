<template>
  <div>
    <h1>{{ recipe?.name }}</h1>
    <p><strong>Ingrédients:</strong> {{ recipe?.ingredients }}</p>
    <p><strong>Type:</strong> {{ recipe?.type }}</p>
    <button class="btn btn-secondary" @click="closeModal">Quitter</button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRecipeStore } from "@/stores/recipeStore";
import { useRoute } from "vue-router";
import "bootstrap";

const store = useRecipeStore();
const route = useRoute();

const recipe = computed(() => store.getRecipeById(parseInt(route.params.id)));

const closeModal = () => {
  const modal = document.querySelector("#recipeModal");
  if (modal) {
    const modalInstance = bootstrap.Modal.getInstance(modal);
    if (modalInstance) {
      modalInstance.hide();
    }
  }
};
</script>

<style scoped>
</style>
