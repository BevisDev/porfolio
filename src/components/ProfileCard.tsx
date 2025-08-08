"use client";

import { AppConfig } from "@/config/AppConfig";
import Image from "next/image";
import Link from "next/link";
import { FiCopy } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const ProfileCard = () => {
  // handle copy
  const handleCopy = () => {
    navigator.clipboard.writeText(AppConfig.email);
    alert("Email copied to clipboard!");
  };

  // socials
  const socials = [
    {
      href: AppConfig.githubLink,
      icon: <FaGithub />,
    },
    {
      href: AppConfig.linkedinLink,
      icon: <FaLinkedinIn />,
    },
  ];

  return (
    <section className="pt-16 px-3 flex items-center flex-col text-white">
      {/* Content */}
      <div className="flex items-center flex-col border border-solid border-[#4a4e66] rounded-2xl p-8 gap-8">
        {/* Avatar */}
        <Image
          src="/images/avatar.jpg"
          alt="Avatar"
          width={192}
          height={192}
          className="w-48 h-48 rounded-full mt-8 md:mt-0"
          priority={false}
        />
        <h1 className="text-5xl sm:text-4xl font-bold text-center">
          Trương Thanh Bình
        </h1>
        {/* Title */}
        <h2 className="text-xl sm:text-2xl text-center tracking-wide text-gray-400">
          Software Developer
        </h2>

        {/* Description */}
        <div className="space-x-4">
          <Link
            href="#contact"
            className="px-5 py-2 rounded text-white font-medium hover:bg-orange-600 transition"
          >
            Got a project?
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center font-medium"
          >
            Download CV
          </Link>
        </div>
      </div>

      {/* Contacts */}
      <div className="flex items-center flex-col py-14 px-6 gap-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight ">
          Contact me
        </h2>

        {/* Email */}
        <div className="flex justify-center items-center border border-solid border-[#4a4e66] rounded-lg gap-5 py-2 px-6">
          <span className="text-md">{AppConfig.email}</span>
          <button
            onClick={handleCopy}
            title="Copy email"
            className="ml-2 hover:scale-120 active:scale-95 transform transition duration-200"
          >
            <FiCopy size={16} />
          </button>
        </div>

        {/* Social */}
        <div className="flex gap-4 pt-2 text-gray-300 text-2xl">
          {socials.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full text-white border border-white bg-black flex items-center justify-center hover:scale-120 transform transition duration-200"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;

// const Hero1 = () => {
//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-gradient-to-r from-[#121f28] via-zinc-950 to-[#472f33]">
//       <div className="md:w-1/2 space-y-6">
//         <h2 className="text-4xl font-bold text-white mb-4">
//           Hello{" "}
//           <span className="inline-block w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
//           <br />
//         </h2>

//         <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mb-4">
//           <span className="hidden md:block bg-orange-500 w-10 h-0.5 mr-2"></span>
//           <p className="text-2xl text-gray-300 tracking-wide font-light md:mb-4">
//             I&apos;m Trương Thanh Bình
//           </p>
//           <span className="block md:hidden bg-orange-500 w-full h-0.5 mb-4" />
//         </div>
//         <p className="text-4xl font-bold text-white mb-6">Software Developer</p>
//         <div className="space-x-4">
//           <Link
//             href="#contact"
//             className="px-5 py-2 rounded bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
//           >
//             Got a project?
//           </Link>
//           <Link
//             href="/resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-5 py-2 rounded border border-orange-500 font-medium"
//           >
//             My Resume
//           </Link>
//         </div>
//       </div>

//       {/* Avatar */}
//       <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
//         <Image
//           src="/images/avatar.jpg"
//           alt="Avatar"
//           width={192}
//           height={192}
//           className="w-48 h-48 rounded-full mt-8 md:mt-0"
//           priority={false}
//         />
//       </div>
//     </section>
//   );
// };
