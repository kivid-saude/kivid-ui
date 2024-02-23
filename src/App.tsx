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
import { KvHeader } from "./components/KvHeader/KvHeader";
import { KvIcon } from "./components/KvIcon/KvIcon";
import { KvInput } from "./components/KvInput/KvInput";
import { KvLabel } from "./components/KvLabel/KvLabel";
import KvLoading from "./components/KvLoading/KvLoading";
import { KvOtp } from "./components/KvOtp/KvOtp";
import { KvPasswordInput } from "./components/KvPasswordInput/KvPasswordInput";
import { KvSelect } from "./components/KvSelect/KvSelect";
import { KvTitle } from "./components/KvTitle/KvTitle";
import { Smask } from "./components/Smask/Smask";
import { useAlert } from "./hooks/useAlert";
import { useModal } from "./hooks/useModal";
import logo from "/logo-kivid.svg";

function App() {
  const { props: alertProps, present: presentAlert } = useAlert({
    title: <KvTitle title="Atenção" />,
    message:
      "Certifique-se de que as informações estão corretas. Após a confirmação, não será possível altera-lá.",
  });
  const {
    props: modalProps,
    present: presentModal,
    dismiss: dismissModal,
  } = useModal();

  return (
    <>
      <KvHeader
        logo={<img src={logo} />}
        title={`Afiliados`}
        link={<a href="">kivid.com.br</a>}
      />

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
              <KvLabel>Agência</KvLabel>
              <Smask mask={["d-d", "dd-d", "ddd-d", "dddd-d"]}>
                <KvInput placeholder="Digite seu nome completo" />
              </Smask>
            </KvFieldset>

            <KvFieldset>
              <KvLabel>CPF</KvLabel>
              <KvInput placeholder="Digite seu CPF" required />
              <KvButton
                type="button"
                className="slot slot--right"
                color="success"
                iconOnly
              >
                <KvIcon icon="check" className="text-white" />
              </KvButton>
            </KvFieldset>

            <KvFieldset>
              <KvLabel>Senha</KvLabel>
              <KvPasswordInput placeholder="Digite sua senha" />
            </KvFieldset>

            <KvFieldset>
              <KvLabel>KvSelect</KvLabel>
              <KvSelect>
                <option value="">Selecione...</option>
                <option value="Opção 1">Opção 1</option>
                <option value="Opção 2">Opção 2</option>
                <option value="Opção 3">Opção 3</option>
                <option value="Opção 4">Opção 4</option>
              </KvSelect>
            </KvFieldset>

            <KvButtons>
              <KvButton
                color="success"
                expand="block"
                textAlign="center"
                type="submit"
              >
                Success Button
              </KvButton>

              <KvButton
                color="success"
                expand="block"
                textAlign="center"
                disabled
              >
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
                color="success"
                expand="block"
                textAlign="center"
                type="submit"
              >
                Send
              </KvButton>
            </KvButtons>
          </form>
        </KvCard>

        <br />

        <KvCard>
          <div style={{ display: "flex", gap: "1rem" }}>
            <KvIcon icon="add" />
            <KvIcon icon="add-circle" />
          </div>
        </KvCard>

        <br />

        <KvCard>
          <KvButtons column>
            <KvButton textAlign="center" onClick={() => presentAlert()}>
              Abrir Alert
            </KvButton>
            <KvButton textAlign="center" onClick={() => presentModal()}>
              Abrir Modal
            </KvButton>
            <KvButton
              textAlign="center"
              loading
              color="success"
              onClick={() => presentModal()}
            >
              Loading Button
            </KvButton>
          </KvButtons>
        </KvCard>
      </div>
      <KvLoading isVisible={false} />
      <KvAlert {...alertProps} />
      <KvModal {...modalProps}>
        <KvDialogHeader>
          <KvTitle
            title={<>Meu link de vendas</>}
            description="Você ainda não tem um endereço cadastrado. Personalize o seu link abaixo."
          />
        </KvDialogHeader>
        <KvDialogContent>Content</KvDialogContent>
        <KvDialogFooter>
          <KvButton onClick={() => dismissModal()}>Cancelar</KvButton>
          <KvButton onClick={() => dismissModal()}>Salvar</KvButton>
        </KvDialogFooter>
      </KvModal>
    </>
  );
}

export default App;
