<template>
  <div class="main">
    <div class="main--title drag-area">
      <h1>Doist</h1>
    </div>

    <v-add-item v-on:add="add" />

    <div  v-if="itemsOrdered.length">
      <v-items v-bind:items="itemsOrdered"></v-items>

      <div class="main--footer">
        <p class="main--footer--count">{{toDoCount}} left</p>
        <p class="main--footer--button">
          <a-button type="default" size="small" v-if="itemsDone.length" v-on:click="deleteDoneItems">Remove Done Items</a-button>
        </p>
      </div>
    </div>
    <div v-else class="main--great-job">
      <h2>Great job 👍</h2>
      <h3>Nothing to do</h3>
    </div>

    <div class="main--settings">
      <a v-on:click="showWindow('settings')">
        <a-icon type="setting" theme="filled"></a-icon> Settings
      </a>
    </div>
  </div>
</template>

<script src="./main.js"></script>
<style src="./main.scss"></style>
