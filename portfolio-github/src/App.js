
import './App.css';
import { Repositorio } from './components/data';
import { Resumo } from './components/data/Resumo';

function App() {
  const lista_repositorios = [
    { id: '1', titulo: 'Back-end Developer', descricao: '- Dsenvolvedor Back-end, utilizando C#.', destacar: true  },
    { id: '2', titulo: 'DBA', descricao: '- Criação de BD, utilizando o SQL Server. ', destacar: true }
  ]

  return (
    <div className="App">

      <div className='container'>
        
          <section>
            <h1>{Date()}</h1>
            <hr></hr>
            <Resumo />

            <hr></hr>
            <Repositorio />

            {
              lista_repositorios.length === 0 ? (<p>Nenhum Repositório Disponivel</p>)
                :
                (lista_repositorios.map((array) => (
                  <Repositorio titulo={array.titulo} descricao={array.descricao} destacar={array.destacar}/>
                )))
            }
          </section>
        
      </div>

    </div>
  );
}

export default App;
