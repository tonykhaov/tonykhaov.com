import { render, screen } from 'src/test/app-test-utils'
import { Footer } from 'src/components/screens'

describe('Footer', () => {
  it('should render Footer with social network links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument()
  })
})
