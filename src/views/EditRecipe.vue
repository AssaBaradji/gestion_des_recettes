<template>
  <div>
    <h1>Modifier la recette</h1>
    <RecipeForm mode="modifier" :initialForm="form" @onSubmit="editRecipe" />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRecipeStore } from "@/stores/recipeStore";
import RecipeForm from "@/components/RecipeForm.vue";
import { useRoute, useRouter } from "vue-router";

const store = useRecipeStore();
const route = useRoute();
const router = useRouter();

const recipe = store.getRecipeById(parseInt(route.params.id));
const form = reactive({ ...recipe });

const editRecipe = (updatedRecipe) => {
  store.updateRecipe(parseInt(route.params.id), updatedRecipe);

  router.replace({ name: "RecipeTable" });
};
</script>
