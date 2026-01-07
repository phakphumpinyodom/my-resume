// "use client"
// import React from 'react'

// const AboutMe = () => {
//   return (
//     <div className='mx-auto max-w-6xl px-5 py-0' >
//       <ul className='text-[0.7rem] md:text-xs leading-4 text-gray-500 px-10 mt-1' >
//         Graduated with a Bachelor’s degree in Computer Engineering from Suranaree University of Technology with experience
//         <li>
//           System Engineer ( Internship ), Sony Technology (Thailand) Co., Ltd., Bangkadi Industrial Park, Pathum Thani — 4 months
//         </li>
//         <li>
//           System Engineer (Full-time), Sony Technology (Thailand) Co., Ltd., Amata City Industrial Estate, Chonburi — December 2020 – Present
//         </li>

//       </ul>
//     </div>
//   )
// }

// export default AboutMe









"use client";
import React from "react";

const AboutMe = (props: any) => {
  const { theme, language } = props;
  return (
    <div className={`${theme === 'light' ? 'bg-white' : 'bg-[#0D121E]'} mx-auto max-w-6xl px-15 py-0`}>
      {/* Text line (no bullet) */}
      <p className="mt-1 text-[0.7rem] leading-4 text-gray-500 md:text-xs">
        {language === 'EN' ?
        "Graduated with a Bachelor’s degree in Computer Engineering from Suranaree" +
        "University of Technology with experience"
        :
        "จบการศึกษา วิศวกรรมคอมพิวเตอร์ ระดับปริญญาตรี จาก มหาวิทยาลัยเทคโนโลยีสุรนารี เเละมีประสบการณ์"
        }
      </p>

      {/* Bullets */}
      <ul className="mt-1 list-disc space-y-1 pl-5 text-[0.7rem] leading-3 text-gray-500 marker:text-gray-400 ">
        <li>
          {language === 'EN' ?
          "System Engineer (Internship), Sony Technology (Thailand) Co., Ltd., Bangkadi Industrial Park, Pathum Thani — 4 months"
          :
          "นักศึกษาฝึกงาน ตำแหน่ง วิศวกร ระบบ ที่ บริษัท โซนี่ เทคโนโลยี(ประเทศไทย) จำกัด ที่ สวนอุตสาหกรรม บางกะดี, ปทุมธานี — 4 เดือน"
          }
        </li>
        <li>
          {language === 'EN' ?
          "System Engineer (Full-time), Sony Technology (Thailand) Co., Ltd., Amata City Industrial Estate, Chonburi — December 2020 – Present"
          :
          "พนักงานประจำ ตำแหน่ง วิศวกร ระบบ ที่ บริษัท โซนี่ เทคโนโลยี(ประเทศไทย) จำกัด ที่ นิคมอุตสาหกรรม อมตะ ซิตี้, ชลบุรี ตั้งแต่ ธันวาคม ปี 2020 - ปัจจุบัน"
          }
        </li>
      </ul>
    </div>
  );
};

export default AboutMe;
