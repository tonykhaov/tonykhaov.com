import s from './Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={s.test}>
      <h1>Hello World</h1>
      <nav>
        <ul>
          <li>test</li>
          <li className={s.jean}>test</li>
          <li>test3</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
