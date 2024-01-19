import { useState } from "react";
import { KvButton } from "./components/KvButton/KvButton";
import { KvButtons } from "./components/KvButtons/KvButtons";
import { KvCard } from "./components/KvCard/KvCard";
import {
  KvAlert,
  KvDialogContent,
  KvDialogFooter,
  KvDialogHeader,
} from "./components/KvDialog";
import { KvModal } from "./components/KvDialog/KvModal";
import { KvFieldset } from "./components/KvFieldset/KvFieldset";
import { KvInput } from "./components/KvInput/KvInput";
import { KvLabel } from "./components/KvLabel/KvLabel";
import KvLoading from "./components/KvLoading/KvLoading";
import { KvOtp } from "./components/KvOtp/KvOtp";
import { KvPasswordInput } from "./components/KvPasswordInput/KvPasswordInput";
import { KvTitle } from "./components/KvTitle/KvTitle";
import { useAlert } from "./hooks/useAlert";

function App() {
  const { props: alertProps, present: presentAlert } = useAlert({
    header: "Atenção",
    message:
      "Certifique-se de que as informações estão corretas. Após a confirmação, não será possível altera-lá.",
  });
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className="kv-container">
        <h1>Kivid UI</h1>
        <hr />
      </header>

      <div className="kv-container">
        <KvCard>
          <KvTitle
            title={
              <>
                Bem-vindo ao
                <br />
                <strong>Kivid Vendas</strong>
              </>
            }
            description={`Entre com suas credenciais.`}
            icon="check"
          />

          <form style={{ display: "grid", gap: "1rem" }}>
            <KvFieldset>
              <KvLabel>Nome completo</KvLabel>
              <KvInput placeholder="Digite seu nome completo" required />
            </KvFieldset>

            <KvFieldset>
              <KvLabel>Senha</KvLabel>
              <KvPasswordInput placeholder="Digite sua senha" />
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

        <KvCard>
          <form style={{ display: "grid", gap: "1rem" }}>
            <KvOtp placeholder="######" />

            <KvButtons>
              <KvButton
                className="kv-color-success"
                block
                centered
                type="submit"
              >
                Send
              </KvButton>
            </KvButtons>
          </form>
        </KvCard>

        <br />

        <KvCard>
          <KvButtons column>
            <KvButton centered onClick={() => presentAlert()}>
              Abrir Alert
            </KvButton>
            <KvButton centered onClick={() => setShowModal(true)}>
              Abrir Modal
            </KvButton>
          </KvButtons>
        </KvCard>
      </div>

      <KvLoading isVisible={false} />
      <KvAlert {...alertProps} />

      <KvModal showModal={showModal} onDidDismiss={() => setShowModal(false)}>
        <KvDialogHeader>
          <KvTitle
            title={<>Meu link de vendas</>}
            description="Você ainda não tem um endereço cadastrado. Personalize o seu link abaixo."
          />
        </KvDialogHeader>
        <KvDialogContent>Content</KvDialogContent>
        <KvDialogFooter>
          <KvButtons>
            <KvButton onClick={() => setShowModal(false)}>Cancelar</KvButton>
            <KvButton onClick={() => setShowModal(false)}>Salvar</KvButton>
          </KvButtons>
        </KvDialogFooter>
      </KvModal>
    </>
  );
}

export default App;
