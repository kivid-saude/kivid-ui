import type { Meta, StoryObj } from '@storybook/react'
import { KvPassportCard } from '.'

const meta = {
  title: 'Kivid/KvPassportCard',
  component: KvPassportCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof KvPassportCard>

export default meta

type Story = StoryObj<typeof meta>

export const Individual: Story = {
  args: {
    variant: 'individual',
    passportDueDate: new Date(),
    user: {
      name: 'Manuela Azevedo',
      photo: '/src/components/KvPassportCard/assets/avatar-female.png',
    },
  },
}

export const Family: Story = {
  args: {
    variant: 'family',
    passportDueDate: new Date(),
    user: {
      name: 'Nome cliente',
      photo: '/src/components/KvPassportCard/assets/avatar-female.png',
    },
  },
}

export const IndividualNoAvatar: Story = {
  args: {
    passportDueDate: new Date(),
    user: {
      name: 'Nome cliente',
    },
  },
}

export const FamilyNoAvatar: Story = {
  args: {
    variant: 'family',
    passportDueDate: new Date(),
    user: {
      name: 'Nome cliente',
    },
  },
}
