import { Meta, Story } from '@storybook/react/types-6-0'
import { text, withKnobs } from '@storybook/addon-knobs'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
} as Meta

export const Basic: Story = () => (
  <Main
    title={text('title', 'React Avançado')}
    description={text(
      'description',
      'TypeScript, React, Next e Styles Components',
    )}
  />
)
