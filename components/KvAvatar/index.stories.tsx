import type { Meta, StoryObj } from "@storybook/react";

import { KvAvatar } from ".";
import avatarFemale from "../KvPassportCard/assets/avatar-female.png";

const meta = {
  title: "Kivid/KvAvatar",
  component: KvAvatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof KvAvatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "medium",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xlarge",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const ExtraSmall: Story = {
  args: {
    size: "xsmall",
  },
};

export const ProfileImage: Story = {
  args: {
    size: "large",
    src: avatarFemale,
  },
};

export const ProfileImageExtraLarge: Story = {
  args: {
    size: "xlarge",
    src: avatarFemale,
  },
};

export const ProfileImageLarge: Story = {
  args: {
    size: "large",
    src: avatarFemale,
  },
};

export const ProfileImageMedium: Story = {
  args: {
    size: "medium",
    src: avatarFemale,
  },
};

export const ProfileImageSmall: Story = {
  args: {
    size: "small",
    src: avatarFemale,
  },
};

export const ProfileImageXSmall: Story = {
  args: {
    size: "xsmall",
    src: avatarFemale,
  },
};
