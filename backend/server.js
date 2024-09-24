import express from 'express';
import cors from 'cors';

const server = express();
const port = 3003;

server.use(express.json());
server.use(cors());

server.get('/cards', (req, resp) => {
    let cards = [
        {
          "semConteudo": false,
          "titulo": 'Componentes',
          "subtitulo": 'Assuntos',
          "objetivos": `- Objetos e Listas de Objetos;
    - Componentes.`,
          "entregaTrab": false,
          "data": '26/agosto',
          "status": 'Completo'
        },
    
        {
          "semConteudo": false,
          "titulo": 'Renderização e Efeito',
          "subtitulo": 'Assuntos',
          "objetivos": `- Componentes na renderização.`,
          "entregaTrab": false,
          "data": '02/setembro',
          "status": 'Em andamento'
        },
    
        {
          "semConteudo": false,
          "titulo": 'Consumindo APIs - Parte 1',
          "subtitulo": 'Assuntos',
          "objetivos": `- Componentes na renderização.`,
          "entregaTrab": true,
          "data": '09/setembro',
          "status": 'Criado'
        },
    
        {
          "semConteudo": false,
          "titulo": 'Prova Prática e Teórica',
          "subtitulo": 'Assuntos',
          "objetivos": `- Criando um projeto React;
    - Estilização com SCSS;
    - Navegação entre telas;
    - Variáveis de estado;
    - Renderização de lista;
    - Componentes.`,
          "entregaTrab": false,
          "data": '16/setembro',
          "status": 'Evento'
        },
        {
          "semConteudo": true,
          "titulo": 'Fim do bimestre'
        }
    ]

    resp.status(200).send(cards)
});

server.listen(port, () => console.log(`Executando na porta ${port}`))