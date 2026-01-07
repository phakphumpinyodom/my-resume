"use client";

import React from "react";
import Image from "next/image";

import { BiLogoGmail } from "react-icons/bi";
import { FaGitlab } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

type ContactKey = "Gmail" | "GitLab" | "GitHub";

type Props = {
  theme: "light" | "dark";
  contactLinks: (key: ContactKey) => void;
};

const Profile = (props: any) => {
  const { theme, language } = props;

  const contactLinks = (name: string) => {

    switch (name) {
      case "Gmail":
        return window.location.href = "mailto:phakphum.pinyodom@gmail.com?subject=Contact%20from%20Phakphum%20Pinyodom's%20Resume&body=Dear%20Mr.Phakphum%20Pinyodom%2C%0A%0A";
      case "GitLab":
        return window.open("https://gitlab.com/capricornpp", "_blank");
      case "GitHub":
        return window.open("https://github.com/capricornpp", "_blank");

      default:
        return "#";
    }
  }

  const isLight = theme === "light";

  const baseBtn =
    "cursor-pointer grid h-8 w-8 place-items-center rounded-full border shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md active:translate-y-0";

  const btnTheme = isLight
    ? "bg-white border-gray-200"
    : "bg-[#1f2430] border-[#1f2430]";

  const iconTheme = isLight ? "text-gray-700" : "text-[#d2d2d2]";

  const contacts: Array<{ key: ContactKey; label: string; Icon: React.ElementType }> =
    [
      { key: "Gmail", label: "Gmail", Icon: BiLogoGmail },
      { key: "GitLab", label: "GitLab", Icon: FaGitlab },
      { key: "GitHub", label: "GitHub", Icon: FaGithub },
    ];

  return (
    <>
      <div className="main-profile">
        <div className={`${theme === 'light' ? ' bg-white' : ' bg-[#0D121E]'} w-full`}>
          {/* HERO */}
          <section className="relative w-full ">
            {/* soft background */}
            <div className="absolute inset-0 " />

            <div className="relative mx-auto max-w-6xl px-5 py-0">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                {/* LEFT: avatar + text */}
                <div className="flex items-start gap-6">
                  {/* avatar */}

                  <div className="avatar relative shrink-0 -translate-y-1/2 z-20">
                    <div className="rounded-full bg-white p-1 shadow-lg">
                      <div className="relative h-32 w-32 overflow-hidden rounded-full">
                        <Image
                          src="/images/profile.jpg"
                          alt="Profile"
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>

                    <div className="absolute -bottom-1 -right-1 rounded-full p-0 z-30">
                      <div className="grid h-12 w-12 place-items-center rounded-full">
                        <Image
                          src="/images/check.png"
                          alt="Verified Badge"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </div>

                  {/* text */}
                  <div className="min-w-0">
                    <h1 className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} text-xl font-extrabold tracking-tight  sm:text-2xl`}>
                      {language === 'EN' ? 'Phakphum Pinyodom' : 'ภาคภูมิ ภิญโญดม'}
                    </h1>
                    <p className="mt-0 text-[0.7rem] md:text-xs leading-4 text-gray-500 ">
                      {language === 'EN' ? 'I’m a Frontend Developer based in Chonburi, Thailand' : 'นักพัฒนาฟรอนต์เอนด์ (ชลบุรี, ประเทศไทย)'}    
                      <br />
                      {language === 'EN' ? 
                      ('with experience building enterprise web applications, focused' +
                      'on performance and responsive design. Provides strategic' +
                      'leadership on selected projects — helping shape technical' +
                      'direction, align priorities, and drive execution. Collaborates' +
                      'and communicates effectively with cross-functional stakeholders' +
                      'to deliver user-centered features and is always eager to learn' +
                      'new technologies and develop new skills.')
                       : 
                       ('ที่มีประสบการณ์พัฒนาเว็บแอป ระดับองค์กร โดยเน้นประสิทธิภาพและการแสดงผลที่รองรับทุกอุปกรณ์ มีบทบาทด้านการวางกลยุทธ์และภาวะผู้นำในบางโครงการ' +
                       'ช่วยกำหนดทิศทางทางเทคนิค จัดลำดับความสำคัญ และผลักดันงานให้สำเร็จ ทำงานร่วมกับทีมพร้อมสื่อสารและประสานงานกับส่วนงานที่เกี่ยวข้อง' +
                       'อย่างมีประสิทธิภาพเพื่อส่งมอบฟีเจอร์ที่ตอบโจทย์ผู้ใช้ และพร้อมเรียนรู้เทคโนโลยีและทักษะใหม่ ๆ อยู่เสมอ')
                       }
                      
                    </p>
                  </div>
                </div>

                {/* RIGHT: contact buttons */}
                <div className="flex items-center gap-1 justify-end pt-0">
                  {contacts.map(({ key, label, Icon }) => (
                    <button
                      key={key}
                      aria-label={label}
                      type="button"
                      title={label}
                      onClick={() => contactLinks(key)}
                      className={`${baseBtn} ${btnTheme}`}
                    >
                      <Icon className={iconTheme} />
                    </button>
                  ))}
                </div>

              </div>



              <div className={`${theme === 'light' ? 'text-gray-900 border-gray-200' : 'text-[#f1f1f1] border-[#1C212D]'} topic-about-me ms-6 pb-1 border-b `}>
                <span className="font-bold">
                  {language === 'EN' ? 'About me' : 'ประวัติโดยย่อ'}
                  </span>
              </div>

            </div>

          </section>



        </div>
      </div>
    </>
  );
}

export default Profile;
