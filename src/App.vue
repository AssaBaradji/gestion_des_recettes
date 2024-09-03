<template>
  <div id="app">
    <header class="d-flex justify-content-between align-items-center">
      <h1>Gestion des Recettes</h1>
      <router-link to="/">
        <button class="btn btn-primary">
          Accueil
        </button>
      </router-link>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
// Aucune importation nécessaire ici
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  background-color: #42b983;
  padding: 20px;
  color: white;
}

header .btn {
  margin-left: auto;
}

main {
  padding: 20px;
}
</style>
