import Link from 'next/link'
import Header from 'src/components/Header'

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
  return {
    props: {
      posts,
    },
  }
}

type Post = {
  title: string
  content: string
}

const posts: Post[] = [
  {
    title: 'Blog post #1',
    content: `Description for blog post #1 Lorem ipsum dolor sit, amet consectetur adipisicing
  elit. Repellendus atque consequatur, unde dolor dignissimos quas hic accusantium
  cupiditate maiores architecto? Delectus hic modi, voluptatum reiciendis omnis,
  accusantium fugiat voluptatibus excepturi provident nisi odit vitae repellendus
  laudantium voluptates beatae nostrum, quasi reprehenderit eligendi cum. Nostrum,
  adipisci? Quaerat debitis dolorum totam consequatur.`,
  },
  {
    title: 'Blog post #2',
    content: `Description for blog post #2 Lorem ipsum dolor sit, amet consectetur adipisicing
  elit. Repellendus atque consequatur, unde dolor dignissimos quas hic accusantium
  cupiditate maiores architecto? Delectus hic modi, voluptatum reiciendis omnis,
  accusantium fugiat voluptatibus excepturi provident nisi odit vitae repellendus
  laudantium voluptates beatae nostrum, quasi reprehenderit eligendi cum. Nostrum,
  adipisci? Quaerat debitis dolorum totam consequatur.`,
  },
  {
    title: 'Blog post #3',
    content: `Description for blog post #3 Lorem ipsum dolor sit, amet consectetur adipisicing
  elit. Repellendus atque consequatur, unde dolor dignissimos quas hic accusantium
  cupiditate maiores architecto? Delectus hic modi, voluptatum reiciendis omnis,
  accusantium fugiat voluptatibus excepturi provident nisi odit vitae repellendus
  laudantium voluptates beatae nostrum, quasi reprehenderit eligendi cum. Nostrum,
  adipisci? Quaerat debitis dolorum totam consequatur.`,
  },
  {
    title: 'Blog post #4',
    content: `Description for blog post #4 Lorem ipsum dolor sit, amet consectetur adipisicing
  elit. Repellendus atque consequatur, unde dolor dignissimos quas hic accusantium
  cupiditate maiores architecto? Delectus hic modi, voluptatum reiciendis omnis,
  accusantium fugiat voluptatibus excepturi provident nisi odit vitae repellendus
  laudantium voluptates beatae nostrum, quasi reprehenderit eligendi cum. Nostrum,
  adipisci? Quaerat debitis dolorum totam consequatur.`,
  },
  {
    title: 'Blog post #5',
    content: `Description for blog post #5 Lorem ipsum dolor sit, amet consectetur adipisicing
  elit. Repellendus atque consequatur, unde dolor dignissimos quas hic accusantium
  cupiditate maiores architecto? Delectus hic modi, voluptatum reiciendis omnis,
  accusantium fugiat voluptatibus excepturi provident nisi odit vitae repellendus
  laudantium voluptates beatae nostrum, quasi reprehenderit eligendi cum. Nostrum,
  adipisci? Quaerat debitis dolorum totam consequatur.`,
  },
  {
    title: 'Blog post #6',
    content: `Description for blog post #6 Lorem ipsum dolor sit, amet consectetur adipisicing
  elit. Repellendus atque consequatur, unde dolor dignissimos quas hic accusantium
  cupiditate maiores architecto? Delectus hic modi, voluptatum reiciendis omnis,
  accusantium fugiat voluptatibus excepturi provident nisi odit vitae repellendus
  laudantium voluptates beatae nostrum, quasi reprehenderit eligendi cum. Nostrum,
  adipisci? Quaerat debitis dolorum totam consequatur.`,
  },
  {
    title: 'Blog post #7',
    content: `Description for blog post #7 Lorem ipsum dolor sit, amet consectetur adipisicing
  elit. Repellendus atque consequatur, unde dolor dignissimos quas hic accusantium
  cupiditate maiores architecto? Delectus hic modi, voluptatum reiciendis omnis,
  accusantium fugiat voluptatibus excepturi provident nisi odit vitae repellendus
  laudantium voluptates beatae nostrum, quasi reprehenderit eligendi cum. Nostrum,
  adipisci? Quaerat debitis dolorum totam consequatur.`,
  },
  {
    title: 'Blog post #8',
    content: `Description for blog post #8 Lorem ipsum dolor sit, amet consectetur adipisicing
  elit. Repellendus atque consequatur, unde dolor dignissimos quas hic accusantium
  cupiditate maiores architecto? Delectus hic modi, voluptatum reiciendis omnis,
  accusantium fugiat voluptatibus excepturi provident nisi odit vitae repellendus
  laudantium voluptates beatae nostrum, quasi reprehenderit eligendi cum. Nostrum,
  adipisci? Quaerat debitis dolorum totam consequatur.`,
  },
]
