import type { Meta, StoryObj } from "@storybook/react";
import { KvPassportCard } from ".";
import { KvAvatar } from "../KvAvatar";
import avatarFemale from "./assets/avatar-female.png";

const meta = {
  title: "Kivid/KvPassportCard",
  component: KvPassportCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof KvPassportCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Individual: Story = {
  args: {
    variant: "individual",
    passportDueDate: new Date(),
    userName: "Gabriela Monteiro",
    profileImage: <KvAvatar src={avatarFemale} size="xsmall" />,
  },
};

export const Family: Story = {
  args: {
    variant: "family",
    passportDueDate: new Date(),
    userName: "Gabriela Monteiro",
    profileImage: <KvAvatar src={avatarFemale} size="xsmall" />,
  },
};

export const IndividualDefaultAvatar: Story = {
  args: {
    passportDueDate: new Date(),
    userName: "Gabriela Monteiro",
    profileImage: <KvAvatar size="xsmall" />,
  },
};

export const FamilyDefaultAvatar: Story = {
  args: {
    variant: "family",
    passportDueDate: "04.15.2024",
    userName: "Gabriela Monteiro",
    profileImage: <KvAvatar size="xsmall" />,
  },
};

export const IndividualNoAvatar: Story = {
  args: {
    passportDueDate: new Date(),
    userName: "Gabriela Monteiro",
  },
};

export const FamilyNoAvatar: Story = {
  args: {
    variant: "family",
    passportDueDate: new Date(),
    userName: "Gabriela Monteiro",
  },
};
