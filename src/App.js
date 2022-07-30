import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';



function App() {
  const [colaboradores, setColaboradores] = useState([])
  
  const aoNovoColaboradorAdicionado = (colaborador)=>{
    setColaboradores([...colaboradores, colaborador])

  }
  
  const timess = [
  {nome: 'Presidencia',
  corPrimaria: '#57C278',
  corSecundaria:'#D9F7E9'},

  {nome: 'Direção',
  corPrimaria: '#82CFFA',
  corSecundaria:'#E8F8FF'},

  {nome: 'Gestão',
  corPrimaria: '#A6D157',
  corSecundaria:'#F0F8E2'},

  {nome: 'Gerência',
  corPrimaria: '#E06B69',
  corSecundaria:'#FDE7E8'},

  {nome: 'Coordenação',
  corPrimaria: '#DB6EBF',
  corSecundaria:'#FAE9F5'},

  {nome: 'Supervisão',
  corPrimaria: '#FFBA05',
  corSecundaria:'#FFF5D9'},

  {nome: 'Operacional',
  corPrimaria: '#FF8A29',
  corSecundaria:'#FFEEDF'}
  ]
  return (
    <div className="App">
      <Banner/>
      <Formulario nomesDosTimes={timess.map(time=>time.nome)} 
      aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
     
      {timess.map(time => <Time
       key={time.nome} 
       nome={time.nome}
       corDoCard={time.corPrimaria} 
       corDoFundo={time.corSecundaria}
       colaboradores={colaboradores.filter(colaborador=> colaborador.time === time.nome)}/> )}
    </div>
  );
}

export default App;
