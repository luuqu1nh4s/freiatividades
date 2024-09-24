import './index.scss'

function Card({titulo, subtitulo, objetivos, entregaTrab, data, status, semConteudo}){
    let corPrimaria = ''
    let corSegundaria = ''
    
    switch (status) {
        case 'Completo':
            corPrimaria = '#A3E5BA'
            corSegundaria = '#EFFBE2'
            break;

        case 'Em andamento':
            corPrimaria = '#DCA3E5'
            corSegundaria = '#EDE2FB'
            break;
    
        case 'Evento':
            corPrimaria = '#F6E448'
            corSegundaria = '#FAF4C1'
            break;

        default:
            corPrimaria = '#C3C3C3'
            corSegundaria = '#F2F2F2'
            break;
    }

    return(
        <div className='cards'>
            <div className='card' style={{ backgroundColor: corSegundaria }}>
                <div className='card-cabecalho' style={{ backgroundColor: corPrimaria }}>
                    <h2 className='titulo'>{titulo}</h2>
                </div>
                <div className='card-conteudo'>
                    <h3 className='subtitulo'>{subtitulo}</h3>
                    <pre className='objetivos'>
                        {objetivos}
                    </pre>
                </div>
                <div className="card-infos">
                    {entregaTrab && <p className='tag'>Entrega Trab.</p>}
                    <p className='tag'>{data}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;

export function CardVazio({titulo}){

    return(
        <div className='cards'>
            <div className='card-cabecalho'>
                <h2 className='titulo'>{titulo}</h2>
            </div>
        </div>
    )
}