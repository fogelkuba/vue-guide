<template>
  <div class="from-inline">
      <h3>Sign Up</h3>
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
            @click="signUp"
            >
            Sign Up
        </button>
      </div>
      
      <p>{{err.message}}</p>
      <br>
      <router-link to="/signin">Not a user? Create account</router-link>
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
        signUp(){
            firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
            .catch(error => {
                this.err = error;
            })
        }
    }
}
</script>
