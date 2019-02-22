<template>
  <div class="v-item" v-bind:class="{ done: item.done }">
    <a-row>
      <a-col span="20" class="v-item--text">
        {{item.text}}

        <span v-if="item.remindAt">
          at {{item.remindAt | timestampToReadable}}
        </span>
      </a-col>
      <a-col span="4">
        <a-button v-if="!item.done" v-on:click="done" type="primary" size="small" block>Done</a-button>
        <a-button v-else v-on:click="undo" type="default" size="small" block>Undo</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script src="./v-item.js"></script>
<style src="./v-item.scss"></style>
