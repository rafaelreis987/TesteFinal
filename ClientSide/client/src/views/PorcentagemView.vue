<template>
  <div class="porcent">
    <h1>Porcentagem é a razão entre um número e 100</h1>
    <h1>Representado pelo símbolo %</h1>
    <input v-model="numero1"/>
    <b>% de</b>
    <input v-model="numero2"/>
    <button v-on:click="adicionarAtividade()">Calcular</button>
    <p style="font-size:40px">{{message}} </p>
  </div>
</template>

<script>
import axios from 'axios';

const API_URL = 'http://localhost:4000/calculadora/porcent/';

export default {
  name: 'home-test',
  data: () => ({
    error: '',
    numero1: '',
    numero2: '',
    message: null,
  }),
  methods: {
    adicionarAtividade() {
      axios
        .get(`${API_URL}${this.numero1}/${this.numero2}`)
        .then((response) => { this.message = (`${response.data.data.texto_simples} ${response.data.data.resultado}`); });
    },
  },
};
</script>
