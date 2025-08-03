import Image from "next/image";
import Link from "next/link";
import Skills from "./Skills";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-gradient-to-r from-[#121f28] via-zinc-950 to-[#472f33]">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">
          Hello{" "}
          <span className="bg-orange-500 inline-block w-2 h-2 rounded-full"></span>
          <br />
        </h2>
        <div className="flex items-center mb-4">
          <span className="block bg-orange-500 w-10 h-0.5 mr-2"></span>
          <p className="text-2xl text-white font-light mb-4">
            I&apos;m Trương Thanh Bình
          </p>
        </div>
        <p className="text-4xl font-bold text-white mb-6">Software Developer</p>
        <div className="space-x-4">
          <Link
            href="#contact"
            className="px-4 py-2 bg-orange-500 text-white rounded"
          >
            Got a project?
          </Link>
          <Link
            href="#"
            className="px-4 py-2 border border-orange-400 text-gray-300 rounded"
          >
            My Resume
          </Link>
        </div>
      </div>
      <Image
        src="/images/avatar.jpg"
        alt="Avatar"
        width={192}
        height={192}
        className="w-48 h-48 rounded-full mt-8 md:mt-0"
      />
    </section>
  );
}
