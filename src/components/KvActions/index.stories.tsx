import type { Meta, StoryObj } from "@storybook/react";
import { KvActions } from ".";
import { KvAction } from "../KvAction";
import { KvIcon } from "../KvIcon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Kivid/KvActions",
  component: KvActions,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    // onClick: fn()
  },
} satisfies Meta<typeof KvActions>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  render: () => (
    <KvActions>
      {[...new Array(10)].map((item: number) => (
        <KvAction key={item}>
          <KvIcon color="tertiary" icon="building" />
          <div>
            Tabela de
            <br />
            serviços
          </div>
        </KvAction>
      ))}
    </KvActions>
  ),
};
