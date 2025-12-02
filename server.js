const express = require('express');
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

//Parques e Eventos//
const montanhas = require('./dados/montanhas.json');
const parnaso = require('./dados/parnaso.json');
const trespicos = require('./dados/trespicos.json');

// Caminho do arquivo de eventos
const eventosPath = path.join(__dirname, "dados", "eventos.json");

// Função para carregar eventos
function carregarEventos() {
    if (!fs.existsSync(eventosPath)) {
        return [];
    }
    const data = fs.readFileSync(eventosPath, "utf8");
    return JSON.parse(data || "[]");
}

// Função para salvar eventos
function salvarEventos(eventos) {
    fs.writeFileSync(eventosPath, JSON.stringify(eventos, null, 2), "utf8");
}

app.use(express.static('front-end'));

//Rotas Front-End//
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/front-end/index.html');
});

app.get('/montanhas', (req, res) => {
    res.sendFile(__dirname + '/front-end/montanhas.html');
});

app.get('/parnaso', (req, res) => {
    res.sendFile(__dirname + '/front-end/parnaso.html');
});

app.get('/trespicos', (req, res) => {
    res.sendFile(__dirname + '/front-end/trespicos.html');
});

app.get('/api/montanhas', (req, res) => {
    res.json(montanhas);
});

app.get('/api/parnaso', (req, res) => {
    res.json(parnaso);
});

app.get('/api/trespicos', (req, res) => {
    res.json(trespicos);
});

// Listar eventos
app.get('/api/eventos', (req, res) => {
    const eventos = carregarEventos();
    res.json(eventos);
});

// Login
const USER = "admin";
const PASSWORD = "1234";

app.post("/api/login", (req, res) => {
    const { login, senha } = req.body;

    if (login === USER && senha === PASSWORD) {
        return res.json({ ok: true });
    }

    return res.json({ ok: false, message: "Usuário ou senha incorretos" });
});

// Criar evento
app.post('/api/eventos', (req, res) => {
    const eventos = carregarEventos();

    const novoEvento = {
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        data: req.body.data,
        horario: req.body.horario,
        local: req.body.local
    };

    eventos.push(novoEvento);
    salvarEventos(eventos);

    res.json({ message: "Evento criado com sucesso!" });
});

// Excluir evento
app.delete('/api/eventos/:id', (req, res) => {
    const eventos = carregarEventos();
    const id = Number(req.params.id);

    if (!eventos[id]) {
        return res.status(404).json({ error: "Evento não encontrado" });
    }

    eventos.splice(id, 1);
    salvarEventos(eventos);

    res.json({ message: "Evento excluído!" });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
