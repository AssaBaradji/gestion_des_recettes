import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import RecipeList from "../views/RecipeList.vue";
import AddRecipe from "../views/AddRecipe.vue";
import EditRecipe from "../views/EditRecipe.vue";
import RecipeDetails from "../views/RecipeDetails.vue";
import RecipeTable from "../views/RecipeTable.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/recipes", name: "RecipeList", component: RecipeList },
  { path: "/add", name: "AddRecipe", component: AddRecipe },
  { path: "/edit/:id", name: "EditRecipe", component: EditRecipe },
  { path: "/details/:id", name: "RecipeDetails", component: RecipeDetails },
  { path: "/table", name: "RecipeTable", component: RecipeTable },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
