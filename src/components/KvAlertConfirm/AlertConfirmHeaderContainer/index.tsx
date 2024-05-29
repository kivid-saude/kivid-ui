import { ReactNode } from "react";

type TAlertConfirmHeaderContainer = {
  primaryText: string | ReactNode;
  secondarySecondary?: string | ReactNode;
};

export const AlertConfirmHeaderContainer = ({
  primaryText,
  secondarySecondary,
}: TAlertConfirmHeaderContainer) => {
  return (
    <div className="kv-title-container">
      <h2 className="kv-title-container--primary">{primaryText}</h2>
      <h2 className="kv-title-container--secondary">{secondarySecondary}</h2>
    </div>
  );
};
