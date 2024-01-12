import { DialogProps, KvDialog } from ".";
import { KvButton } from "../KvButton/KvButton";
import { KvButtons } from "../KvButtons/KvButtons";
import { KvDialogContent } from "./KvDialogContent";
import { KvDialogFooter } from "./KvDialogFooter";
import { KvDialogHeader } from "./KvDialogHeader";

type ConfirmProps = DialogProps & {
  title?: string;
  message?: string;
  accept?: string;
  cancel?: string;
  onDidDismiss?: (bool?: boolean) => void;
};

export const KvConfirm = ({
  title,
  message,
  accept = "Sim",
  cancel = "Não",
  onDidDismiss,
  ...props
}: ConfirmProps) => {
  return (
    <KvDialog {...props}>
      <KvDialogHeader>{title}</KvDialogHeader>
      <KvDialogContent>{message}</KvDialogContent>
      <KvDialogFooter>
        <KvButtons>
          <KvButton
            className="button button--primary-light"
            onClick={() => onDidDismiss?.(false)}
          >
            {cancel}
          </KvButton>
          <KvButton
            className="button button--primary-light"
            onClick={() => onDidDismiss?.(true)}
          >
            {accept}
          </KvButton>
        </KvButtons>
      </KvDialogFooter>
    </KvDialog>
  );
};
