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
} & TooltipContentProps &
  React.PropsWithChildren;

export function KvTooltip({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  align = "center",
  status = "idle",
  ...props
}: TKvTooltip) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root
        delayDuration={0}
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
      >
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Content
          className={`${styles["kv-tooltip__content"]} ${status === "invalid" && styles["kv-tooltip__content--error"]}`}
          align={align}
          sideOffset={2}
          {...props}
        >
          {status === "invalid" && (
            <KvSeal icon={"close"} color="danger" size="small" />
          )}
          {content}
          <Tooltip.Arrow
            className={`${styles["kv-tooltip__arrow"]} ${status === "invalid" && styles["kv-tooltip__arrow--error"]}`}
            height={8}
            width={16}
          />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
