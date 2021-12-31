import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="flex justify-center gap-x-4">
      <a
        title="Instagram"
        href="https://github.com/tonykhaov"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={18} />
      </a>
      <a
        title="Twitter"
        href="https://twitter.com/tonykhaov"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size={18} />
      </a>
      <a
        title="Linkedin"
        href="https://www.linkedin.com/in/tonykhaov"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={18} />
      </a>
    </footer>
  )
}

export default Footer
