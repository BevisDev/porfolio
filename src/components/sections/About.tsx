export default function About() {
  return (
    <section id="about" className="px-8 bg-[#black] text-gray-300">
      <h2 className="text-4xl text-center font-bold mb-8">About Me</h2>
      <div className="max-w-2xl leading-relaxed space-y-4">
        <p>
          Hello! I am Bevis Dev, a software engineer who enjoys building things
          that live on the internet.
        </p>
        <p>
          My main focus is developing fast and accessible web apps using modern
          technologies like <span className="text-blue-400">Next.js</span>,{" "}
          <span className="text-blue-400">React</span>, and{" "}
          <span className="text-blue-400">Tailwind CSS</span>.
        </p>
        <p>
          When I am not coding, I love learning new tech, reading tech blogs,
          and contributing to open-source.
        </p>
      </div>
    </section>
  );
}
