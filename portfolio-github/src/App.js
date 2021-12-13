
import './App.css';
import { Repositorio } from './components/data';
import { Resumo } from './components/data/Resumo';

function App() {
  /* const lista_repositorios = [
  {id:'1', titulo:'teste1', descricao:'descricao1'},
  {id:'2', titulo:'teste2', descricao:'descricao2'},
  {id:'3', titulo:'teste3', descricao:'descricao3'},
  {id:'4', titulo:'teste4', descricao:'descricao4'},
  {id:'5', titulo:'teste5', descricao:'descricao5'}
  ] */

  return (
    <div className="App">

      {/* {
      lista_repositorios.length === 0 ? (<p>Nenhum Repositório Disponivel</p>)
      :
      (lista_repositorios.map((array) =>(
          <h1 key={array.id}> {array.id} - {array.titulo} - {array.descricao}</h1>
        )))
      } */}
      <section class='container'>
      <h1>{Date()}</h1>
      <hr></hr>
      <Resumo/>

      <hr></hr>
      <Repositorio/>
      </section>
    </div>
  );
}

export default App;
