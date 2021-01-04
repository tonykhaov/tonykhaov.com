import Link from 'next/link'
import Header from 'src/components/Header'
import { Post } from 'src/models/post'
import { buildPost } from 'src/test/generate'

interface Props {
  posts: Post[]
}

export default function Home({ posts }: Props): JSX.Element {
  return (
    <>
      <Header />
      <main className="bg-cyan-50">
        <div className="container h-full p-4 mx-auto">
          <h1 className="text-2xl font-semibold">Recent blog posts</h1>
          <ul className="my-6">
            {posts.map((post) => (
              <li key={post.title} className="mb-6">
                <Link href="/">
                  <h2 className="text-xl cursor-pointer hover:text-blue-700">
                    <a>{post.title}</a>
                  </h2>
                </Link>
                <p className="mt-2 mb-1 text-lg italic text-gray-500 truncate">{post.content}</p>
                <Link href="/">
                  <a className="text-lg text-blue-800 hover:text-blue-700">Read more &#8594;</a>
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
  const posts: Post[] = [
    buildPost(),
    buildPost(),
    buildPost(),
    buildPost(),
    buildPost(),
    buildPost(),
    buildPost(),
    buildPost(),
    buildPost(),
    buildPost(),
  ]

  return {
    props: {
      posts,
    },
  }
}
