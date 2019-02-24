<template>
  <div class="settings">
    <div class="settings--title drag-area">
      <h1>Settings</h1>
    </div>

    <a-form>
      <a-form-item label="Theme">
        <a-select v-bind:defaultValue="settings.theme" v-on:change="updateTheme">
          <a-select-option value="light" selected>Light</a-select-option>
          <a-select-option value="dark">Dark</a-select-option>
        </a-select>

        <a-checkbox v-bind:checked="settings.automaticallyChangeTheme" v-on:change="updateAutomaticallyChangeTheme">
          Automatically change theme
        </a-checkbox>
      </a-form-item>
    </a-form>
  </div>
</template>

<script src="./settings.js"></script>
<style src="./settings.scss"></style>
