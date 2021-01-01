import { render, screen } from 'src/test/app-test-utils'
import Header from 'src/components/Header'

test('renders hello world title', () => {
  render(<Header />)
  expect(screen.getByRole('heading', { name: /hello world/i })).toBeInTheDocument()
})
