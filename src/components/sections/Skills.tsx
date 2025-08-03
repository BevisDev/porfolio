const skills = [
  "HTML5",
  "CSS",
  "Javascript",
  "Node.js",
  "React",
  "Git",
  "Github",
];

const Skills = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-[#0f172a] py-4">
      <div className="inline-block animate-marquee space-x-10 text-gray-300 text-lg font-medium">
        {skills.map((skill, i) => (
          <span key={i} className="inline-block">
            {skill}
          </span>
        ))}
        {/* Lặp lại để tạo hiệu ứng vô tận */}
        {skills.map((skill, i) => (
          <span key={`repeat-${i}`} className="inline-block">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
