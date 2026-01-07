"use client";
import React from "react";
import Image from "next/image";

const Skills = (props: any) => {
  const { theme, language } = props;

  const skills = [
    {
      name: "Frameworks & Libraries",
      items: [
        { skill: "REACT", image: "/images/skills/react.png" },
        { skill: "NEXTJS", image: "/images/skills/next.png" },
        { skill: "VITE", image: "/images/skills/vite.png" },
        { skill: "LARAVEL", image: "/images/skills/laravel.png" },
      ],
    },
    {
      name: "Languages & Syntax",
      items: [
        { skill: "TSX", image: "/images/skills/typescript.png" },
        { skill: "JS", image: "/images/skills/javascript.png" },
        { skill: "HTML", image: "/images/skills/html.png" },
        { skill: "PHP", image: "/images/skills/php.png" },
        { skill: "CSS", image: "/images/skills/css.png" },
      ],
    },
    {
      name: "UI Styling Frameworks",
      items: [
        { skill: "TAILWIND", image: "/images/skills/tailwind.png" },
        { skill: "BOOTSTRAP", image: "/images/skills/bootstrap.png" },
        { skill: "MUI", image: "/images/skills/mui.png" },
        { skill: "ANTD", image: "/images/skills/antd.png" },
      ],
    },
    {
      name: "Databases",
      items: [
        { skill: "MSSQL", image: "/images/skills/mssql.png" },
        { skill: "MYSQL", image: "/images/skills/mysql.png" },
      ],
    },
    {
      name: "API & Testing Tools",
      items: [
        { skill: "POSTMAN", image: "/images/skills/postman.png" },
        { skill: "SWAGGER", image: "/images/skills/swagger.png" },
        { skill: "AXIOS", image: "/images/skills/axios.png" },
      ],
    },
    {
      name: "Design & UI Collaboration",
      items: [{ skill: "FIGMA", image: "/images/skills/figma.png" }],
    },
    {
      name: "Version Control & DevOps",
      items: [
        { skill: "GITHUB", image: "/images/skills/github.png" },
        { skill: "GITLAB", image: "/images/skills/gitlab.png" },
        { skill: "DOCKER", image: "/images/skills/docker.png" },
      ],
    },
    {
      name: "AI",
      items: [{ skill: "CHATGPT", image: "/images/skills/chatgpt.png" }],
    },
  ];

  return (
    <div className={`${theme === "light" ? "bg-white" : "bg-[#0D121E]"}  mx-auto max-w-6xl px-5 py-0 mt-3`}>
      <div className={`${theme === "light" ? "text-black" : "text-[#f1f1f1]"} topic-experience ms-6 pb-2`}>
        <span className="font-bold">        
          {language === 'EN' ? 'Skills' : 'ทักษะ'}
        </span>
      </div>

      {/* improve code */}
      <div className="mt-0">
        <div className="grid gap-2 ms-10 grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
          {skills.map((group) => (
            <section
              key={group.name}
              className={`rounded-sm border  p-1 ${theme === "light" ? "border-gray-200 bg-gray-50" : "bg-[#1F2430] border-[#1F2430]"}`}
            >
              <h3 className={`${theme === "light" ? "text-[#666666]" : "text-[#999999]"} text-[0.55rem] text-center`}>
                {group.name}
              </h3>

              <div className="mt-1 mb-1 flex flex-wrap gap-1 text-center justify-center">
                {group.items.map((it) => (
                  <span
                    key={`${group.name}-${it.skill}`}
                    className={`${theme === "light" ? "bg-[#ffffff]  text-gray-900 border-gray-200" : "bg-[#0D121E] text-white border-[#0D121E]"} inline-flex items-center gap-1 rounded-full border duration-200   px-3 py-1 text-[0.5rem]  shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}
                    title={it.skill}
                  >
                    <span className="text-red-500" hidden={it.skill == "VITE" || it.skill == "LARAVEL" || it.skill == "DOCKER"} >*</span>
                    <span className="tracking-wide" >{it.skill}</span>

                    <Image
                      src={it.image}
                      alt={it.skill}
                      width={18}
                      height={18}
                      className="h-3 w-3 object-cover rounded-full"
                    />
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
