<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="name">Nom de la recette</label>
      <input v-model="form.name" type="text" id="name" required />
    </div>
    <div>
      <label for="ingredients">Ingrédients</label>
      <textarea v-model="form.ingredients" id="ingredients" required></textarea>
    </div>
    <div>
      <label for="type">Type de recette</label>
      <select v-model="form.type" id="type" required>
        <option value="" disabled>Choisissez un type</option>
        <option value="entrée">Entrée</option>
        <option value="plat">Plat</option>
        <option value="dessert">Dessert</option>
        <option value="autre">Autre</option>
      </select>
    </div>
    <button>Enregistrer</button>
  </form>
</template>

<script setup>
import { reactive } from "vue";

const props = defineProps({
  mode: {
    type: String,
    default: "ajouter",
  },
  initialForm: {
    type: Object,
    default: () => ({ name: "", ingredients: "", type: "" }),
  },
});

const emit = defineEmits(["onSubmit"]);

const form = reactive({ ...props.initialForm });

const onSubmit = () => {
  emit("onSubmit", { ...form });
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 0 auto;
}
div {
  margin-bottom: 1rem;
}
label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
input,
textarea,
select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
