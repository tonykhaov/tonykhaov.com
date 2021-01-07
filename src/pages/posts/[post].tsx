import Header from 'src/components/screens/Header'
import { useRouter } from 'next/dist/client/router'

export default function Post(): JSX.Element {
  const { query } = useRouter()
  return (
    <>
      <Header />
      <main className="flex items-center justify-center h-96">
        <h1 className="text-2xl">
          Post #<span className="text-gray-400">{query.post}</span>
        </h1>
      </main>
    </>
  )
}
