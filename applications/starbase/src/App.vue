<template>
<div id="app">
    <h1>{{title}}</h1>
    <div class="col-md-12">
        <div class="row">
            <Character
            v-for="(id, index) in initialIds"
            :id="id"
            :key="index"
            />
        </div>
    </div>

</div>
</template>

<script>
import Character from './components/Character.vue';
export default {
  name: 'app',
  data() {
      return{
          title: 'Generate your team!',
          initialIds: [1, 13, 14]
      }
  },
  components:{
      Character
  }
}
</script>
