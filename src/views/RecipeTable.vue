<template>
  <div class="container my-4">
    <h1>Tableau des Recettes</h1>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="recipe in recipes" :key="recipe.id">
          <td>{{ recipe.id }}</td>
          <td>{{ recipe.name }}</td>
          <td>
            <router-link
              :to="{ name: 'RecipeDetails', params: { id: recipe.id } }"
            >
              <button class="btn btn-info btn-sm">Détails</button>
            </router-link>
            <router-link
              :to="{ name: 'EditRecipe', params: { id: recipe.id } }"
            >
              <button class="btn btn-warning btn-sm">Modifier</button>
            </router-link>
            <button
              class="btn btn-danger btn-sm"
              @click="deleteRecipe(recipe.id)"
            >
              Supprimer
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link to="/add">
      <button class="btn btn-secondary mt-4">Retour</button>
    </router-link>
  </div>
</template>
  
  <script setup>
import { computed } from "vue";
import { useRecipeStore } from "@/stores/recipeStore";
import { useRouter } from "vue-router";

const store = useRecipeStore();
const router = useRouter();

const recipes = computed(() => store.recipes);

const deleteRecipe = (id) => {
  store.deleteRecipe(id);

  router.push({ name: "RecipeTable" });
};
</script>
  
  <style scoped>
.container {
  max-width: 1200px;
}
</style>
  