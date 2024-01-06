import { KvButton } from "./components/KvButton/KvButton";
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

      <form className="kv-container" style={{ display: "grid", gap: "1rem" }}>
        <p>KvInput:</p>

        <KvFieldset>
          <KvLabel>Nome completo</KvLabel>
          <KvInput placeholder="Digite seu nome completo" required />
        </KvFieldset>

        <KvButton className="kv-color-success" block centered type="submit">
          Button
        </KvButton>

        <KvButton className="kv-color-success" block centered disabled>
          Disabled Button
        </KvButton>
      </form>
    </>
  );
}

export default App;
