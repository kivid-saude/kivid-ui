import { KvFieldset } from "./components/KvFieldset/KvFieldset";
import { KvInput } from "./components/KvInput/KvInput";
import { KvLabel } from "./components/KvLabel/KvLabel";

function App() {
  return (
    <>
      <header className="kv-container">
        <h1>Kivid UI</h1>
        <hr />
      </header>
      <div className="kv-container">
        <p>KvInput:</p>
        <KvFieldset>
          <KvLabel>Nome completo</KvLabel>
          <KvInput placeholder="Digite seu nome completo" />
        </KvFieldset>
      </div>
    </>
  );
}

export default App;
