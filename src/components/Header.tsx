import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-8 bg-gradient-to-r from-[#121f28] via-zinc-950 to-[#472f33]">
      <h1 className="text-xl font-bold text-white">BevisDev</h1>
      <nav className="space-x-6">
        <Link href="#about" className="text-gray-300 hover:text-white">
          About
        </Link>
        <Link href="#projects" className="text-gray-300 hover:text-white">
          Projects
        </Link>
        <Link href="#contact" className="text-gray-300 hover:text-white">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
