const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;
var cors = require('cors');

app.use(cors());

app.get('/message', function(req, res) {
    // res.sendFile(path.join(__dirname, '../ClientSide/index.html'));
    res.json({
        message: 'Escolha sua operação!!!'
    });
  });

  app.get('/calculadora/soma/:num1/:num2', function(req, res) {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    var data = {
        texto_simples: 'O resultado é',
        resultado: num1 + num2
    };
    res.json({
        data: data
    });
  });

  app.get('/calculadora/sub/:num1/:num2', function(req, res) {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    var data = {
        texto_simples: 'O resultado é',
        resultado: num1 - num2
    };
    res.json({
        data: data
    });
  });

  app.get('/calculadora/multi/:num1/:num2', function(req, res) {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    var data = {
        texto_simples: 'O resultado é',
        resultado: num1 * num2
    };
    res.json({
        data: data
    });
  });

  app.get('/calculadora/divi/:num1/:num2', function(req, res) {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    var data = {
        texto_simples: 'O resultado é',
        resultado: num1 / num2
    };
    res.json({
        data: data
    });
  });

  app.get('/calculadora/porcent/:num1/:num2', function(req, res) {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    var data = {
        texto_simples: 'O resultado é',
        resultado: (num2/100)*num1
    };
    res.json({
        data: data
    });
  });

  app.get('/calculadora/sqroot/:num1', function(req, res) {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    var data = {
        texto_simples: 'O resultado é',
        resultado: Math.sqrt(num1)
    };
    res.json({
        data: data
    });
  });

app.listen(port);
console.log('Server started at http://localhost:' + port);
