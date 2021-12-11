import { FaGithub, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="flex justify-center">
      <a
        title="Instagram"
        href="https://github.com/tonykhaov"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        title="Twitter"
        href="https://twitter.com/tonykhaov"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
    </footer>
  )
}

export default Footer
