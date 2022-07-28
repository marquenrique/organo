import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props)=>{
// a propriedade style funciona como um css-in-line do html no estilo python
    const css = {backgroundColor: props.corDoFundo}
// o operador '?' funciona como uma operador ternario que so retorna 
// o elemento passado depois dele(?) se a condicao antes dele for vdd
// caso nao ele retorna oq vem depos do ':' ou seja nada

return(
    (props.colaboradores.length > 0) ? <section className='time' style={css}>
        <h3 style={{ borderColor: props.corDoCard }}>{props.nome}</h3>
        <div className='colaboradores'>
        {props.colaboradores.map(colaborador => <Colaborador corDeCard={props.corDoCard} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
        </div>
    </section>
    : ''

)

}

export default Time