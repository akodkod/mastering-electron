<template>
  <a-form v-on:submit.prevent="submit" class="v-add-item">
    <a-row>
      <a-col span="15">
        <a-input v-model="text" placeholder="New to do" />
      </a-col>
      <a-col span="8" offset="1">
        <a-select v-model="remindIn" defaultValue="0">
          <a-select-option value="0">Don't remind</a-select-option>
          <a-select-option value="6">in 1 minute</a-select-option>
          <a-select-option value="30">in 5 minutes</a-select-option>
          <a-select-option value="60">in 10 minutes</a-select-option>
        </a-select>
      </a-col>
    </a-row>
  </a-form>
</template>

<script src="./v-add-item.js"></script>
<style src="./v-add-item.scss"></style>
