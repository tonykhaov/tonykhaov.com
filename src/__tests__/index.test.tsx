import Home from 'src/pages'
import { render, screen } from 'src/test/app-test-utils'
import { buildPost } from 'src/test/generate'

describe('Homepage', () => {
  it('should render Homepage with 2 posts', () => {
    const posts = [buildPost(), buildPost()]

    render(<Home posts={posts} />)

    expect(screen.getByRole('heading', { level: 2, name: posts[0].title })).toBeInTheDocument()
    expect(screen.getByText(posts[0].content)).toBeInTheDocument()
    expect(screen.getByLabelText(`Read more ${posts[0].title}`)).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 2, name: posts[1].title })).toBeInTheDocument()
    expect(screen.getByText(posts[1].content)).toBeInTheDocument()
    expect(screen.getByLabelText(`Read more ${posts[1].title}`)).toBeInTheDocument()
  })

  it('should render an accessible post', () => {
    const posts = [buildPost()]

    render(<Home posts={posts} />)

    // Post title is wrapped by a link tag
    expect(screen.getByRole('heading', { level: 2, name: posts[0].title }).parentElement).toEqual(
      screen.getByLabelText(posts[0].title)
    )

    // Post title link tag is a11y friendly for screen readers
    expect(screen.getByLabelText(posts[0].title)).toHaveAttribute('aria-label', posts[0].title)

    // Read more link is a11y friendly for screen readers
    expect(screen.getByLabelText(/read more/i)).toHaveAttribute(
      'aria-label',
      `Read more ${posts[0].title}`
    )
  })
})
