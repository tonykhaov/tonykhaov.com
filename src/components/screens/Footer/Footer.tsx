import { FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa'
import LinkAria from 'src/components/atoms/LinkAria'

const Footer: React.FC = () => (
  <footer className="flex justify-center pb-5">
    <LinkAria
      aria-label="instagram"
      href="/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mr-4 text-red-500 rounded focus:outline-none focus:ring focus:ring-blue-400"
    >
      <FaInstagram className="w-8 h-8" />
    </LinkAria>
    <LinkAria
      aria-label="twitter"
      href="/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mr-4 text-blue-500 rounded focus:outline-none focus:ring focus:ring-blue-400"
    >
      <FaTwitter className="w-8 h-8" />
    </LinkAria>
    <LinkAria
      aria-label="github"
      href="/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded focus:outline-none focus:ring focus:ring-blue-400"
    >
      <FaGithub className="w-8 h-8" />
    </LinkAria>
  </footer>
)

export default Footer
