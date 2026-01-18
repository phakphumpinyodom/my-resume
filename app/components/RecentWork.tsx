"use client";
import React from "react";

import { PiFigmaLogoFill } from "react-icons/pi";

const RecentWork = (props: any) => {
  const { theme, language } = props;

  const recentWorks = [
    {
      id: 1,
      title: "Streaming Web site",
      description: "Self-Study",
      image: "/images/dune.png",
      link: {
        figma:
          "https://www.figma.com/proto/YSdI4YS0W01NwxFP5da36V/Self-Study--1?page-id=0%3A1&node-id=1-2&p=f&viewport=-3372%2C-12%2C0.49&t=o6066O3p8BmaYxf3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
        website: false,
      },
    },
    { id: 2, title: false },
    { id: 3, title: false },
    { id: 4, title: false },
  ];

  const IconFigma = (props: React.SVGProps<SVGSVGElement>) => (
    <PiFigmaLogoFill {...props} />
  );

  const IconGlobe = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm7.9 9h-3.2a15 15 0 0 0-1.3-6 8 8 0 0 1 4.5 6zM12 4c.8 0 2.2 2.1 2.9 7H9.1C9.8 6.1 11.2 4 12 4zM4.1 13h3.2a15 15 0 0 0 1.3 6 8 8 0 0 1-4.5-6zm3.2-2H4.1a8 8 0 0 1 4.5-6 15 15 0 0 0-1.3 6zM12 20c-.8 0-2.2-2.1-2.9-7h5.8c-.7 4.9-2.1 7-2.9 7zm3.4-1a15 15 0 0 0 1.3-6h3.2a8 8 0 0 1-4.5 6z" />
    </svg>
  );

  const WorkCard = ({
    title,
    description,
    figma,
    website,
    image,
  }: {
    title: string;
    description?: string;
    figma?: string | false;
    website?: string | false;
    image?: string;
  }) => {
    return (
      <div className={`${theme === "dark" ? "bg-[#0D121E] ring-[#0D121E]" : "bg-white ring-gray-200"} ring-1 group rounded-2xl  shadow-sm  overflow-hidden`}>
        <div className="p-4">
          {/* Header row */}
          <div className="flex items-start justify-between gap-2">

            {/* Image */}
            <div className={`${theme === "dark" ? "bg-[#0D121E]" : "bg-gray-100"} rounded-xl overflow-hidden ring-1 `}>
              {image ? (
                <img
                  src={image}
                  alt={title}
                  className=" w-full object-cover "
                />
              ) : (
                <div className=" w-full  from-gray-100 to-gray-200" />
              )}
            </div>

            {/* Links */}
            <div className="flex flex-col items-center gap-2 shrink-0">
              {figma ? (
                <a
                  href={figma}
                  target="_blank"
                  rel="noreferrer"
                  className={` ${theme === "dark" ? "bg-[#1F2430] border-[#1F2430] text-gray-400 hover:text-blue-600 hover:bg-[#1F2430] " : "border-gray-200 bg-white text-gray-700 hover:text-blue-600  hover:bg-gray-50"} hover:scale-105 duration-200 inline-flex items-center gap-1.5 rounded-full border  px-2.5 py-1 text-[11px] sm:text-xs font-medium `}
                  title="Open Figma"
                >
                  <IconFigma className="h-4 w-4" />
                  Figma <span >↗</span>
                </a>
              ) : (
                <span title="Under development" className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] sm:text-xs font-medium text-gray-400 cursor-not-allowed">
                  <IconFigma className="h-4 w-4" />
                  Figma
                </span>
              )}

              {website ? (
                <a
                  href={website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[11px] sm:text-xs font-medium text-gray-700 hover:bg-gray-50"
                  title="Open Website"
                >
                  <IconGlobe className="h-4 w-4" />
                  Website <span className="text-gray-400">↗</span>
                </a>
              ) : (
                <span title="Under development" className={`${theme === "dark" ? "border-gray-600 bg-gray-600" : "border-gray-200 bg-gray-50"} inline-flex items-center gap-1.5 rounded-full border  px-2.5 py-1 text-[11px] sm:text-xs font-medium text-gray-400 cursor-not-allowed`}>
                  <IconGlobe className="h-4 w-4" />
                  Website
                </span>
              )}
            </div>
          </div>

          <div className="min-w-0">
            <h3 className={`${theme === "dark" ? "text-[#f1f1f1]" : "text-gray-900"} text-sm font-semibold leading-tight line-clamp-1 mt-1`} title={title}>
              {title}
            </h3>
            <p className="text-[0.75rem] text-gray-500 mt-0 leading-tight">
              {description ?? ""}
            </p>
          </div>


        </div>
      </div>
    );
  };

  const ComingSoonCard = () => {
    return (
      <div className={`${theme === "dark" ? "bg-[#0D121E] ring-[#0D121E]" : "bg-white ring-gray-200"} rounded-2xl shadow-sm ring-1  overflow-hidden`}>
        <div className="p-4">
          <div className="flex items-start gap-4">
            <div className={`${theme === "dark" ? "bg-gray-400" : "bg-gray-200"} h-30 md:h-30 lg:h-16 w-full rounded-xl  animate-pulse`} />
            <div className="flex-1 pt-2">
              <div className={`${theme === "dark" ? "bg-gray-400" : "bg-gray-200"} h-4 w-20 rounded mb-2 animate-pulse`} />
              <div className={`${theme === "dark" ? "bg-gray-400" : "bg-gray-200"} h-4 w-20 rounded animate-pulse`} />
            </div>
          </div>

          <div className={`${theme === "dark" ? "bg-[#1F2430] ring-[#1F2430] text-gray-400" : "bg-gray-50 ring-gray-200 text-gray-700"} mt-3 flex items-center justify-center rounded-xl ring-1 md:h-6 lg:h-5 xl:h-8`}>
            <span className="text-xs  ">
              Coming Soon...
            </span>
          </div>

        </div>
      </div>
    );
  };

  return (
    <div className={`${theme === "dark" ? "bg-[#0D121E]" : "bg-white"} mx-auto max-w-6xl px-5 pb-0 mt-2 `}>
      <div className={`${theme === "dark" ? "text-[#f1f1f1]" : "text-black"} topic-experience ms-6 pb-2`}>
        <span className="font-bold">
          {language === "EN" ? "Recent Work (Practice)" : "ผลงาน ล่าสุด (ฝึกซ้อม)"}
        </span>
      </div>

      <div className={`rounded-2xl ${theme === "dark" ? "bg-[#1F2430]" : "bg-gray-100"} p-3 ms-10 sm:p-4`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentWorks.map((w, idx) => {
            const hasWork = typeof w.title === "string" && w.title.length > 0;

            // show/hide by breakpoint
            const visibility =
              idx === 0
                ? "block" // always show 1
                : idx === 1
                  ? "hidden md:block" // show 2 on md+
                  : idx < 4
                    ? "hidden lg:block" // show 4 on lg+
                    : "hidden"; // if more than 4 items, keep hidden

            return (
              <div key={w.id} className={visibility}>
                {hasWork ? (
                  <WorkCard
                    title={w.title as string}
                    description={(w as any).description}
                    image={(w as any).image}
                    figma={(w as any).link?.figma}
                    website={(w as any).link?.website}
                  />
                ) : (
                  <ComingSoonCard />
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default RecentWork;
