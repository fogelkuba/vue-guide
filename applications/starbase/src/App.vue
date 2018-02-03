<template>
<div id="app">
    <h1>{{title}}</h1>
    <Character/>
</div>
</template>

<script>
import Character from './components/Character.vue';
export default {
  name: 'app',
  data() {
      return{
          title: 'Generate your team!'
      }
  },
  components:{
      Character
  }
}
</script>
