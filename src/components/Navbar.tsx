import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 bg-transparent backdrop-blur-sm px-8 py-4 flex justify-between items-center">
      <div className="text-white font-bold">Bevis Dev</div>
      <div className="space-x-6 text-gray-300">
        <Link href="#about">About</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
}
