import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { Smask } from ".";
import { KvFieldset } from "../KvFieldset";
import { KvInput } from "../KvInput";

const meta = {
  title: "Kivid/Smask",
  component: Smask,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    mask: ["(dd) dddd-dddd", "(dd) ddddd-dddd"],
  },
} satisfies Meta<typeof Smask>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => {
    return (
      <KvFieldset>
        <Smask {...args}>
          <KvInput placeholder="(00) 00000-0000" />
        </Smask>
      </KvFieldset>
    );
  },
};

export const Uncontrolled: Story = {
  args: {},
  render: (args) => {
    return (
      <KvFieldset>
        <Smask {...args}>
          <KvInput placeholder="(00) 00000-0000" />
        </Smask>
      </KvFieldset>
    );
  },
};

export const Controlled = {
  args: {
    value: "",
  },
  render: (args: { value: string; mask: [string, ...string[]] }) => {
    const [text, setText] = useState("");

    useEffect(() => {
      setText(args.value);
    }, [args.value]);

    return (
      <KvFieldset>
        <Smask mask={args.mask} value={text}>
          <KvInput placeholder="(00) 00000-0000" />
        </Smask>
      </KvFieldset>
    );
  },
};
