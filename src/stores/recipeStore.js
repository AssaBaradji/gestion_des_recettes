import { defineStore } from "pinia";
import { reactive } from "vue";

export const useRecipeStore = defineStore("recipeStore", () => {
  // Création d'un état réactif pour stocker les recettes
  const recipes = reactive([
    {
      id: 1,
      name: "Attiéké",
      ingredients: [
        "Attiéké",
        "Poisson",
        "Tomates",
        "Oignons",
        "Piments",
        "Citron",
        "Huile d'olive",
      ],
      type: "Plat principal",
    },
    {
      id: 2,
      name: "Pizza Margherita",
      ingredients: ["Pâte à pizza", "Sauce tomate", "Mozzarella"],
      type: "Plat principal",
    },
    {
      id: 3,
      name: "Poulet rôti",
      ingredients: ["Poulet entier", "Ail", "Romarin"],
      type: "Plat principal",
    },
    {
      id: 4,
      name: "Soupe à l'oignon",
      ingredients: ["Oignons", "Bouillon de volaille", "Beurre"],
      type: "Entrée",
    },
    {
      id: 5,
      name: "Salade Niçoise",
      ingredients: ["Laitue", "Tomates", "Oignons", "Haricots verts"],
      type: "Entrée",
    },
  ]);

  const addRecipe = (recipe) => {
    console.log("Adding recipe:", recipe);
    const newRecipe = { ...recipe, id: recipes.length + 1 };
    recipes.push(newRecipe);
    console.log("Updated recipes:", recipes);
  };

  const getRecipeById = (id) => {
    return recipes.find((recipe) => recipe.id === id);
  };

  const updateRecipe = (id, updatedRecipe) => {
    const index = recipes.findIndex((recipe) => recipe.id === id);
    if (index !== -1) {
      recipes[index] = { ...recipes[index], ...updatedRecipe };
    }
  };

  const deleteRecipe = (id) => {
    const index = recipes.findIndex((recipe) => recipe.id === id);
    if (index !== -1) {
      recipes.splice(index, 1);
    }
  };

  return { recipes, addRecipe, getRecipeById, updateRecipe, deleteRecipe };
});
