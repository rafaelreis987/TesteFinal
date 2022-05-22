<template>
  <div class="sqroot">
    <h1>A raiz quadrada de um número é descobrir qual número elevado ao quadrado resulta nele</h1>
    <b>Raiz quadrada de</b>
    <input v-model="numero1"/>
    <button v-on:click="adicionarAtividade()">Calcular</button>
    <p style="font-size:40px">{{message}} </p>
  </div>
</template>

<script>
import axios from 'axios';

const API_URL = 'http://localhost:4000/calculadora/sqroot/';

export default {
  name: 'home-test',
  data: () => ({
    error: '',
    numero1: '',
    message: null,
  }),
  methods: {
    adicionarAtividade() {
      axios
        .get(`${API_URL}${this.numero1}`)
        .then((response) => { this.message = (`${response.data.data.texto_simples} ${response.data.data.resultado}`); });
    },
  },
};
</script>
