<template>
  <div class="divi">
    <h1>A divisão de um número consiste em seu fracionamento</h1>
    <h1>Podendo ter como resultado um número inteiro ou um número decimal</h1>
    <input v-model="numero1"/>
    <b>dividido por</b>
    <input v-model="numero2"/>
    <button v-on:click="dividir()">Dividir</button>
    <p style="font-size:40px">{{message}} </p>
  </div>
</template>

<script>
import axios from 'axios';

const API_URL = 'http://localhost:4000/calculadora/divi/';

export default {
  name: 'home-test',
  data: () => ({
    error: '',
    numero1: '',
    numero2: '',
    message: null,
  }),
  methods: {
    dividir() {
      axios
        .get(`${API_URL}${this.numero1}/${this.numero2}`)
        .then((response) => { this.message = (`${response.data.data.texto_simples} ${response.data.data.resultado}`); });
    },
  },
};
</script>
