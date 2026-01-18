"use client";
import React from "react";
import Image from "next/image";

import { asset } from "../../utils/asset";

const Skills = (props: any) => {
  const { theme, language } = props;

  const skills = [
    {
      name: "Expert",
      items: [
        { skill: "REACT", image: "/images/skills/react.png" },
        { skill: "NEXTJS", image: "/images/skills/next.png" },

        { skill: "TSX", image: "/images/skills/typescript.png" },
        { skill: "JS", image: "/images/skills/javascript.png" },
        { skill: "HTML", image: "/images/skills/html.png" },
        { skill: "PHP", image: "/images/skills/php.png" },
        { skill: "CSS", image: "/images/skills/css.png" },

        { skill: "MSSQL", image: "/images/skills/mssql.png" },
        { skill: "MYSQL", image: "/images/skills/mysql.png" },


      ],
    },
    {
      name: "Basic",
      items: [
        { skill: "FIGMA", image: "/images/skills/figma.png" },

        { skill: "LARAVEL", image: "/images/skills/laravel.png" },

        { skill: "GITHUB", image: "/images/skills/github.png" },
        { skill: "GITLAB", image: "/images/skills/gitlab.png" },
        { skill: "DOCKER", image: "/images/skills/docker.png" },
      ],
    }
  ];

  return (
    <div className={`${theme === "light" ? "bg-white" : "bg-[#0D121E]"}  mx-auto max-w-6xl px-5 py-0 mt-3`}>
      <div className={`${theme === "light" ? "text-black" : "text-[#f1f1f1]"} topic-experience ms-6 pb-0`}>
        <span className="font-bold">
          {language === 'EN' ? 'Skills' : 'ทักษะ'}
        </span>
      </div>

      {/* improve code */}
      <div className="mt-0">
        <div className="grid gap-2 ms-10 grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {skills.map((group) => (

              <section
                key={group.name}
                className={`rounded-sm border  p-1 ${theme === "light" ? "border-gray-200 bg-gray-50" : "bg-[#1F2430] border-[#1F2430]"}`}
              >
                              <h3 className={`${theme === "light" ? "text-[#666666]" : "text-[#999999]"} text-xs font-semibold  mb-1 ps-3`}>
                {group.name}
              </h3>
                <div className="mt-1 mb-1 flex flex-wrap gap-1 text-center justify-left px-2">
                  {group.items.map((it) => (
                    <span
                      key={`${group.name}-${it.skill}`}
                      className={`${theme === "light" ? "bg-[#ffffff]  text-gray-900 border-gray-200" : "bg-[#0D121E] text-white border-[#0D121E]"} inline-flex items-center gap-1 rounded-full border duration-200   px-3 py-1 text-[0.5rem]  shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}
                      title={it.skill}
                    >
                      <span className="tracking-wide" >{it.skill}</span>

                      <Image
                        src={asset(it.image)}
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
