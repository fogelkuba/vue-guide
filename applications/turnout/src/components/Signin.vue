<template>
  <div class="from-inline">
      <h3>Sign In</h3>
      <div class="form-group">
          <input
            type="text"
            placeholder="email"
            class="form-control"
            v-model="email"
          />
          <input
            type="password"
            placeholder="passworf"
            class="form-control"
            v-model="password"
          />
          <br>
          <button
            class="btn btn-primary"
            @click="signIn"
            >
            Sign In
        </button>
      </div>
      
      <p>{{err.message}}</p>
      <br>
      <router-link to="/signup">Already user?</router-link>
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp';

export default {
    data(){
        return {
            email: '',
            password: '',
            err: ''
        }
    },
    methods: {
        signIn(){
            firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
            .catch(error => {
                this.err = error;
            })
        }
    }
}
</script>
