<template>
  <div class="v-items">
    <v-item v-for="item in items" v-bind:key="item.id" v-bind:item="item" />
  </div>
</template>

<script src="./v-items.js"></script>
<style src="./v-items.scss"></style>
