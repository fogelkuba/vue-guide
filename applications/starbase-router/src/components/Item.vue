<template>
  <div class="col-md-4">
      <div class="item-card">
          <div class="card-block">
              <h3 class="card-title">{{item.name}}</h3>
              <div v-for="(value, key, index) in item">
                  <div class="item" v-if="index < 5">
                      <strong class="item-details">{{key}}</strong>: <span class="item-details">{{value}}</span>
                  </div>
              </div>
          </div>
      </div>
  </div>

</template>

<script>
export default {
    props: ['item']
}
</script>
