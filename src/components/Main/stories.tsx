import { text, withKnobs } from '@storybook/addon-knobs'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
}

export const Basic = () => (
  <Main
    title={text('title', 'React Avançado')}
    description={text(
      'description',
      'TypeScript, React, Next e Styles Components',
    )}
  />
)
