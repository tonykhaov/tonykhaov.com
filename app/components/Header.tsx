import { Link } from 'remix'

function Header() {
  return (
    <header>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex' }}>
          <Link to="/" title="Photo of Tony Khaov">
            <div
              style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '100%',
                backgroundColor: 'green',
              }}
            />
          </Link>
          <div>
            <h1>
              <Link to="/" title="Tony Khaov">
                Tony Khaov
              </Link>
            </h1>
            <p>Front End Developer</p>
          </div>
        </div>
        <nav aria-label="Main navigation">
          <ul style={{ display: 'flex' }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cours">Cours</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header
