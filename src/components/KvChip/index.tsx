import { KvSeal } from "../KvSeal";
import styles from "./styles.module.scss";

type TKvChip = {
  label: string;
  mode?: "success" | "add" | "error" | "alert" | "neutral";
  size?: "large" | "medium";
  fill?: "solid" | "outline";
  type?: "text" | "button";
  disabled?: boolean;
  onClick?: () => void;
};

export const KvChip = ({
  label,
  mode = "neutral",
  size = "medium",
  fill = "outline",
  type = "text",
  disabled = false,
  onClick,
}: TKvChip) => {
  const classes = [
    styles["kv-chip"],
    styles[`kv-chip--mode-${mode}`],
    styles[`kv-chip--size-${size}`],
    styles[`kv-chip--fill-${fill}`],
  ].join(" ");

  const renderContent = () => {
    const getSealMode = () => {
      switch (mode) {
        case "add":
          return "add";
        case "success":
          return "success";
        case "error":
          return "error";
        case "alert":
          return "alert";
        case "neutral":
          return "neutral";
      }
    };

    return (
      <>
        <KvSeal mode={getSealMode()} size="small" inverted={fill === "solid"} />
        <span>{label}</span>
      </>
    );
  };

  if (type === "button") {
    return (
      <button
        type={type}
        className={classes}
        onClick={() => onClick?.()}
        disabled={disabled}
      >
        {renderContent()}
      </button>
    );
  }

  return <div className={classes}>{renderContent()}</div>;
};
