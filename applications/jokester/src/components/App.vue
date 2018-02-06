<template>
    <div id="app">
        <h3>Got Jokes?</h3>
        <button class="btn btn-primary" @click="initJokes">Get 10 random jokes</button>
        <button class="btn btn-primary" @click="addJoke">Get random joke</button>
        <div class="">
            <br>
            <span v-for="type in types">
                <input
                    type="checkbox"
                    :value="type"
                    v-model="checkedTypes"
                    checked
                    >
                <label>{{type}}</label>&nbsp;
            </span>
            <br>
        	<div class="col-md-12">
        	      <div class="row">
                      <Joke v-for="(joke, index) in $store.state.jokes"
                      v-show="checkedTypes.includes(joke.type)"
                      :joke="joke"
                      :key="index"
                      :index="index"
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
    data(){
        return {
            types: ['general', 'knock-knock', 'programming'],
            checkedTypes: ['general', 'knock-knock', 'programming']
        }
    },
    methods: mapActions([
        'initJokes',
        'addJoke'
    ]),
    components: {
        Joke
    }
}
</script>
