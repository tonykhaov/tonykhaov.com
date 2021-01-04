import Home from 'src/pages'
import { render, screen } from 'src/test/app-test-utils'
import { buildPost } from 'src/test/generate'

test('renders index page with posts', () => {
  const posts = [buildPost(), buildPost()]

  render(<Home posts={posts} />)

  expect(screen.getByRole('heading', { level: 2, name: posts[0].title })).toBeInTheDocument()
  expect(screen.getByText(posts[0].content)).toBeInTheDocument()

  expect(screen.getByRole('heading', { level: 2, name: posts[1].title })).toBeInTheDocument()
  expect(screen.getByText(posts[1].content)).toBeInTheDocument()
})
