import Home from 'src/pages'
import { render, screen } from 'src/test/app-test-utils'

test('renders index page with posts', () => {
  const posts = [
    { title: 'FAKE_TITLE_1', content: 'FAKE_CONTENT_1' },
    { title: 'FAKE_TITLE_2', content: 'FAKE_CONTENT_2' },
  ]

  render(<Home posts={posts} />)
  expect(screen.getByRole('heading', { level: 2, name: posts[0].title })).toBeInTheDocument()
  expect(screen.getByText(posts[0].content)).toBeInTheDocument()
  expect(screen.getByRole('heading', { level: 2, name: posts[1].title })).toBeInTheDocument()
  expect(screen.getByText(posts[1].content)).toBeInTheDocument()
})
