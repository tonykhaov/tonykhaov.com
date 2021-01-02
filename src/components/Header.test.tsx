import { render, screen } from 'src/test/app-test-utils'
import Header from 'src/components/Header'

test('renders tony khaov title and nav links', () => {
  render(<Header />)

  expect(screen.getByRole('heading', { name: /tony khaov/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
})
