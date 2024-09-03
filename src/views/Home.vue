<template>
  <div class="home-container text-center my-4">
    <h1>Bienvenue dans l'application de gestion de recettes</h1>
    <p>Découvrez, ajoutez, modifiez et supprimez vos recettes préférées.</p>
    <div class="button-group">
      <router-link to="/recipes" class="btn btn-primary">
        Voir la liste des recettes
      </router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home-container {
  max-width: 800px;
  margin: 0 auto;
}

.button-group {
  margin-top: 20px;
}

.btn {
  margin: 0 10px;
}
</style>
