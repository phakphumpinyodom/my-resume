// "use client";
// import React from "react";

// import Image from "next/image";

// import { RiGraduationCapFill } from "react-icons/ri";
// import { MdWork } from "react-icons/md";

// const Experience = (props: any) => {
//   const { theme, language } = props;

//   const experience = [
//     {
//       company: "Sony Technology (Thailand) Co., Ltd.",
//       location: "Amata city , Chonburi",
//       position: "System Engineer",
//       duration: "December 2020 – Present",
//       types: "Full-time",
//     },
//     {
//       company: "Sony Technology (Thailand) Co., Ltd.",
//       location: "Bangkadi , Pathum Thani",
//       position: "System Engineer ( Internship )",
//       duration: "11 March – 28 June 2019",
//       types: "Internship",
//     },
//   ];

//     const experienceTH = [
//     {
//       company: 'โซนี่ เทคโนโลยี (ประเทศไทย) จำกัด',
//       location: 'อมตะซิตี้ , ชลบุรี',
//       position: 'วิศวกร ระบบ',
//       duration: 'ธันวาคม 2020 – ปัจจุบัน',
//       types: 'Full-time',
//     },
//     {
//       company: 'โซนี่ เทคโนโลยี (ประเทศไทย) จำกัด',
//       location: 'Bangkadi , Pathum Thani',
//       position: 'วิศวกร ระบบ (นักศึกษาฝึกงาน)',
//       duration: '11 มีนาคม – 28 มิถุนายน 2019',
//       types: 'Internship',
//     }
//   ]

//   const TypeIcon = ({ type }: { type: string }) => {
//     const isIntern = type.toLowerCase().includes("intern");

//     return isIntern ? (
//       <RiGraduationCapFill className={`h-8 w-8 ${theme === 'light' ? 'text-black' : 'text-[#d2d2d2]'}`} />
//     ) : (
//       <MdWork className={`h-8 w-8 ${theme === 'light' ? 'text-black' : 'text-[#d2d2d2]'}`} />
//     );
//   };

//   const formatDuration = (s: string) => s.replaceAll("–", "-");

//   return (
//     <div className={`mx-auto max-w-6xl px-5 py-0 mt-2 ${theme === 'light' ? 'bg-white' : 'bg-[#0D121E]'}`}>
//       <div className={`${theme === 'light' ? 'text-black' : 'text-[#f1f1f1]'} topic-experience ms-6 pb-2`}>
//         <span className="font-bold">
//           {language === 'EN' ? 'Experience' : 'ประสบการณ์ทำงาน'}
//         </span>
//       </div>

//       {/* improve code */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-12 ps-10">
//         {experience.map((item, idx) => (
//           <div
//             key={`${item.company}-${item.duration}-${idx}`}
//             className={`group relative overflow-hidden rounded-2xl border   p-4  transition
//                        hover:scale-105 duration-200 cursor-pointer
//                        ${theme === 'light' ? 'bg-white border-gray-200' : 'bg-[#0f121e] border-[#202531]'}`}
//           >
//             <div className="flex items-start gap-4">
//               {/* Left: SONY mark */}
//               <div className="shrink-0">
//                 {theme === 'light' ? (
//                   <Image
//                     src="/images/sony_logo_black.png"
//                     alt="Sony Logo"
//                     width={64}
//                     height={64}
//                     className="h-14 w-20 rounded-lg object-cover"
//                   />
//                 ) : (
//                   <Image
//                     src="/images/sony_logo_white.png"
//                     alt="Sony Logo"
//                     width={64}
//                     height={64}
//                     className="h-14 w-20 rounded-lg object-cover"
//                   />
//                 )}
//               </div>

//               {/* Right: content */}
//               <div className="min-w-0 flex-1 ">
//                 <div className={`truncate text-sm font-semibold ${theme === 'light' ? 'text-black' : 'text-[#ffffff]'}`}>
//                   {item.company}
//                 </div>
//                 <div className="truncate text-xs text-gray-500">
//                   {item.location}
//                 </div>

//                 <div className="mt-0 truncate text-xs font-semibold text-blue-600">
//                   {item.position}
//                 </div>
//               </div>
//             </div>

//             {/* Bottom row */}
//             <div className="mt-0 flex items-end justify-between">
//               <div className="text-[12px] text-gray-500 font-medium">
//                 {formatDuration(item.duration)}
//               </div>

//               <div
//                 className="grid h-8 w-8 place-items-center"
//                 title={item.types}
//                 aria-label={item.types}
//               >
//                 <TypeIcon type={item.types} />
//               </div>
//             </div>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Experience;





"use client";
import React, { useMemo } from "react";

import Image from "next/image";

import { RiGraduationCapFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";

const Experience = (props: any) => {
  const { theme, language } = props;

  const experience = [
    {
      company: "Sony Technology (Thailand) Co., Ltd.",
      location: "Amata city , Chonburi",
      position: "System Engineer ( Full-time ) ",
      duration: "December 2020 – Present",
      types: "Full-time",
    },
    {
      company: "Sony Technology (Thailand) Co., Ltd.",
      location: "Bangkadi , Pathum Thani",
      position: "System Engineer ( Internship )",
      duration: "11 March – 28 June 2019",
      types: "Internship",
    },
  ];

  const experienceTH = [
    {
      company: "โซนี่ เทคโนโลยี (ประเทศไทย) จำกัด",
      location: "อมตะซิตี้ , ชลบุรี",
      position: "วิศวกร ระบบ (พนักงานประจำ)",
      duration: "ธันวาคม 2020 – ปัจจุบัน",
      types: "Full-time",
    },
    {
      company: "โซนี่ เทคโนโลยี (ประเทศไทย) จำกัด",
      location: "บางกะดี , ปทุมธานี",
      position: "วิศวกร ระบบ (นักศึกษาฝึกงาน)",
      duration: "11 มีนาคม – 28 มิถุนายน 2019",
      types: "Internship",
    },
  ];

  // ✅ improve: pick dataset by language (keep JSX mapping same)
  const experienceData = useMemo(() => {
    return language === "EN" ? experience : experienceTH;
  }, [language]); // (experience arrays are constants in component)

  const TypeIcon = ({ type }: { type: string }) => {
    const isIntern = type.toLowerCase().includes("intern");

    return isIntern ? (
      <RiGraduationCapFill
        className={`h-8 w-8 ${theme === "light" ? "text-black" : "text-[#d2d2d2]"}`}
      />
    ) : (
      <MdWork
        className={`h-8 w-8 ${theme === "light" ? "text-black" : "text-[#d2d2d2]"}`}
      />
    );
  };

  const formatDuration = (s: string) => s.replaceAll("–", "-");

  return (
    <div
      className={`mx-auto max-w-6xl px-5 py-0 mt-2 ${
        theme === "light" ? "bg-white" : "bg-[#0D121E]"
      }`}
    >
      <div
        className={`${
          theme === "light" ? "text-black" : "text-[#f1f1f1]"
        } topic-experience ms-6 pb-2`}
      >
        <span className="font-bold">
          {language === "EN" ? "Experience" : "ประสบการณ์ทำงาน"}
        </span>
      </div>

      {/* improve code */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-12 ps-10">
        {experienceData.map((item, idx) => (
          <div
            key={`${item.company}-${item.duration}-${idx}`}
            className={`group relative overflow-hidden rounded-2xl border   p-4  transition
                       hover:scale-105 duration-200 cursor-pointer
                       ${
                         theme === "light"
                           ? "bg-white border-gray-200"
                           : "bg-[#0f121e] border-[#202531]"
                       }`}
          >
            <div className="flex items-start gap-4">
              {/* Left: SONY mark */}
              <div className="shrink-0">
                {theme === "light" ? (
                  <Image
                    src="/images/sony_logo_black.png"
                    alt="Sony Logo"
                    width={64}
                    height={64}
                    className="h-14 w-20 rounded-lg object-cover"
                  />
                ) : (
                  <Image
                    src="/images/sony_logo_white.png"
                    alt="Sony Logo"
                    width={64}
                    height={64}
                    className="h-14 w-20 rounded-lg object-cover"
                  />
                )}
              </div>

              {/* Right: content */}
              <div className="min-w-0 flex-1 ">
                <div
                  className={`truncate text-sm font-semibold ${
                    theme === "light" ? "text-black" : "text-[#ffffff]"
                  }`}
                >
                  {item.company}
                </div>
                <div className="truncate text-xs text-gray-500">{item.location}</div>

                <div className="mt-0 truncate text-xs font-semibold text-blue-600">
                  {item.position}
                </div>
              </div>
            </div>

            {/* Bottom row */}
            <div className="mt-0 flex items-end justify-between">
              <div className="text-[12px] text-gray-500 font-medium">
                {formatDuration(item.duration)}
              </div>

              <div
                className="grid h-8 w-8 place-items-center"
                title={item.types}
                aria-label={item.types}
              >
                <TypeIcon type={item.types} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
