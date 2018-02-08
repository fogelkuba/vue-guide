<template>
  <div class="from-inline">
      <h3>Sign up</h3>
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
          <button
            class="btn btn-primary"
            @click="signUp"
            >
            Sign up
        </button>
      </div>
      <br>
      <p>{{err.message}}</p>
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
