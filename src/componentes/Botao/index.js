import './Botao.css'

const Botao = (props) =>{
/*o props.children representa tudo o que for passado dentro da tag
do elemento criado*/
    return(
        <button className="botao">
            {props.children}
        </button>
    )
}

export default Botao
