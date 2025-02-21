import type { Meta, StoryObj } from "@storybook/react";
import { KvMultiSelect } from ".";
import { KvFieldset } from "../KvFieldset";
import { KvLabel } from "../KvLabel";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Kivid/KvMultiSelect",
  component: KvMultiSelect,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    placeholder: {
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    overlay: {
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    closeOnOutsideClick: {
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    className: {
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    value: {
      control: {
        type: "text",
      },
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof KvMultiSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { label: "Audi", value: "audi" },
      { label: "BMW", value: "bmw" },
      { label: "Honda", value: "honda" },
      { label: "BYD", value: "byd" },
      { label: "Fiat", value: "fiat" },
      { label: "Ford", value: "ford" },
    ],
    value: ["bmw"],
  },
  render: (args) => {
    return (
      <KvFieldset>
        <KvLabel>Marcas de carro:</KvLabel>
        <KvMultiSelect {...args} />
      </KvFieldset>
    );
  },
};
