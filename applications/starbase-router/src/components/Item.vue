<template>
  <div class="col-md-4" @click="switchItem">
      <div class="item-card">
          <div class="card-block">
              <h3 class="card-title">{{item.name}}</h3>
              <div v-for="(value, key, index) in item">
                  <div class="item" v-if="index < 6">
                      <strong class="item-details">
                          {{key}}</strong>: <span class="item-details">{{value}}</span>
                  </div>
              </div>
          </div>
      </div>
  </div>

</template>

<script>
export default {
    props: ['passedItem', 'type'],
    data(){
        return {
            item: {}
        }
    },
    methods: {
        switchItem(){
            let randId = Math.floor(Math.random() * 62) + 1;
            fetch(`https://swapi.co/api/${this.type}/${randId}`, {method: "GET"})
            .then( response => response.json() )
            .then( json => this.item = json )
        }
    },
    created(){
        this.item = this.passedItem;
    }
}
</script>
