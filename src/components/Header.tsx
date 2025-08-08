const navItems = [
  { key: "About", href: "#about" },
  { key: "Experience", href: "#experience" },
  { key: "Education", href: "#education" },
  { key: "Projects", href: "#projects" },
];

type HeaderProps = {
  onChange: (key: string) => void;
  active: string;
};

export default function Header({ onChange, active }: HeaderProps) {
  return (
    <nav
      className="pointer-events-auto bg-white/10 text-sm md:text-base fixed px-6 py-3 max-w-lg 
    rounded-2xl border border-white/20 shadow-xl bg-opacity-70 backdrop-blur space-x-6"
    >
      {navItems.map((item) => {
        const isActive = active === item.key;
        return (
          <button
            key={item.key}
            onClick={() => onChange(item.key)}
            className={`relative select-none pb-1 ${
              isActive ? "font-bold" : "opacity-70 hover:opacity-100"
            }`}
          >
            {item.key}

            {/* Hiệu ứng shimmer khi tab active */}
            {isActive && (
              <span className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                <span className="absolute top-0 h-full w-1 bg-white/30 animate-shimmer" />
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
}
