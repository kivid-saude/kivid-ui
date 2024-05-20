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
  side = "top",
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
        <Tooltip.Portal>
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
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
