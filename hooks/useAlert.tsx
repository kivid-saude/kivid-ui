import { useCallback, useState } from "react";
import { AlertProps } from "../components/KvDialog/KvAlert";

type ReturnType = {
  props: AlertProps;
  present(props?: AlertProps): void;
  dismiss(): void;
};

export const useAlert = (props?: AlertProps): ReturnType => {
  const [state, setState] = useState<AlertProps>(() => ({ ...props }));

  const { onDidDismiss } = state;

  const present = useCallback((props?: AlertProps) => {
    setState((state) => ({ ...state, ...props, showModal: true }));
  }, []);

  const dismiss = useCallback(() => {
    setState((state) => ({ ...state, showModal: false }));
    onDidDismiss?.();
  }, [onDidDismiss]);

  return {
    props: {
      ...state,
      onDidDismiss: dismiss,
    },
    present,
    dismiss,
  };
};
