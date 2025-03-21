import { useCallback, useState } from "react";
import { ConfirmProps } from "../components/KvDialog/KvConfirm";

type ReturnType = {
  props: ConfirmProps;
  present(props?: ConfirmProps): void;
  dismiss(): void;
};

export const useConfirm = (props?: ConfirmProps): ReturnType => {
  const [state, setState] = useState<ConfirmProps>(() => ({ ...props }));

  const present = useCallback((props?: ConfirmProps) => {
    setState((state) => ({ ...state, ...props, showModal: true }));
  }, []);

  const dismiss = useCallback(() => {
    setState((state) => ({ ...state, showModal: false }));
  }, []);

  return {
    props: state,
    present,
    dismiss,
  };
};
