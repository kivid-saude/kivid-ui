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
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {},
} satisfies Meta<typeof Smask>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Uncontrolled: Story = {
  storyName: "Default (Uncontrolled)",
  args: {
    mask: ["(dd) dddd-dddd", "(dd) ddddd-dddd"],
  },
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
    mask: ["(dd) dddd-dddd", "(dd) ddddd-dddd"],
  },
  render: (args: { value: string; mask: [string, ...string[]] }) => {
    const [text, setText] = useState("");

    useEffect(() => {
      setText(args.value);
    }, [args.value]);

    return (
      <>
        <KvFieldset>
          <Smask {...args} value={text}>
            <KvInput
              placeholder="(00) 00000-0000"
              onChange={(event: unknown) => {
                console.log("onChange", event);
              }}
            />
          </Smask>
        </KvFieldset>
        <br />
        <br />
        <button onClick={() => setText("")}>Clear input</button>
      </>
    );
  },
};

export const Currency: Story = {
  args: {
    mask: "currency",
  },
  render: (args) => {
    return (
      <KvFieldset>
        <Smask {...args}>
          <KvInput placeholder="Digite um valor" />
        </Smask>
      </KvFieldset>
    );
  },
};

export const Number: Story = {
  args: {
    mask: "number",
  },
  render: (args) => {
    return (
      <KvFieldset>
        <Smask {...args}>
          <KvInput placeholder="Digite um número" />
        </Smask>
      </KvFieldset>
    );
  },
};