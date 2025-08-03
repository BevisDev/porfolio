import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 flex flex-col items-center justify-center text-gray-500 text-sm">
      <div className="flex space-x-4 mb-4">
        <Link
          href="https://github.com/BevisDev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub size={20} />
        </Link>
        <Link
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
        </Link>
        <Link
          href="https://twitter.com/your-twitter"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter size={20} />
        </Link>
      </div>
      <p>© {new Date().getFullYear()} Bevis Dev. All rights reserved.</p>
    </footer>
  );
}
