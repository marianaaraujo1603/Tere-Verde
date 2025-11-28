# Tere-Verde
Portal de Ecoturismo de Teresópolis.

Feito Por: Mariana Santos de Araújo

# Descrição:

O Portal de Ecoturismo Teré-Verde é voltado para divulgar informações sobre os principais parques da cidade, além de oferecer uma área administrativa para cadastro e gestão de eventos e atividades relacionadas à natureza, montanhismo e oficinas.

# Objetivos Principais:
-> Listagem de Parques e Informações de Trilhas e Cachoeiras;

-> Cadastro de novos eventos e atividades;

-> Navegação clara e intuitiva para facilitar o uso.

# Público-Alvo:
-> Moradores Locais e Turistas: Interessados em conhecer trilhas, cacoherias e atividades ecológicas em Teresópolis.

-> Administradores: responsáveis pela gestão dos parques, que podem cadastrar eventos de forma simmples, sem necessidade de conhecimentos avançados em programação.

# Tecnologias e Ferramentas: Visual Studio Code, Canva, Node.js, JSON e Express.js.

# Requisitos Funcionais e Não Funcionais:
[[Teré-Verde_requisitos.pdf](https://github.com/marianaaraujo1603/Tere-Verde/blob/main/Ter%C3%A9-Verde_requisitos.pdf)]

# Como Rodar o Projeto Tere-Verde

Siga os passos abaixo para rodar o projeto localmente.

✅ 1. Clone o repositório
git clone https://github.com/marianaaraujo1603/Tere-Verde.git

Entre na pasta:

cd Tere-Verde
✅ 2. Instale as dependências

O backend usa Node.js + Express.

Instale tudo com:

npm install
✅ 3. Estrutura necessária

O projeto funciona com a seguinte estrutura de pastas:

Tere-Verde/
 ├── front-end/
 │   ├── index.html
 │   ├── adm.html
 │   ├── montanhas.html
 │   ├── trespicos.html
 │   ├── parnaso.html
 │   ├── CSS/
 │   ├── JS/
 │   └── Imagens/
 ├── dados/
 │   ├── eventos.json
 │   ├── montanhas.json
 │   ├── parnaso.json
 │   └── trespicos.json
 ├── server.js
 ├── package.json

Certifique-se de que essa estrutura existe no seu clone.

✅ 4. Rodar o servidor

Execute:

node server.js

✅ 5. Acessar o site

Após rodar o servidor, acesse:

http://localhost:3000

✅ 6. Acessar o Painel de Login

http://localhost:3000/login

E informe admin em usuário e senha.

Assim terá acesso ao Portal do Administrador.

O painel permite cadastrar, listar e excluir eventos, que aparecem automaticamente no carrossel da Home.

📝 7. Arquivo de eventos

Os eventos ficam salvos em:

/dados/eventos.json

Sempre que cadastrar um novo evento, este arquivo é atualizado automaticamente.

# Apresentação:
(https://www.canva.com/design/DAGpmgqX7v0/m8DwWz5h1BnkK6NUseVgaA/edit?utm_content=DAGpmgqX7v0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)


# Wireframe:

![1]([https://github.com/marianaaraujo1603/Tere-Verde/blob/main/Wireframe/1.%20Home.png](https://github.com/marianaaraujo1603/Tere-Verde/blob/main/Wireframe/HOME.png))
![2]([https://github.com/marianaaraujo1603/Tere-Verde/blob/main/Wireframe/2.%20Parnaso.png](https://github.com/marianaaraujo1603/Tere-Verde/blob/main/Wireframe/LOGIN%20HOME.png))
![3]([https://github.com/marianaaraujo1603/Tere-Verde/blob/main/Wireframe/3.%20Tr%C3%AAs%20Picos.png](https://github.com/marianaaraujo1603/Tere-Verde/blob/main/Wireframe/MODELO%20PARQUES.png))
![4]([https://github.com/marianaaraujo1603/Tere-Verde/blob/main/Wireframe/4.%20Montanhas.png](https://github.com/marianaaraujo1603/Tere-Verde/blob/main/Wireframe/PAINEL%20ADM.png))





