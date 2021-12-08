import { Link } from 'remix'

function CoursIndex() {
  return (
    <>
      <h1 className="text-xl">Cours</h1>
      <ul className="ml-2">
        <h2 className="text-lg underline">Maths</h2>
        <li className="ml-2">
          <Link to="signes" className="text-blue-700 hover:text-blue-500">
            Les signes (négatifs)
          </Link>
        </li>
      </ul>
    </>
  )
}

export default CoursIndex
