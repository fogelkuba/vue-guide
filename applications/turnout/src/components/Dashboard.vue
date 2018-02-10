<template>
  <div class="">
      <h3>Events Dashboard</h3>
      <button class="btn btn-danger btn-small signout" @click="signOut">Sign out</button>
      <hr>
      <AddEvent/>
      <hr>
        <div class="col-md-12">
            <div class="row">
                <EventItem
                  v-for="(item, index) in this.$store.state.events"
                  :event="item"
                  :key="index"
                />
            </div>
        </div>

  </EventItem/>
      <!-- {{$store.state.events}} -->
  </div>
</template>

<script>
    import {firebaseApp, eventsRef} from '../firebaseApp';
    import AddEvent from './AddEvent.vue';
    import EventItem from './EventItem.vue';
    export default {
        methods: {
            signOut(){
                this.$store.dispatch('signOut');
                firebaseApp.auth().signOut();
            }
        },
        components: {
            AddEvent,
            EventItem
        },
        mounted(){
            eventsRef.on('value', (snap) => {
                let events = [];
                snap.forEach(event => {
                    events.push(event.val())
                });
                this.$store.dispatch('setEvents', events)
            });

        }
    }
</script>
