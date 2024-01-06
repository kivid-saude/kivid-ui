import { KvButton } from "./components/KvButton/KvButton";
import { KvButtons } from "./components/KvButtons/KvButtons";
import { KvCard } from "./components/KvCard/KvCard";
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
        <KvCard style={{ padding: "2rem" }}>
          <header className="kv-title">
            <h1 className="kv-title__heading">
              Bem-vindo ao
              <br />
              <span style={{ fontWeight: "700" }}>Kivid Vendas</span>
            </h1>
            <p className="kv-title__description">Entre com suas credenciais.</p>
          </header>
          <form style={{ display: "grid", gap: "1rem" }}>
            <KvFieldset>
              <KvLabel>Nome completo</KvLabel>
              <KvInput placeholder="Digite seu nome completo" required />
            </KvFieldset>

            <KvButtons>
              <KvButton
                className="kv-color-success"
                block
                centered
                type="submit"
              >
                Success Button
              </KvButton>

              <KvButton className="kv-color-success" block centered disabled>
                Disabled Success Button
              </KvButton>
            </KvButtons>
          </form>
        </KvCard>
      </div>
    </>
  );
}

export default App;
