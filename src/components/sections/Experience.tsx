export default function Experience() {
  return (
    <section
      id="experience"
      className="px-8 md:px-32 py-20 bg-[#112240] text-gray-300"
    >
      <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-white">
            Senior Frontend Developer @ ABC Corp
          </h3>
          <p className="text-sm text-gray-400 mb-2">Jan 2022 - Present</p>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>Build and maintain web apps using React and Next.js.</li>
            <li>
              Lead UI/UX improvements for better accessibility and performance.
            </li>
            <li>Work closely with backend team to design scalable APIs.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">
            Frontend Engineer @ XYZ Studio
          </h3>
          <p className="text-sm text-gray-400 mb-2">2019 - 2021</p>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>Developed responsive websites using React and Tailwind CSS.</li>
            <li>
              Collaborated with designers to create interactive UI components.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
