const works = [
  {
    title: "CIB on the Mobile",
    desc: "Take your bank wherever you go for amazing experience.",
  },
  {
    title: "CIB on the Mobile",
    desc: "Take your bank wherever you go for amazing experience.",
  },
  {
    title: "CIB on the Mobile",
    desc: "Take your bank wherever you go for amazing experience.",
  },
  {
    title: "CIB on the Mobile",
    desc: "Take your bank wherever you go for amazing experience.",
  },
];

export default function Experience() {
  return (
    <section className="px-8 md:px-20 py-16">
      <h2 className="text-2xl font-bold mb-10">Work Experience</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {works.map((work, i) => (
          <div
            key={i}
            className="bg-gradient-to-r from-purple-800/40 to-purple-600/30 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
            <p className="text-gray-300">{work.desc}</p>
            <button className="mt-4 px-4 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-500">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
