import './Colaborador.css'


// a seguir desestruturamos o objeto 'props' passando apenas oq vai ser utilizado
const Colaborador = ({nome, imagem, cargo, corDeCard})=>{
    return(
        <div className="colaborador">
            <div className='cabecalho' style={{backgroundColor: corDeCard}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador