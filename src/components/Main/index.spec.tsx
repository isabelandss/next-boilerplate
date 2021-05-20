import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  test('should match snapshot', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i }),
    ).toBeInTheDocument()
  })
})
