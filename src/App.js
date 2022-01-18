import { FiSearch } from "react-icons/fi"
import "./Style.css"
function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>


      <div className="containerInput">
        <input type="text" placeholder="Digite seu CEP..." />
        <button className="buttonSearch">
          <FiSearch size={25} color="white" />
        </button>
      </div>

    <main className="main">
    <h2>CEP: 16211791844</h2>
    <span>Rua Teste</span>
    <span>Complemento: Teste</span>
    <span>Bairro Teste</span>
    <span>Franca - SP</span>
    </main>


    </div>
  );
}

export default App;
