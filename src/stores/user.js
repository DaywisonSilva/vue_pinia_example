// Isso é semelhante a um módulo do Vuex
import { defineStore } from 'pinia'

const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'Gui',
    isAdmin: true,
  }),
  actions: {
    //   tuas actions
    changeName(name) {
        this.name = name
    }
  },

  //   Mutation não existe mais
  // Motivo: resumir ideias, reduzir complexidade ao utilizar o gerenciador de estado
})


export {useUserStore};