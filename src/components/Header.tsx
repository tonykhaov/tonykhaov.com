import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="h-16 bg-gray-300">
      <div className="container flex items-center justify-between h-full mx-auto">
        <div className="flex items-center">
          {/* @TODO replace span by real image */}
          <Link href="/">
            <a className="flex items-center mx-2">
              <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-lime-600" />
            </a>
          </Link>
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">
              <Link href="/">
                <a>Tony Khaov</a>
              </Link>
            </h1>
            <h2 className="w-max">Front-End Developer</h2>
          </div>
        </div>
        <nav>
          <ul className="flex">
            <li className="px-2">
              <Link href="/">
                <a>Blog</a>
              </Link>
            </li>
            <li className="px-2">
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
