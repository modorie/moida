import { Meta, Story } from '@storybook/react'
import styled from 'styled-components'

import Avatar from './Avatar'
import AvatarProps, { EmojiList } from './Avatar.types'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
} as Meta

export const Default: Story<AvatarProps> = (args) => <Avatar {...args} />

Default.args = {
  emoji: '🐥',
  isHost: false,
}

export const Examples = () =>
  Object.values(EmojiList).map((list, idx) => (
    <Layout key={idx}>
      {list.map((emoji) => (
        <Avatar emoji={emoji} key={emoji} />
      ))}
    </Layout>
  ))

const Layout = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 4px;
`
