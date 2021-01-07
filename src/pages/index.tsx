import Link from 'next/link'
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
                  <a aria-label={post.title}>
                    <h2 className="text-xl hover:text-blue-700">{post.title}</h2>
                  </a>
                </Link>
                <p className="mt-2 mb-1 text-lg italic text-gray-500 line-clamp-2">
                  {post.content}
                </p>
                <Link href={`posts/${post.id}`}>
                  <a
                    aria-label={`Read more ${post.title}`}
                    className="text-lg text-blue-800 hover:text-blue-700"
                  >
                    Read more →
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps(): Promise<{ props: { posts: Post[] } }> {
  const posts: Post[] = [buildPost(), buildPost(), buildPost(), buildPost(), buildPost()]

  return {
    props: {
      posts,
    },
  }
}
