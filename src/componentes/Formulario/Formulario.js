import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react'

export const Formulario = (props) => {

//set+campos seguido por parenteses e aspas para limpar o campo
//depois que o formulario for submetido
    const aoSalvar = (evento)=>{
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome, 
            cargo,
            imagem,
            time
        })
        setNome("")
        setCargo("")
        setImagem("")
        setTime("")
    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    return (
        <section className="formulario">

            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card de funcionário</h2>
                <CampoTexto valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto valor={imagem} aoAlterado={valor => setImagem(valor)} label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa valor={time} aoAlterado={valor => setTime(valor)} label="Time" itens={props.nomesDosTimes}/>
                <Botao> Criar Card </Botao>
            </form>

        </section>
    )
}

export default Formulario
