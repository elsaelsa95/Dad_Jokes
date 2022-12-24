<script>
import { useJokesStore } from "@/stores/jokes.js";
import { mapState, mapActions } from "pinia";

export default {
  methods: {
    ...mapActions(useJokesStore, ["getJokes"]),
  },
  computed: {
    ...mapState(useJokesStore, ["setup", "punchline"]),
  },
};
</script>

<template>
  <section class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
      <div class="container">
        <h1 style="text-align: center">{{ setup }}</h1>
        <br>
        <br>
        <h1 style="text-align: center">{{ punchline }}</h1>
      </div>
      <button class="button" type="submit" class="btn btn-danger" @click.prevent="getJokes">Reload</button>
    </div>
  </section>
</template>

<style scoped>
.container {
  background-color: lightblue;
  opacity: 75%;
  margin-top: 10vh;
  margin-right: 10vh;
  padding: 20px;
  border-radius: 30px;
}
.button {
  
}

</style>
