import type { Meta } from "@storybook/react";
import { Smask } from ".";
import { KvFieldset } from "../KvFieldset";
// import { KvLabel } from "../KvLabel";
import { KvInput } from "../KvInput";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Kivid/Smask",
  component: Smask,
  subcomponents: {
    KvFieldset: KvFieldset as React.ComponentType<unknown>,
    KvInput: KvInput as React.ComponentType<unknown>,
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Smask>;

export default meta;

// type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  render: () => {
    return (
      <KvFieldset>
        <Smask mask={["(dd) ddddd-dddd"]}>
          <KvInput placeholder="(00) 00000-0000" />
        </Smask>
      </KvFieldset>
    );
  },
};

export const DynamicValue = {
  render: ({ value = "" }: { value: string }) => {
    return (
      <KvFieldset>
        <Smask mask={["(dd) ddddd-dddd"]} value={value}>
          <KvInput placeholder="(00) 00000-0000" readOnly />
        </Smask>
      </KvFieldset>
    );
  },
};
