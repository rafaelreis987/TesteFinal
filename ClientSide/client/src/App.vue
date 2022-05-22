<template>
  <!-- eslint-disable max-len -->
  <nav>
    <router-link style="line-height:1.8em;" to="/">Início</router-link>
    <br>
    <router-link style="line-height:1.8em;" to="/about">Saiba mais</router-link>
    <br>
    <router-link style="line-height:1.8em;" to="/soma">Soma</router-link>
    <br>
    <router-link style="line-height:1.8em;" to="/sub">Subtrair</router-link>
    <br>
    <router-link style="line-height:1.8em;" to="/multi">Multiplicar</router-link>
    <br>
    <router-link style="line-height:1.8em;" to="/divi">Dividir</router-link>
    <br>
    <router-link style="line-height:1.8em;" to="/porcent">Porcentagem</router-link>
    <br>
    <router-link style="line-height:1.8em;" to="/sqroot">Raiz Quadrada</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url('assets/Pano_de_fundo_escola.png');
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  font-size:18px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
