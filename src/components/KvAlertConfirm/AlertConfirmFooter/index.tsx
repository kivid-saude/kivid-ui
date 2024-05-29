import { PropsWithChildren } from "react";
import { KvButtons } from "../..";

export const AlertConfirmFooter = ({ children }: PropsWithChildren) => {
  return <KvButtons className="kv-alert-confirm-footer">{children}</KvButtons>;
};
