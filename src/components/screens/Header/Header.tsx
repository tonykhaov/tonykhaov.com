import { useTheme } from 'next-themes'
import Link from 'next/link'
import { FiSun } from 'react-icons/fi'
import { FaMoon } from 'react-icons/fa'
import LinkAria from 'src/components/atoms/LinkAria'

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const oppositeTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <header className="sticky inset-0 h-20 bg-white dark:bg-black">
      <div className="container flex items-center justify-between h-full px-2 mx-auto">
        <div className="flex items-center">
          {/* @TODO replace span by real image */}
          <Link href="/">
            <LinkAria
              Component="span"
              className="flex items-center w-12 h-12 mr-2 rounded-full bg-gradient-to-r from-green-400 to-lime-600 focus:outline-none focus:ring focus:ring-blue-400"
              aria-label="profile picture"
            />
          </Link>
          <div>
            <Link href="/">
              <LinkAria
                Component="h1"
                className="text-2xl font-semibold rounded hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none focus:ring focus:ring-blue-400 w-max"
              >
                Tony Khaov
              </LinkAria>
            </Link>
            <p className="text-gray-600 text-md w-max dark:text-gray-100">Front End Developer</p>
          </div>
        </div>
        <nav>
          <ul className="flex items-center text-md">
            <li className="mr-1">
              <Link href="/">
                <LinkAria className="block p-1 rounded hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none focus:ring focus:ring-blue-400">
                  Blog
                </LinkAria>
              </Link>
            </li>
            <li className="mx-1">
              <Link href="/">
                <LinkAria className="block p-1 rounded hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none focus:ring focus:ring-blue-400">
                  About
                </LinkAria>
              </Link>
            </li>
            <li className="ml-1 border border-black rounded dark:border-white">
              <LinkAria
                Component="button"
                className="block p-2 rounded hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none focus:ring focus:ring-blue-400"
                aria-label={`toggle theme to ${oppositeTheme}`}
                onClick={() => setTheme(oppositeTheme)}
              >
                {theme === 'dark' ? (
                  <FaMoon aria-label="dark mode" />
                ) : (
                  <FiSun aria-label="light mode" />
                )}
              </LinkAria>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
