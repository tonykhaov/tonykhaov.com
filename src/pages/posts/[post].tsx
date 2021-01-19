import Header from 'src/components/screens/Header'
import { buildPost } from 'src/test/generate'

export default function Post(): JSX.Element {
  const post = buildPost()

  return (
    <>
      <Header />
      <main>
        <div className="container h-full p-4 mx-auto">
          <h1 className="mb-2 text-2xl font-semibold text-center">{post.title}</h1>
          <div className="mb-4 flex justify-center h-96">
            <img
              src="https://images.unsplash.com/photo-1610788696751-07e118e9fe01?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              alt={post.title}
            />
          </div>
          <p className="text-lg leading-8">{post.content}</p>
        </div>
      </main>
    </>
  )
}
