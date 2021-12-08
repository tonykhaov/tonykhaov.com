import { useLoaderData } from 'remix'
import type { MetaFunction, LoaderFunction, HeadersFunction } from 'remix'
import type { Post } from '~/post'
import { TextLink } from '~/components/ui'

export default function Index() {
  const posts = useLoaderData<Post[]>()

  return (
    <div>
      <h1>Recent blog posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <TextLink to={`posts/${post.slug}`}>Read more →</TextLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const loader: LoaderFunction = () => {
  return [
    {
      title: 'My Very First Post',
      description: 'This is my very first post. I dunno what to say.',
      slug: 'my-first-post',
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
