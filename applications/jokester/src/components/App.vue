<template>
    <div id="app">
        <h3>Got Jokes?</h3>
        <button class="btn btn-primary" @click="initJokes">Get 10 random jokes</button>
        <div class="">
            <br>
            <br>
        	<div class="col-md-12">
        	      <div class="row">
                      <Joke v-for="(joke, index) in $store.state.jokes"
                      :joke="joke"
                      :key="index"
                      />
                  </div>
        	</div>

        </div>

    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Joke from './Joke.vue';

export default {
    methods: mapActions([
        'initJokes'
    ]),
    components: {
        Joke
    }
}
</script>
