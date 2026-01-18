"use client"
import React from 'react'

import Image from 'next/image'
import { SunFilled } from '@ant-design/icons';
import { IoMoon } from "react-icons/io5";

const basePath = process.env.NEXT_PUBLIC_BASEPATH ?? "";

const Cover = (props : any) => {
    const { theme, setTheme, language, setLanguage } = props;
    return (
        <div className="relative w-full h-[14vh]">
            <Image
                src={`${basePath}/images/cover_bg.jpg`}
                alt="Cover Image"
                layout="fill"
                objectFit="cover"
                style={{ zIndex: -1 }}
            />
            <div className='btn-group absolute top-2 right-2 flex gap-2' >
                <div className={ `${theme === 'light' ? 'py-1 bg-white' : 'py-2 bg-[#1F2430]'} btn-language px-2  rounded-full cursor-pointer`} title='Change theme' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light' )} >
                    {theme === 'light' ? <SunFilled style={{ color: '#F6B827' }} /> : <IoMoon style={{ color: '#5928E3' }} />}
                </div>
                <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-[#1F2430] text-white'} btn-theme font-light px-2 py-1 rounded-full text-xs cursor-pointer`} title='Change language' onClick={() => setLanguage(language === 'EN' ? 'TH' : 'EN' )} >
                    <p className='translate-y-1' >{language}</p>
                </div>
            </div>

        </div>
    )
}

export default Cover
