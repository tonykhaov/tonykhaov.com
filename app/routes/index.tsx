import { useLoaderData } from 'remix'
import type { MetaFunction, LoaderFunction, HeadersFunction } from 'remix'
import type { Post } from '~/post'
import { List, TextLink, Title } from '~/components/ui'

export default function Index() {
  // const posts = useLoaderData<Post[]>()

  return (
    <>
      <div>
        <Title className="!text-xl">Recent blog posts</Title>
        <List className="!list-none">
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
      </div>
      <div className="mt-8">
        <Title className="!text-xl !mb-0">
          I also write lessons for middle school students. (they are written in
          French)
        </Title>
        <TextLink to="/cours">Browse lessons →</TextLink>
      </div>
    </>
  )
}

const posts = [
  {
    title: 'But what is useCallback? And when should I use it?',
    description:
      "useCallback is a native hook in React used for memoizing functions. But you'll never use it unless you run into performance issues (usually when your function is inside a dependency array).",
    slug: 'use-callback',
  },
]

// export const loader: LoaderFunction = () => {
//   return posts
// }

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
