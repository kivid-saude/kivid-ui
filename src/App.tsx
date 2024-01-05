import "./App.css";
import { Input } from "./components/Input/Input";

function App() {
  return (
    <>
      <header className="kv-container">
        <h1>Kivid UI</h1>
        <hr />
      </header>
      <div className="kv-container">
        <p>KvInput:</p>
        <Input label="Nome completo" placeholder="Digite seu nome completo" />
      </div>
    </>
  );
}

export default App;
