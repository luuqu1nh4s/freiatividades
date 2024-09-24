import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Card from '../../components/cards';
import CardVazio from '../../components/cards';
import api from '../../services/api';
import { useState } from 'react';

function App() {

  const [cards, setCards] = useState([]);

  async function ListarCards(){
    try {
      const resposta = await api.get('/cards');
      setCards (resposta.data)
    }
    catch(err){
      alert(err)
    }
  }

  return (
    <div className="pagina-home">
      <Cabecalho/>
      <div className="secao">
        
        <p className="conteudos">Conteúdos</p>
    
        <button className="botao" onClick={ListarCards}>ACESSAR CARDS</button>

        <div className="cards">
            {
              cards.map (card =>

                card.semConteudo
                  ? <CardVazio
                      titulo = {card.titulo}
                    />
                  : <Card
                      titulo = {card.titulo}
                      subtitulo = {card.subtitulo}
                      objetivos = {card.objetivos}
                      entregaTrab = {card.entregaTrab}
                      data = {card.data}
                      status = {card.status}
                    />
              )
            }
        </div>
      </div>
    </div>
  );
}

export default App;