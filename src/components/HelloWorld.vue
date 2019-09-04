<template>
 <div class="hello">
  <input type="text">
  <button>增加事项</button>
  <ul>
   <li>item</li>
  </ul>
 </div>
</template>

<script>
 import {mapState, mapActions} from 'vuex'
 
 export default {
  name: 'HelloWorld',
  computed: {
   ...mapState(['list', 'inputVal'])
  },
  methods: {
   ...mapActions(['changeListValue', 'handleDel'])
  }
 }
</script>