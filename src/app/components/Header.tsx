"use client"

import { useState } from "react"

interface HeaderProps {
    goToTipos: () => void,
    goToVantagens: () => void
}

export default function Header({goToTipos, goToVantagens}: HeaderProps) {

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav className="w-full bg-black py-[25px] px-[40px] flex justify-end">
            {/* desktop */}
            <ul className="max-[768px]:hidden flex gap-[42px]">
                <li role="button" onClick={goToVantagens} className="text-base color-[#FEFCFC] uppercase font-semibold">Vantagens da energia renovável</li>
                <li role="button" onClick={goToTipos} className="text-base color-[#FEFCFC] uppercase font-semibold">Tipos de energia renovável</li>
            </ul>

            {/* mobile */}
            {!toggleMenu ? (
                <div role="button" onClick={() => setToggleMenu(!toggleMenu)} className="max-[768px]:flex hidden flex-col gap-[8px]">
                    <div className="w-[32px] h-[3px] bg-white rounded-[2px]"></div>
                    <div className="w-[32px] h-[3px] bg-white rounded-[2px]"></div>
                    <div className="w-[32px] h-[3px] bg-white rounded-[2px]"></div>
                </div>
            ) : (
                <div role="button" onClick={() => setToggleMenu(!toggleMenu)} className="max-[768px]:flex hidden flex-col relative mt-[10px] mr-[30px] z-20">
                    <div className="w-[32px] h-[3px] bg-white rounded-[2px] absolute rotate-[45deg]"></div>
                    <div className="w-[32px] h-[3px] bg-white rounded-[2px] absolute rotate-[135deg]"></div>
                </div>
            )}

            {toggleMenu && (
                <div className="w-full flex absolute top-0 left-0">
                    <div className="absolute h-[100vh] w-full z-10 bg-[#85B6FF]"></div>
                    <ul className="w-full flex justify-between gap-[36px] flex-col items-center z-20 mt-[107px]">
                        <li role="button" onClick={() => {goToVantagens(), setToggleMenu(!toggleMenu)}} className="text-base uppercase text-white font-semibold">Vantagens da energia renovável</li>
                        <li role="button" onClick={() => {goToTipos(), setToggleMenu(!toggleMenu)}} className="text-base uppercase text-white font-semibold">Tipos de energia renovável</li>
                    </ul>
                </div>
            )}
        </nav>
    )
}