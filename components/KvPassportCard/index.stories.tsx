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
    type: "individual",
    passportDueDate: new Date(),
    userName: "Gabriela Monteiro",
    avatar: <KvAvatar src={avatarFemale} size="xsmall" />,
  },
};

export const Family: Story = {
  args: {
    type: "family",
    passportDueDate: new Date(),
    userName: "Gabriela Monteiro",
    avatar: <KvAvatar src={avatarFemale} size="xsmall" />,
  },
};

export const Company: Story = {
  args: {
    type: "company",
    companyName: "Grupo Limiar",
    passportDueDate: new Date(),
    userName: "Gabriela Monteiro",
    avatar: <KvAvatar src={avatarFemale} size="xsmall" />,
  },
};

export const IndividualDefaultAvatar: Story = {
  args: {
    passportDueDate: "2024-04-15T12:00:00",
    userName: "Gabriela Monteiro",
    avatar: <KvAvatar size="xsmall" />,
  },
};

export const FamilyDefaultAvatar: Story = {
  args: {
    type: "family",
    passportDueDate: "2024-04-15T12:00:00",
    userName: "Gabriela Monteiro",
    avatar: <KvAvatar size="xsmall" />,
  },
};

export const IndividualNoAvatar: Story = {
  args: {
    passportDueDate: "2024-04-15T12:00:00",
    userName: "Gabriela Monteiro",
  },
};

export const FamilyNoAvatar: Story = {
  args: {
    type: "family",
    passportDueDate: "2024-04-15T12:00:00",
    userName: "Gabriela Monteiro",
  },
};

export const CompanyNoAvatar: Story = {
  args: {
    type: "company",
    companyName: "Grupo Limiar",
    passportDueDate: "2024-04-15T12:00:00",
    userName: "Gabriela Monteiro",
  },
};
