# Calculadora Escolar

## 1 - Rodar Aplicação Servidor
Para rodar este app, primeiro deve-se abrir a pasta TesteFinal\ServerSide e rodar o seguinte comando
```
node server.js
```

## 2 Rodar Aplicação Cliente
Segundamente, deve-se abrir outro terminal enquanto se mantém o servidor rodando, neste outro terminal deve-se ir até a pasta Desafio calculadora\ClientSide\client e rodar o comando:
```
npm run serve
```

Feito isso a aplicação pode ser acessada pelo link: http://localhost:8080/

# Tecnologias Usadas
## ClientSide
* VueJS
* vuecli
* axios

 ## ServerSide
 * ExpressJS
 * cors

# Comandos de Teste e instalações

Para instalar o vuecli foi utilizado o comando:
```
npm i @vue/cli
```
Para testar depois foi feito estes dois comandos: 
```
cd client
npm run serve
```
Para instalar o axios foi utilizado o comando:
```
 npm install axios --save
```
Para instalar o cors foi utilizado o comando:
```
 npm install cors
 ```