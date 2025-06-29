import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "gemini-color",
    "github-svgrepo-com",
    "firebase-svgrepo-com",
    "openai-svgrepo-com",
    "claude-color",
    "cursor",
    "java-icon",
    "git",
    "html5",
    "javascript",
    "microsoft",
    "react",
    "database-svgrepo-com",
    "tailwindcss",
    "vitejs",
    "machine-ai-icon",
    "python-logo",
    "visualstudiocode",
    "windsurf-black-symbol",
  ];
  
  const Icon = ({ src }) => (
    <img src={src} className="duration-200 rounded-sm hover:scale-110" />
  );

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
};
