import { render, screen, fireEvent } from 'src/test/app-test-utils'
import userEvent from '@testing-library/user-event'
import LinkAria from 'src/components/atoms/LinkAria'
import Link from 'next/link'
import { nextRouterConfig as mockNextRouterConfig } from 'src/test/mock-next-router-context'

describe('LinkAria test', () => {
  it('should render a default LinkAria', () => {
    const mockOnClick = jest.fn()
    const fakeDescription = 'FAKE_DESCRIPTION'

    render(<LinkAria onClick={mockOnClick}>{fakeDescription}</LinkAria>)

    const linkAria = screen.getByText(fakeDescription)

    expect(linkAria.tagName.toLowerCase()).toBe('a')
    expect(linkAria).toHaveAttribute('tabIndex', '0')
    expect(linkAria).toHaveAttribute('role', 'link')

    userEvent.click(linkAria)
    expect(mockOnClick).toHaveBeenCalledTimes(1)

    fireEvent.focus(linkAria)
    expect(linkAria).toHaveFocus()
    fireEvent.keyDown(linkAria, { key: 'Enter' })
    expect(mockOnClick).toHaveBeenCalledTimes(2)
  })

  it('should render a customizable LinkAria', () => {
    const mockOnClick = jest.fn()
    const fakeDescription = 'FAKE_DESCRIPTION'
    const fakeClassName = 'FAKE_CLASSNAME'
    const fakeComponentType = 'span'
    const fakeRole = 'alert'
    const fakeTabIndex = -1

    render(
      <LinkAria
        Component={fakeComponentType}
        onClick={mockOnClick}
        className={fakeClassName}
        role={fakeRole}
        tabIndex={fakeTabIndex}
      >
        {fakeDescription}
      </LinkAria>
    )

    const linkAria = screen.getByText(fakeDescription)

    expect(linkAria.tagName.toLowerCase()).toBe(fakeComponentType)
    expect(linkAria).toHaveAttribute('tabIndex', fakeTabIndex + '')
    expect(linkAria).toHaveAttribute('role', fakeRole)
    expect(linkAria.className).toMatchInlineSnapshot(`"FAKE_CLASSNAME cursor-pointer select-none"`)
  })

  it('should redirect when wrapped inside a Link from next/link', () => {
    const fakeDescription = 'FAKE_DESCRIPTION'

    render(
      <Link href="FAKE_HREF">
        <LinkAria>{fakeDescription}</LinkAria>
      </Link>
    )

    expect(mockNextRouterConfig.push).not.toHaveBeenCalled()
    userEvent.click(screen.getByText(fakeDescription))
    expect(mockNextRouterConfig.push).toHaveBeenCalledTimes(1)
  })
})
