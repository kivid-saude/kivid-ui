import { useCallback, useState } from "react";
import { DialogProps } from "../components/KvDialog/KvDialog";

type ReturnType = {
  props: DialogProps;
  present(props?: DialogProps): void;
  dismiss(): void;
};

export const useModal = (): ReturnType => {
  const [state, setState] = useState<DialogProps>();

  const present = useCallback(() => {
    setState((state) => ({ ...state, showModal: true }));
  }, []);

  const dismiss = useCallback(() => {
    setState((state) => ({ ...state, showModal: false }));
  }, []);

  return {
    props: {
      ...state,
      onDidDismiss: dismiss,
    },
    present,
    dismiss,
  };
};
