<template>
    <div id="app">
      <NavMenu />
      <main class="content">
        <router-view />
      </main>
    </div>
  </template>
  
  <script setup>
  import NavMenu from './components/NavMenu.vue'
  </script>
  
  <style>
  #app {
    font-family: Arial, sans-serif;
  }
  .content {
    padding: 20px;
  }
  </style>