<template>
  <div class="col-md-12">
      <span class="type">Type: {{type}}</span>
      <div class="row">
          <Item
            v-for="(item, index) in items"
            :key="index"
            :passed-item="item"
            :type="type"
          />
      </div>
  </div>
</template>

<script>
    import Item from './Item.vue'

    export default {
        data(){
            return {
                type: this.$route.params.type,
                items: []
            }
        },
        watch: {
            '$route': 'fetchItems'
        },
        methods: {
            fetchItems(){
                this.items = [];
                this.type = this.$route.params.type
                let initIds = [5,10,11]

                for (let i in initIds){
                    let id = initIds[i]
                    console.log('id:',id)
                    fetch(`https://swapi.co/api/${this.type}/${id}`,
                    {method: 'GET'})
                    .then(response => response.json())
                    .then(json => this.items.push(json))
                }
            }
        },
        created(){
            this.fetchItems()
        },
        components: {
            Item
        },
    }
</script>
