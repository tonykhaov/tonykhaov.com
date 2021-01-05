import Link from 'next/link'
import { FiSun } from 'react-icons/fi'
// import { FaMoon } from 'react-icons/fa'
import CustomLink from 'src/components/atoms/CustomLink'

const Header: React.FC = () => {
  return (
    <header className="sticky inset-0 h-16 bg-gray-300">
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
          <ul className="flex items-center">
            <li className="mx-1">
              <Link href="/">
                <CustomLink className="block p-2">Blog</CustomLink>
              </Link>
            </li>
            <li className="mx-1">
              <Link href="/">
                <CustomLink className="block p-2">About</CustomLink>
              </Link>
            </li>
            <li className="mx-1 border border-black rounded">
              <CustomLink className="block p-3" aria-label="toggle">
                <FiSun aria-label="light-mode on" />
                {/* <FaMoon aria-label="dark-mode on" /> */}
              </CustomLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
