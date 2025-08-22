"use client";

import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0d041a]/80 backdrop-blur-md z-50 px-8 py-4 flex justify-between items-center">
      <div className="text-white font-bold text-xl">BevisDev</div>
      <ul className="flex gap-8 text-gray-300">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">About</li>
        <li className="hover:text-white cursor-pointer">Lab</li>
        <li className="cursor-pointer">
          <Link
            href="/cv.pdf"
            download
            className="px-6 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
          >
            Download CV
          </Link>
        </li>
      </ul>
    </nav>
  );
}
