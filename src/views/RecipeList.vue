<template>
  <div class="container text-center my-4">
    <h1>Liste des Recettes</h1>
    <div class="row justify-content-center">
      <div v-for="recipe in recipes" :key="recipe.id" class="col-md-3 mb-4">
        <div class="card h-100">
          <img :src="recipe.image" :alt="recipe.name" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ recipe.name }}</h5>
            <button
              class="btn btn-primary"
              @click="viewRecipe(recipe)"
              data-bs-toggle="modal"
              data-bs-target="#recipeModal"
            >
              <i class="bi bi-eye"></i> Détails
            </button>
          </div>
        </div>
      </div>
    </div>

    <router-link to="/add">
      <button class="btn btn-success mt-4">Ajouter une Recette</button>
    </router-link>

    <!-- Modal for recipe details -->
    <div
      class="modal fade"
      id="recipeModal"
      tabindex="-1"
      aria-labelledby="recipeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="recipeModalLabel">
              {{ selectedRecipe?.name }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <img
              :src="selectedRecipe?.image"
              :alt="selectedRecipe?.name"
              class="img-fluid mb-3"
            />
            <h5>Ingrédients :</h5>
            <ul class="list-group">
              <li
                v-for="ingredient in selectedRecipe?.ingredients"
                :key="ingredient"
                class="list-group-item"
              >
                {{ ingredient }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const recipes = ref([
  {
    id: 1,
    name: "Salade",
    image: "/images/Salades.jpg",
    ingredients: ["Pâtes", "Sauce tomate", "Basilic", "Parmesan"],
  },
  {
    id: 2,
    name: "Pizza",
    image: "/images/pizza.jpg",
    ingredients: ["Pâte à pizza", "Sauce tomate", "Mozzarella", "Pepperoni"],
  },
  {
    id: 3,
    name: "Attiéké",
    image: "/images/athieke.jpg",
    ingredients: ["Attiéké", "Poisson", "Légumes", "Sauce tomate"],
  },
  {
    id: 4,
    name: "Poulet",
    image: "/images/poulet.jpg",
    ingredients: ["Poulet", "Épices", "Légumes", "Riz"],
  },
]);

const selectedRecipe = ref(null);

function viewRecipe(recipe) {
  selectedRecipe.value = recipe;
}
</script>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;
}

.container {
  max-width: 1200px;
}

.modal-body img {
  max-height: 300px;
  object-fit: cover;
  width: 100%;
}

.btn-primary .bi-eye {
  margin-right: 8px;
}
</style>
