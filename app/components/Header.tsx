import { Link } from 'remix'
import { List } from './ui'

function Header() {
  return (
    <header className="px-3 py-4">
      <div className="flex justify-between">
        <div className="flex gap-x-2">
          <Link to="/" title="Photo of Tony Khaov">
            <div className="w-12 h-12 bg-green-900 rounded-full" />
          </Link>
          <div>
            <h1>Tony Khaov</h1>
            <p>Front End Developer</p>
          </div>
        </div>
        <nav aria-label="Main navigation">
          <List className="flex items-center h-full !list-none">
            <li>
              <Link className="px-2 py-4" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="px-2 py-4" to="/cours">
                Cours
              </Link>
            </li>
            <li>
              <Link className="px-2 py-4" to="/about">
                About
              </Link>
            </li>
          </List>
        </nav>
      </div>
    </header>
  )
}
export default Header
