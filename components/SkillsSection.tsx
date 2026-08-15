"use client";

import { Big_Shoulders, Space_Grotesk } from "next/font/google";
import { 
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiC, SiGo,
  SiHtml5, SiTailwindcss, SiReact, SiNextdotjs, SiRedux, SiSvelte,
  SiNodedotjs, SiExpress, SiFlask, SiGraphql, SiSocketdotio, SiJsonwebtokens,
  SiPostgresql, SiMongodb, SiPrisma, SiSupabase, SiFirebase, SiCloudflare,
  SiDocker, SiKubernetes, SiTerraform, SiGithubactions, SiGit, SiLinux, SiGnubash, SiPostman, SiCypress
} from "react-icons/si";
import { FaCss3Alt, FaVial, FaAws, FaNetworkWired } from "react-icons/fa";

const bigshoulders = Big_Shoulders({ subsets: ["latin"], weight: "900", display: "swap" });
const spaceGroteskBody = Space_Grotesk({ subsets: ["latin"], weight: "400", display: "swap" });

type Skill = {
  name: string;
  icon: React.ElementType;
  color?: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillData: SkillCategory[] = [
  {
    title: "LANGUAGES",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
      { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
      { name: "C", icon: SiC, color: "text-[#A8B9CC]" },
      { name: "Go", icon: SiGo, color: "text-[#00ADD8]" },
    ]
  },
  {
    title: "FRONTEND",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "text-[#E34F26]" },
      { name: "CSS", icon: FaCss3Alt, color: "text-[#1572B6]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
      { name: "Svelte", icon: SiSvelte, color: "text-[#FF3E00]" },
    ]
  },
  {
    title: "BACKEND",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
      { name: "Express.js", icon: SiExpress, color: "text-white" },
      { name: "Flask", icon: SiFlask, color: "text-white" },
      { name: "GraphQL", icon: SiGraphql, color: "text-[#E10098]" },
      { name: "REST APIs", icon: FaNetworkWired, color: "text-gray-400" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "text-white" },
      { name: "JWT", icon: SiJsonwebtokens, color: "text-[#000000]" },
    ]
  },
  {
    title: "DATABASE & CLOUD",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "Prisma", icon: SiPrisma, color: "text-white" },
      { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
      { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
      { name: "AWS", icon: FaAws, color: "text-[#232F3E]" },
      { name: "Cloudflare", icon: SiCloudflare, color: "text-[#F38020]" },
    ]
  },
  {
    title: "DEVOPS & TOOLS",
    skills: [
      { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
      { name: "Kubernetes", icon: SiKubernetes, color: "text-[#326CE5]" },
      { name: "Terraform", icon: SiTerraform, color: "text-[#7B42BC]" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "text-[#2088FF]" },
      { name: "Git", icon: SiGit, color: "text-[#F05032]" },
      { name: "Linux", icon: SiLinux, color: "text-[#FCC624]" },
      { name: "Bash", icon: SiGnubash, color: "text-[#4EAA25]" },
      { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
      { name: "Playwright", icon: FaVial, color: "text-[#2EAD33]" },
      { name: "Cypress", icon: SiCypress, color: "text-[#17202C]" },
    ]
  }
];

export default function SkillsSection() {
  return (
    <section className="w-full min-h-full py-8 md:py-12 px-8 md:px-16 flex flex-col items-center justify-center h-full">
      <div className="w-full max-w-6xl">
        <h2 className={`${spaceGroteskBody.className} text-xl md:text-2xl text-white text-center tracking-widest mb-10 uppercase`}>
            SKILLS
        </h2>

        <div className="flex flex-col gap-8 md:gap-10 w-full">
          {skillData.map((category) => (
            <div key={category.title} className="flex flex-col md:flex-row gap-6 md:gap-16 items-start">
              <div className="md:w-1/3">
                <h3 className={`${bigshoulders.className} text-3xl md:text-4xl text-white tracking-tight uppercase leading-none`}>
                  {category.title}
                </h3>
              </div>
              <div className="md:w-2/3 flex flex-wrap gap-x-6 gap-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 group cursor-default">
                    <skill.icon className={`w-4 h-4 md:w-5 md:h-5 opacity-80 group-hover:opacity-100 transition-opacity ${skill.color === "text-[#000000]" ? "text-white" : skill.color || "text-white"}`} />
                    <span className={`${spaceGroteskBody.className} text-xs md:text-sm text-gray-400 group-hover:text-white transition-colors`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
