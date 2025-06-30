const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const router = express.Router();

const app = express();

const eventosPath = path.join(__dirname,'dados', '/eventos.json');

app.use(bodyParser.urlencoded({extended:true}));

const user = "adm";
const password = "adm";


// Login 
app.get('/login', (req, res) => {
    res.send(`
        <p><strong>Teré-Verde</strong></p>
        <h1>Bem vindo (a) ao Portal do Administrador!</h1>
        <br>
        <p><strong>Entre com suas Credenciais:</strong></p>
        <br>
        <form action="/login" method="POST">
            <input type="text" name="login" placeholder="Insira o Login:" required/>
            <input type="password" name="senha" placeholder="Informe a Senha" required/>
            <button type="submit">Entrar</button>
        </form>
    `);
});

app.post('/login', (req, res) => {
    const { login, senha } = req.body;

    if (login === user && senha === password) {
        res.redirect('/portal');

    } else {
        res.send(`
            <p>Oops! Login ou senha incorretos. Tente novamente.</p>
            <a href="/login"><button type="submit">Voltar</button></a>
        `);
    }
});


//Portal do Administrador

app.get('/portal', (req, res) => {
    res.send(`
        <p><strong>Teré-Verde</strong></p>
        <br>
        <h2>Cadastrar Evento</h2>
        <br>
        <form action="/portal" method="POST">
            <input type="text" name="titulo" placeholder="Título do Evento:" required/>
            <br>
            <br>
            <textarea name="descricao" placeholder="Descrição do Evento:" required/></textarea>
            <br>
            <input type="date" name="data" required/>
            <input type="time" name="horario" required/>
            <button type="submit">Criar</button>
        </form>
        <br>
    `);
});

//Eventos
app.post('/portal', (req, res) => {
  const { titulo, descricao, data, horario } = req.body;

  fs.readFile(eventosPath, 'utf8', (err, dataFile) => {
    let eventos = [];
    if (!err && dataFile) {
      eventos = JSON.parse(dataFile);
    }

    eventos.push({ titulo, descricao, data, horario });

    fs.writeFile(eventosPath, JSON.stringify(eventos, null, 2), (err) => {
      if (err) return res.send('Erro ao salvar evento.');
      res.redirect('/eventos');
    });
  });
});


router.get('/eventos', (req, res) => {
  fs.readFile(eventosPath, 'utf-8', (err, data) => {
    const eventos = JSON.parse(data || '[]');

    const lista = eventos.map(e =>
        `
        <h3><strong>${e.titulo}</strong></h3>
        <p>Descrição:${e.descricao}</p>
        <p>Data:${e.data}</p>
        <p>horario:${e.horario}</p>
        <br>
    `).join('');
    res.send(`
         <h1>Eventos Criados:</h1>
        ${lista}
    `);
  });
});

app.listen(3000, function () {
    console.log('Online');
});

app.use('/',router);