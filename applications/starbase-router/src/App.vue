<template>
  <div id="app">
      <h1>Starbase Router</h1>
      <h4>
          <router-link class="link" to="/data/people">Meet the Characters</router-link>
          |
          <router-link class="link" to="/data/planets">Explore the Planets</router-link>
          |
          <router-link class="link" to="/data/starships">Discover the Starships</router-link>
      </h4>
      <router-view></router-view>
  </div>
</template>
