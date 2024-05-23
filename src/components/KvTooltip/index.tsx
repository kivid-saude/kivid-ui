import * as Tooltip from "@radix-ui/react-tooltip";
import { TooltipContentProps } from "@radix-ui/react-tooltip";
import { KvSeal } from "../KvSeal";
import styles from "./styles.module.scss";

type TKvTooltip = {
  content: string | React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: () => void;
  status?: "idle" | "invalid";
  hasPortal?: boolean;
} & TooltipContentProps &
  React.PropsWithChildren;

export function KvTooltip({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  align = "center",
  side = "top",
  status = "idle",
  hasPortal = true,
  ...props
}: TKvTooltip) {
  const renderContent = () => {
    const contentTemplate = (
      <Tooltip.Content
        className={`${styles["kv-tooltip__content"]} ${status === "invalid" && styles["kv-tooltip__content--error"]}`}
        align={align}
        sideOffset={status === "invalid" ? -12 : 4}
        side={side}
        {...props}
      >
        {status === "invalid" && <KvSeal variant="error" size="small" />}
        {content}
        <Tooltip.Arrow
          className={`${styles["kv-tooltip__arrow"]} ${status === "invalid" && styles["kv-tooltip__arrow--error"]}`}
          height={8}
          width={16}
        />
      </Tooltip.Content>
    );

    if (hasPortal) {
      return <Tooltip.Portal>{contentTemplate}</Tooltip.Portal>;
    } else {
      return contentTemplate;
    }
  };

  return (
    <Tooltip.Provider>
      <Tooltip.Root
        delayDuration={0}
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
      >
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        {renderContent()}
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
