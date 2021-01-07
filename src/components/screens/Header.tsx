import Link from 'next/link'
import { FiSun } from 'react-icons/fi'
// import { FaMoon } from 'react-icons/fa'
import LinkAria from 'src/components/atoms/LinkAria'

const Header: React.FC = () => {
  return (
    <header className="sticky inset-0 h-16 bg-gray-300">
      <div className="container flex items-center justify-between h-full mx-auto">
        <div className="flex items-center">
          {/* @TODO replace span by real image */}
          <Link href="/">
            <LinkAria
              Component="span"
              className="flex items-center w-8 h-8 mr-2 rounded-full bg-gradient-to-r from-green-400 to-lime-600 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </Link>
          <Link href="/">
            <LinkAria
              Component="h1"
              className="text-2xl font-bold rounded focus:outline-none focus:ring focus:ring-blue-400 w-max"
            >
              Tony Khaov
            </LinkAria>
          </Link>
        </div>
        <nav>
          <ul className="flex items-center">
            <li className="mx-1">
              <Link href="/">
                <LinkAria className="block p-2 rounded focus:outline-none focus:ring focus:ring-blue-400">
                  Blog
                </LinkAria>
              </Link>
            </li>
            <li className="mx-1">
              <Link href="/">
                <LinkAria className="block p-2 rounded focus:outline-none focus:ring focus:ring-blue-400">
                  About
                </LinkAria>
              </Link>
            </li>
            <li className="mx-1 border border-black rounded">
              <LinkAria
                className="block p-3 rounded focus:outline-none focus:ring focus:ring-blue-400"
                aria-label="toggle mode"
              >
                <FiSun aria-label="light-mode on" />
                {/* <FaMoon aria-label="dark-mode on" /> */}
              </LinkAria>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
