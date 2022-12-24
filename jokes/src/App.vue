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
        <br />
        <br />
        <h2 style="text-align: center">{{ punchline }}</h2>
        <i class="fas fa-grin-tears" style="font-size: 36px"></i>
      </div>
      <button type="submit" class="btn btn-danger" @click.prevent="getJokes">
        Reload
      </button>
    </div>
  </section>
</template>

<style scoped>
.container {
  background-color: pink;
  opacity: 90%;
  max-width: 500px;
  margin: auto;
  padding: 10px;
  border-radius: 30px;
  text-align: right;
}
</style>
