"use client";
import React from "react";

const AboutMe = (props: any) => {
  const { theme, language } = props;
  return (
    <div >
      <div className="ps-11 xl:ps-27">
        <div className={`${theme === 'light' ? 'text-gray-900 border-gray-200' : 'text-[#f1f1f1] border-[#1C212D]'} topic-about-me pb-1 border-b `}>
          <span className="font-bold">
            {language === 'EN' ? 'Profressional Summary' : 'สรุปความเชี่ยวชาญ'}
          </span>
        </div>
      </div>

      <div className={`${theme === 'light' ? 'bg-white' : 'bg-[#0D121E]'} mx-auto max-w-6xl px-15 py-0`}>

        {/* Text line (no bullet) */}
        <p className="mt-1 text-[0.7rem] leading-4 text-gray-500 md:text-xs">
          {language === 'EN' ?
            "5+ years of experience in Frontend web development, specializing in React.js/Next.js TypeScript, and Full-stack capabilities. Proficient in HTML, JavaScript, and CSS, and experienced with MySQL and Microsoft SQL Server (MSSQL). Strong leadership skills with hands-on experience delivering projects using SDLC methodologies, including Waterfall and Agile. Skilled in RDBMS optimization, Git workflow, GitLab CI/CD, and Docker for building scalable applications."
            :
            "มีประสบการณ์มากกว่า 5 ปีด้านการพัฒนาเว็บไซต์ฝั่ง Frontend โดยเชี่ยวชาญ React.js/Next.js TypeScript และ Full-stack มีความชำนาญใน HTML, JavaScript และ CSS และมีประสบการณ์ใช้งานฐานข้อมูล MySQL และ Microsoft SQL Server (MSSQL) มีทักษะความเป็นผู้นำ และมีประสบการณ์พัฒนาระบบตามกระบวนการ SDLC ทั้งแบบ Waterfall และ Agile เชี่ยวชาญด้านการปรับประสิทธิภาพ RDBMS การใช้งาน Git และ GitLab CI/CD รวมถึง Docker เพื่อพัฒนาและสร้างระบบที่รองรับการขยายตัว (scalable)"
          }
        </p>

      </div>
    </div>
  );
};

export default AboutMe;
