const express = require('express');
const fs = require('fs');
const path = require('path');
const parnaso = require('./dados/parnaso.json');
const trespicos = require('./dados/trespicos.json');
const montanhas = require('./dados/montanhas.json');

const router = express.Router();

// Parnaso
router.get('/parnaso', function (req, res) {
fs.readFile(path.join(__dirname,'./dados/parnaso.json'), 'utf-8', (err, data) => {
if (err) return res.status(500).send('Não foi possível carregar os dados.');

 const parque = JSON.parse(data);
    const listaTrilhas = parque.trilhas.map(t => `
      <li>${t.nome} - Nível: ${t.nível}  Tempo: ${t.tempo}</li>
    `).join('');

    const ListaCachoeiras = parque.cachoeiras.map(c => `
      <li>${c.nome} - Acesso: ${c.acesso} Indicado para: ${c.indicadoPara}</li>
    `).join('');

    const fauna = parque.biodiversidade.fauna.join(', ');
    const flora = parque.biodiversidade.flora.join(', ');

        res.send(`
            <h1>${parnaso.nome}</h1>
            <p>Localização:${parnaso.localizacao}</p>
            <p>Descrição:${parnaso.descricao}</p>
            <p>Horário:${parnaso.horario}</p>
            <p>Contato:${parnaso.contato}</p>
            <h2>Trilhas</h2>
                 <ul>${listaTrilhas}</ul>

            <h2>Cachoeiras</h2>
                 <ul>${ListaCachoeiras}</ul>

            <h2>Biodiversidade</h2>
                <p>Fauna:${fauna}</p>
                <p>Flora:${flora}</p>
        `);
    });
});

// Três Picos
router.get('/trespicos', function (req, res) {
fs.readFile(path.join(__dirname,'./dados/trespicos.json'), 'utf-8', (err, data) => {
if (err) return res.status(500).send('Não foi possível carregar os dados.');

 const parque = JSON.parse(data);
    const listaTrilhas = parque.trilhas.map(t => `
      <li>${t.nome} - Nível: ${t.nível}  Tempo: ${t.tempo}</li>
    `).join('');

    const ListaCachoeiras = parque.cachoeiras.map(c => `
      <li>${c.nome} - Acesso: ${c.acesso} Indicado para: ${c.indicadoPara}</li>
    `).join('');

    const fauna = parque.biodiversidade.fauna.join(', ');
    const flora = parque.biodiversidade.flora.join(', ');

        res.send(`
            <h1>${trespicos.nome}</h1>
            <p>Descrição:${trespicos.descricao}</p>
            <p>Localização:${trespicos.localizacao}</p>
            <p>Horário:${trespicos.horario}</p>
            <p>Contato:${trespicos.contato}</p>
            <h2>Trilhas</h2>
                 <ul>${listaTrilhas}</ul>

            <h2>Cachoeiras</h2>
                 <ul>${ListaCachoeiras}</ul>

            <h2>Biodiversidade</h2>
                <p>Fauna:${fauna}</p>
                <p>Flora:${flora}</p>
        `);
    });
});

// Montanhas
router.get('/montanhas', function (req, res) {
fs.readFile(path.join(__dirname,'./dados/montanhas.json'), 'utf-8', (err, data) => {
if (err) return res.status(500).send('Não foi possível carregar os dados.');

 const parque = JSON.parse(data);
    const listaTrilhas = parque.trilhas.map(t => `
      <li>${t.nome} - Nível: ${t.nível}  Tempo: ${t.tempo}</li>
    `).join('');

    const ListaCachoeiras = parque.cachoeiras.map(c => `
      <li>${c.nome} - Acesso: ${c.acesso} Indicado para: ${c.indicadoPara}</li>
    `).join('');

    const fauna = parque.biodiversidade.fauna.join(', ');
    const flora = parque.biodiversidade.flora.join(', ');

        res.send(`
            <h1>${montanhas.nome}</h1>
            <p>Descrição:${montanhas.descricao}</p>
            <p>Localização:${montanhas.localizacao}</p>
            <p>Horário:${montanhas.horario}</p>
            <p>Contato:${montanhas.contato}</p>
            <h2>Trilhas</h2>
                 <ul>${listaTrilhas}</ul>

            <h2>Cachoeiras</h2>
                 <ul>${ListaCachoeiras}</ul>

            <h2>Biodiversidade</h2>
                <p>Fauna:${fauna}</p>
                <p>Flora:${flora}</p>
        `);
    });
});


module.exports = router;