import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="h-16 bg-gray-300">
      <div className="container flex items-center justify-between h-full mx-auto">
        <div className="flex">
          {/* @TODO replace span by real image */}
          <span className="inline-block w-8 h-8 mx-2 bg-green-700 rounded-full" />
          <h1 className="text-2xl">Tony Khaov</h1>
        </div>
        <nav>
          <ul className="flex">
            <li className="px-8">
              <Link href="/">
                <a>Blog</a>
              </Link>
            </li>
            <li className="px-8">
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
