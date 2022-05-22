<template>
  <div class="soma">
    <h1>Soma é a junção de dois ou mais números</h1>
    <input v-model="numero1"/>
    <b>mais</b>
    <input v-model="numero2"/>
    <button v-on:click="somar()">Somar</button>
    <p style="font-size:40px">{{message}} </p>
  </div>
</template>

<script>
import axios from 'axios';

const API_URL = 'http://localhost:4000/calculadora/soma/';

export default {
  name: 'home-test',
  data: () => ({
    error: '',
    numero1: '',
    numero2: '',
    message: null,
  }),
  methods: {
    somar() {
      axios
        .get(`${API_URL}${this.numero1}/${this.numero2}`)
        // eslint-disable-next-line
        .then((response) => { this.message = (response.data.data.texto_simples + ' ' + response.data.data.resultado); });
    },
  },
};
</script>
