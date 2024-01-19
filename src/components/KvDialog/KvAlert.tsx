import { KvButton } from "../KvButton/KvButton";
import { KvButtons } from "../KvButtons/KvButtons";
import { DialogProps, KvDialog } from "./KvDialog";
import { KvDialogContent } from "./KvDialogContent";
import { KvDialogFooter } from "./KvDialogFooter";
import { KvDialogHeader } from "./KvDialogHeader";

export type AlertProps = DialogProps & {
  header?: string;
  message?: string | React.ReactNode;
};

export const KvAlert = ({
  message,
  header,
  onDidDismiss,
  ...props
}: AlertProps) => {
  return (
    <KvDialog {...props}>
      <KvDialogHeader>{header}</KvDialogHeader>
      <KvDialogContent>{message}</KvDialogContent>
      <KvDialogFooter>
        <KvButtons>
          <KvButton centered onClick={() => onDidDismiss?.()}>
            OK
          </KvButton>
        </KvButtons>
      </KvDialogFooter>
    </KvDialog>
  );
};
