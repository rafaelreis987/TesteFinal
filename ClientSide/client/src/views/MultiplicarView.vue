<template>
  <div class="multi">
    <h1>Multiplicação é a soma sucessiva de um número por ele mesmo</h1>
    <input v-model="numero1"/>
    <b>multiplicado por</b>
    <input v-model="numero2"/>
    <button v-on:click="multiplicar()">Multiplicar</button>
    <p style="font-size:40px">{{message}} </p>
  </div>
</template>

<script>
import axios from 'axios';

const API_URL = 'http://localhost:4000/calculadora/multi/';

export default {
  name: 'home-test',
  data: () => ({
    error: '',
    numero1: '',
    numero2: '',
    message: null,
  }),
  methods: {
    multiplicar() {
      axios
        .get(`${API_URL}${this.numero1}/${this.numero2}`)
        .then((response) => { this.message = (`${response.data.data.texto_simples} ${response.data.data.resultado}`); });
    },
  },
};
</script>
