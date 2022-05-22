<template>
  <div class="hello">
    <h1>Vamos aprender!!!</h1>
    <p style="font-size:40px">{{message}} </p>
  </div>
</template>

<script>
import axios from 'axios';

const API_URL = 'http://localhost:4000/message';

export default {
  name: 'home-test',
  data: () => ({
    error: '',
    message: null,
  }),
  mounted() {
    axios
      .get(API_URL)
      .then((response) => { this.message = (response.data.message); });
  },
  methods: {},
};
</script>
