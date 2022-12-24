import axios from "axios";
import { defineStore } from "pinia";

export const useJokesStore = defineStore({
  id: "jokes",
  state: () => ({
    setup: "",
    punchline: "",
    // url: "https://official-joke-api.appspot.com/random_joke",
  }),

  actions: {
    async getJokes() {
      try {
        const result = await axios({
          method: "get",
          url: "https://official-joke-api.appspot.com/random_joke",
        });
        this.setup = result.data.setup;
        this.punchline = result.data.punchline
        console.log(result)
      } catch (error) {
        console.log(error)
      }
    },
  },
});
