import { useLoaderData } from 'remix'
import type { MetaFunction, LoaderFunction, HeadersFunction } from 'remix'
import type { Post } from '~/post'
import { Container, List, TextLink, Title } from '~/components/ui'

export default function Index() {
  const posts = useLoaderData<Post[]>()

  return (
    <Container>
      <Title>Recent blog posts</Title>
      <List>
        {posts.map((post) => (
          <li key={post.slug}>
            <h2 className="text-xl">{post.title}</h2>
            <p>
              <i>{post.description}..</i>
            </p>
            <TextLink to={`posts/${post.slug}`}>Read more →</TextLink>
          </li>
        ))}
      </List>
    </Container>
  )
}

export const loader: LoaderFunction = () => {
  return [
    {
      title: 'But what is useCallback? And when should I use it?',
      description:
        "useCallback is a native hook in React used for memoizing functions. But you'll never use it unless you run into performance issues (usually when your function is inside a dependency array).",
      slug: 'use-callback',
    },
  ]
}

export const meta: MetaFunction = () => {
  return {
    title: 'Homepage',
    description: 'Welcome to my homepage!',
  }
}

export const headers: HeadersFunction = () => {
  return {
    'Cache-Control': 'max-age=300, s-maxage=3600',
  }
}
