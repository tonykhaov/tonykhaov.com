import { Link } from 'remix'
import { List } from '~/components/ui'
import me from '~/image/me.jpg'

function Header() {
  return (
    <header className="px-2 pt-3 pb-2 mx-auto border-b max-w-7xl xl:px-0">
      <div className="flex justify-between">
        <div className="flex items-center gap-x-2 flex-nowrap">
          <Link to="/" title="Photo of Tony Khaov">
            <img className="w-12 h-12 rounded-full" src={me} />
          </Link>
          <div>
            <h1>Tony Khaov</h1>
            <p className="text-sm text-gray-600">Web Developer</p>
          </div>
        </div>
        <nav aria-label="Main navigation">
          <List className="flex items-center gap-2 h-full !list-none">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cours">Cours</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </List>
        </nav>
      </div>
    </header>
  )
}
export default Header
