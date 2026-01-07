"use client";
import React, { useState } from "react";

import Cover from "./components/Cover";
import Profile from "./components/Profile";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import RecentWork from "./components/RecentWork";


export default function Home() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("EN");
  return (
    <div >
      <main className="font-montserrat" >
        <Cover
          theme={theme}
          setTheme={setTheme}

          language={language}
          setLanguage={setLanguage}
        />

        <div className={`bg-${theme === "dark" ? "[#0D121E]" : "white"}`}>
          <div className="container mx-auto">
            <Profile theme={theme} language={language} />

            <AboutMe theme={theme} language={language} />
            <Experience theme={theme} language={language} />
            <Skills theme={theme} language={language} />
            <RecentWork theme={theme} language={language} />

          </div>
        </div>

      </main>
    </div>
  );
}
