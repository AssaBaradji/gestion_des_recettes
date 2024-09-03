<template>
  <div class="container text-center my-4">
    <h1>Ajouter une nouvelle recette</h1>
    <RecipeForm mode="ajouter" :initialForm="form" @onSubmit="addRecipe" />
    <router-link to="/recipes">
      <button class="btn btn-secondary mt-4">
        Retour à la liste des recettes
      </button>
    </router-link>
  </div>
</template>

<script setup>
import RecipeForm from "@/components/RecipeForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useRecipeStore } from "@/stores/recipeStore";

const router = useRouter();
const store = useRecipeStore();

const form = ref({
  name: "",
  ingredients: "",
  type: "",
});

const addRecipe = (recipe) => {
  store.addRecipe(recipe);
  router.push({ name: "RecipeTable" });
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
