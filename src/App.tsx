import {
  KvAlert,
  KvBadge,
  KvButton,
  KvButtons,
  KvCard,
  KvChip,
  KvDialogContent,
  KvDialogFooter,
  KvDialogHeader,
  KvFieldset,
  KvIcon,
  KvInput,
  KvLabel,
  KvLoading,
  KvModal,
  KvOtp,
  KvPasswordInput,
  KvSelect,
  KvSidebar,
  KvTitle,
  Smask,
} from "./components";
import { KvIconButton } from "./components/KvIconButton";
import { KvSeal } from "./components/KvSeal";

import { useAlert } from "./hooks/useAlert";
import { useModal } from "./hooks/useModal";
import logo from "/logo-kivid.svg";
import logoHorizontal from "/logo-kivid-horizontal.svg";
import { KvMultiSelect } from "./components/KvMultiSelect";
import { useState } from "react";

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

  const options = [
    {
      label: 'Audi',
      value: 'audi'
    },
    {
      label: 'BMW',
      value: 'bmw'
    },
    {
      label: 'Honda',
      value: 'honda'
    },
    {
      label: 'BYD',
      value: 'byd'
    },
    {
      label: 'Fiat',
      value: 'fiat'
    },
    {
      label: 'Ford',
      value: 'ford'
    }
  ]

  const [multiSelectValues, setMultiSelectValues] = useState([])

  return (
    <>
      <KvSidebar
        logo={<img src={window.innerWidth >= 768 ? logo : logoHorizontal} />}
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
            iconColor="success"
          />


          <section style={{ margin: '20px 0' }}>
            <h3>MultiSelect</h3>
            <KvFieldset>
              <KvLabel>
                Marcas de carro:
              </KvLabel>
              <KvMultiSelect
                onSelectedChange={() => setMultiSelectValues}
                options={options}
                value={multiSelectValues}
                enableAllValuesSelectionMode
              />
            </KvFieldset>
          </section>

          <form style={{ display: "grid", gap: "1rem", marginTop: "1.5rem" }}>
            <KvFieldset>
              <KvInput placeholder="Digite seu nome completo" required />
            </KvFieldset>

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
              <KvIconButton type="button" color="success">
                <KvIcon icon="check" className="kv-color-white" />
              </KvIconButton>
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

            <KvFieldset>
              <KvSelect>
                <option value="">Selecione...</option>
                <option value="Opção 1">Opção 1</option>
                <option value="Opção 2">Opção 2</option>
                <option value="Opção 3">Opção 3</option>
                <option value="Opção 4">Opção 4</option>
              </KvSelect>
            </KvFieldset>

            <KvButtons>
              <KvButton color="success" expand="block" type="submit">
                Success Button
              </KvButton>

              <KvButton color="success" expand="block" disabled>
                Disabled Success Button
              </KvButton>
            </KvButtons>
          </form>
        </KvCard>

        <KvCard>
          <form style={{ display: "grid", gap: "1rem" }}>
            <KvOtp placeholder="######" />

            <KvButtons>
              <KvButton color="success" expand="block" type="submit">
                Send
              </KvButton>
            </KvButtons>
          </form>
        </KvCard>

        <br />

        <KvCard>
          <div style={{ display: "flex", gap: "1rem" }}>
            <KvIcon icon="add" />

            <KvBadge color="warning" label="+99" />

            <KvSeal variant="success" />

            <KvChip variant="neutral" label="Confirmado" size="medium" />
          </div>
        </KvCard>

        <br />

        <KvCard>
          <KvButtons column>
            <KvButton onClick={() => presentAlert()}>Abrir Alert</KvButton>
            <KvButton onClick={() => presentModal()}>Abrir Modal</KvButton>
            <KvButton loading color="success" onClick={() => presentModal()}>
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
