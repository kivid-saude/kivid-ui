import { ReactNode } from "react";

type TAlertConfirmHeaderDescription = {
  primaryText?: string | ReactNode;
  secondaryText?: string | ReactNode;
};

export const AlertConfirmHeaderDescription = ({
  primaryText,
  secondaryText,
}: TAlertConfirmHeaderDescription) => {
  return (
    <div className="kv-description">
      <p className="kv-description--primary">{primaryText}</p>
      <p className="kv-description--secondary">{secondaryText}</p>
    </div>
  );
};
