const express = require('express');
const app = express();
const fs = require ('fs');
const rotasParques = require('./parques');
const eventos = require('./dados/eventos.json');

app.use(express.json());

app.use('/', rotasParques);

// Home
app.get('/home', (req, res) => {
     const lista = eventos.map(e => `
    <li>
      <strong>${e.titulo}</strong><br>
      ${e.descricao}<br>
      ${e.data} ${e.horario}
    </li>
  `).join('');
    res.send(`<p><strong>Teré-Verde</strong></p>
              <h1>Bem Vindo (a) ao Portal de Ecoturismo de Teresópolis!</h1>
              <p>Descubra Trilhas e Cachoeiras Incríveis da Nossa Cidade<p>
               <a href="/parnaso">Parque Nacional da Serra dos Órgãos</a>
               <br>
               <a href="/trespicos">Parque Estadual dos Três Picos</a>
               <br>
               <a href="/montanhas">Parque Natural Municipal Montanhas de Teresópolis</a>
               <br>
               <h2>Eventos:</h2>       
                  <ul>
                     ${lista}
                  </ul>      
        `);
});

 


app.listen(3000, function () {
    console.log('Online');
});
