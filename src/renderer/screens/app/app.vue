<template>
  <div v-bind:class="['app', settings.theme + '-mode']">
    <div class="app--drag-area drag-area"></div>
    <router-view />
  </div>
</template>

<script src="./app.js"></script>
<style src="./app.scss"></style>
