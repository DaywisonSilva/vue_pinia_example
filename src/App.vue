<template>
  <div id="app">
    <h1>nome no state: {{ name }}</h1>
    <h2>nome no componente: {{ nameUser }}</h2>
    <input type="text" v-model="nameUser">
    <button @click="changeName(nameUser)">Mudar nome no state</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '@/stores/user.js'
export default {
  name: 'App',
  data() {
    return {
      nameUser: ""
    }
  },
  computed: {
    ...mapState(useUserStore, ['name']),
  },
  methods: {
    ...mapActions(useUserStore, ['changeName'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
