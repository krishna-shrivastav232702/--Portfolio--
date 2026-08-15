"use client";

import { Big_Shoulders, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import StackedSection from "./StackedSection";

const bigshoulders = Big_Shoulders({ subsets: ["latin"], weight: "900", display: "swap" });
const spaceGroteskBody = Space_Grotesk({ subsets: ["latin"], weight: "400", display: "swap" });

type Project = {
  id: string;
  title: string;
  description: string;
  techTags: string[];
  repo?: string;
  demo?: string;
  image?: string;
};

const projects: Project[] = [
  {
    id: "ide",
    title: "Real-Time Collaborative Proctored IDE",
    description: "A collaborative code editor built to hold up under 120+ simultaneous users — with per-user isolated execution and zero central locking. Each session runs in its own containerized environment with real-time file sync and live terminal streaming.",
    techTags: ["Socket.IO", "Docker", "Supabase", "Redis", "Cloudflare", "Next.js","Yjs"," Monaco Editor"],
    demo: "https://gdg-ide.vercel.app/",
    repo: "#https://github.com/krishna-shrivastav232702/Proctored-IDE",
    image: "/proctored-ide.png",
  },
  {
  id: "Synflow",
  title: "Synflow – Multi-Tenant Workflow Automation Engine",
  description: "A serverless workflow automation platform featuring an asynchronous, event-driven execution loop. Engineered with strict cross-tenant data isolation at the database layer and real-time GraphQL subscriptions for live step-by-step execution tracking.",
  techTags: ["Next.js", "Hasura GraphQL", "PostgreSQL", "Nhost", "TypeScript","Next.js"],
  demo: "https://vocallabs-three.vercel.app/", 
  repo: "https://github.com/krishna-shrivastav232702/vocallabs", 
  image: "/synflow.png",
},
  {
    id: "EduQuest",
    title: "EduQuest — AI-Powered Test Platform",
    description: "An AI-powered test preparation platform that uses Google Gemini to generate MCQs directly from uploaded PDFs, with an interactive test environment and smart reminders for upcoming exams.",
    techTags: ["AWS","PostgreSQL", "Prisma", "Express", "React.js","Shadcn-UI","framer-motion"],
    repo: "https://github.com/krishna-shrivastav232702/EduQuest",
    image: "/eduquest.png"
  },
  {
    id: "hackpal",
    title: "HackPal — AI-Powered Assistant",
    description: "An AI assistant for hackathon teams that processed 15+ technical documents and resolved 100+ queries spanning debugging, documentation summarization, and project ideation.",
    techTags: ["Flask", "PostgreSQL", "Next.js","Agno","Agentic-AI"],
    repo: "https://github.com/krishna-shrivastav232702/HackPal",
    image: "/hackpal.png"
  },
  {
    id: "ctf",
    title: "GDG NMIT CTF Platform",
    description: "Built and managed a live Capture-The-Flag competition platform used by 100+ participants during a flagship college tech event, handling real-time challenge delivery and live scoring.",
    techTags: ["Next.js", "mongodb","aceternity-ui"],
    repo: "https://github.com/krishna-shrivastav232702/gdg-ctf-2025",
    demo:"https://gdg-ctf-2025.vercel.app/",
    image: "/ctf.png"
  },
  {
    id: "taskaroo",
    title: "Taskaroo",
    description: "A task management app designed for efficient task scheduling, featuring JWT authentication, OTP verification, email reminders, and smart deadline tracking to help users stay organized.",
    techTags: ["TypeScript", "Node.js", "Express","mongodb","Context-API"],
    repo: "https://github.com/krishna-shrivastav232702/TaskManagmentApp",
    image: "/taskaroo.png"
  }
];

export default function ProjectsSection() {
  return (
    <>
      {projects.map((project, idx) => (
        <StackedSection key={project.id} className="justify-center px-8 md:px-16 py-12">
          <div className="w-full max-w-6xl mx-auto flex flex-col h-full justify-center">
            {idx === 0 && (
              <h2 className={`${spaceGroteskBody.className} text-xl md:text-2xl text-white text-center tracking-widest mb-12 uppercase`}>
                  PROJECTS
              </h2>
            )}

            <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-3/5 bg-[#111] border border-[#222] overflow-hidden group aspect-[16/9] relative">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0a0a] text-[#333]">
                    <span className={`${bigshoulders.className} text-4xl uppercase tracking-widest text-center px-4`}>{project.title}</span>
                  </div>
                )}
              </div>

              <div className="w-full lg:w-2/5 flex flex-col items-start text-left">
                <h3 className={`${bigshoulders.className} text-4xl md:text-5xl text-white uppercase tracking-tight leading-none mb-6`}>
                  {project.title}
                </h3>
                <p className={`${spaceGroteskBody.className} text-base text-gray-400 mb-8 leading-relaxed`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techTags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs border border-[#2a2a2a] text-gray-300 rounded-full bg-[#111]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                      <FaGithub className="w-6 h-6" />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#b8cff0] transition-colors">
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </StackedSection>
      ))}
    </>
  );
}
