import React, {
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";

import * as Tooltip from "@radix-ui/react-tooltip";
import { TooltipContentProps } from "@radix-ui/react-tooltip";
import { KvSeal } from "../KvSeal";
import styles from "./styles.module.scss";

export type TKvTooltip = {
  content: string | React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: () => void;
  status?: "idle" | "invalid";
  hasPortal?: boolean;
  maxWidthAsChild?: boolean;
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
  maxWidthAsChild = false,
  ...props
}: TKvTooltip) {
  const triggerRef = useRef<HTMLElement | null>(null);
  const [triggerWidth, setTriggerWidth] = useState<number | null>(null);

  const setCombinedRefs = (node: HTMLElement | null) => {
    triggerRef.current = node;

    if (React.isValidElement(children) && "ref" in children) {
      const { ref } = children;

      if (typeof ref === "function") {
        ref(node);
      } else if (ref && typeof ref === "object" && "current" in ref) {
        (ref as React.MutableRefObject<HTMLElement | null>).current = node;
      }
    }
  };

  useEffect(() => {
    if (!maxWidthAsChild) {
      return;
    }

    if (triggerRef.current) {
      const updateWidth = () => {
        setTriggerWidth(triggerRef.current?.offsetWidth || null);
      };

      updateWidth();

      const resizeObserver = new ResizeObserver(updateWidth);
      resizeObserver.observe(triggerRef.current);

      return () => resizeObserver.disconnect();
    }
  }, [maxWidthAsChild]);

  const renderContent = () => {
    const contentTemplate = (
      <Tooltip.Content
        className={`${styles["kv-tooltip__content"]} ${
          status === "invalid" && styles["kv-tooltip__content--error"]
        }`}
        align={align}
        sideOffset={status === "invalid" ? -12 : 4}
        side={side}
        style={{
          maxWidth: maxWidthAsChild ? triggerWidth ?? "auto" : "auto",
        }}
        {...props}
      >
        {status === "invalid" && <KvSeal variant="error" size="small" />}
        {content}
        <Tooltip.Arrow
          className={`${styles["kv-tooltip__arrow"]} ${
            status === "invalid" && styles["kv-tooltip__arrow--error"]
          }`}
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
        <Tooltip.Trigger asChild>
          {React.isValidElement(children) &&
            React.cloneElement(
              children as ReactElement<
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                any,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                string | JSXElementConstructor<any>
              >,
              {
                ref: setCombinedRefs,
              },
            )}
        </Tooltip.Trigger>
        {renderContent()}
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
