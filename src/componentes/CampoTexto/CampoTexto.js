import './CampoTexto.css'

/*O parametro props de um elemento serve para interpolar dados nas
propriedades e valores do elemento declarado como tag HTML*/
export const CampoTexto = (props) => {
   
    const aoDigitado = (evento)=>{
        props.aoAlterado(evento.target.value)
    }
    
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>

    )
}


