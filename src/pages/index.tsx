import Link from 'next/link'
import LinkAria from 'src/components/atoms/LinkAria'
import Header from 'src/components/screens/Header'
import { Post } from 'src/models/post'
import { buildPost } from 'src/test/generate'

interface Props {
  posts: Post[]
}

export default function Home({ posts }: Props): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <div className="container h-full px-4 py-6 mx-auto">
          <h1 className="text-2xl font-semibold">Recent blog posts</h1>
          <ul className="my-5">
            {posts.map((post) => (
              <li key={post.title} className="mb-5">
                <Link href={`posts/${post.id}`}>
                  <LinkAria
                    Component="h2"
                    className="inline-block text-xl rounded hover:text-blue-700 dark:hover:text-blue-200 focus:outline-none focus:ring focus:ring-blue-400"
                    aria-label={post.title}
                  >
                    {post.title}
                  </LinkAria>
                </Link>
                <p className="mt-2 mb-1 text-lg italic text-gray-500 dark:text-gray-400 line-clamp-2">
                  {post.content}
                </p>
                <Link href={`posts/${post.id}`}>
                  <LinkAria
                    aria-label={`Read more ${post.title}`}
                    className="text-lg text-blue-800 rounded dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200 focus:outline-none focus:ring focus:ring-blue-400"
                  >
                    Read more →
                  </LinkAria>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const posts: Post[] = [buildPost(), buildPost(), buildPost(), buildPost(), buildPost()]

  return {
    props: {
      posts,
    },
  }
}
