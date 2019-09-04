<template>
  <div id="todo">
    <List/>
  </div>
</template>

<script>
import List from './List.vue'

export default {
  name: 'todo',
  components: {
    List
  }
}
</script>

<style>
#todo {
  font: normal normal 13px/16px "Open Sans", sans-serif;
  background: #ccc;
  display: block;
  margin: 8px;
}
</style>
