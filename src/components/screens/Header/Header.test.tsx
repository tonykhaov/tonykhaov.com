import { render, screen } from 'src/test/app-test-utils'
import Header from 'src/components/screens/Header'
import userEvent from '@testing-library/user-event'

describe('Header', () => {
  it('should render Header with tony khaov title and nav links', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: /profile picture/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /tony khaov/i })).toBeInTheDocument()
    expect(screen.getByText(/developer/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/toggle theme/i)).toBeInTheDocument()
  })

  it('should be able to toggle dark/light mode', () => {
    render(<Header />)

    const toggleThemeBtn = screen.getByLabelText(/toggle theme/i)
    const htmlTag = document.firstElementChild

    expect(htmlTag).toHaveClass('light')
    userEvent.click(toggleThemeBtn)
    expect(htmlTag).toHaveClass('dark')
    userEvent.click(toggleThemeBtn)
    expect(htmlTag).toHaveClass('light')
  })
})
