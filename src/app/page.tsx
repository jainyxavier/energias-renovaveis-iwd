"use client"

import { useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tipos from "./components/Tipos";
import Vantagens from "./components/Vantagens";

export default function Home() {

  const sectionTipos = useRef<HTMLDivElement | null>(null)
  const sectionVantagens = useRef<HTMLDivElement | null>(null)

  function goToTipos() {
    sectionTipos.current?.scrollIntoView({behavior: "smooth"})
  }

  function goToVantagens() {
    sectionVantagens.current?.scrollIntoView({behavior: "smooth"})
  }

  return (
    <main>
      <Header goToTipos={goToTipos} goToVantagens={goToVantagens} />
  
      {/* título */}
      <section className="max-[768px]:max-w-[333px] max-[768px]:gap-[34px] max-[768px]:mt-[101px] max-[768px]:mb-[60px] w-full max-w-[686px] mt-[133px] mb-[79px] mx-auto text-center flex flex-col gap-[75px] items-center">
        <h1 className="max-[768px]:text-[20px] text-[40px] font-semibold text-black uppercase">Energias Renováveis</h1>

        <p className="max-[768px]:text-[14px] text-[30px] font-medium text-[#949494] uppercase">Explorando a Diversidade de Fontes para um Futuro Mais Sustentável</p>

        <button type="button" onClick={goToTipos} className="max-[768px]:w-[140px] max-[768px]:text-[15px] max-[768px]:py-[10px] text-[30px] text-white font-bold uppercase bg-[#85B6FF] w-[300px] py-[19px]">Veja mais</button>
      </section>

      {/* Vantagens */}
      <section ref={sectionVantagens} className="max-[768px]:pt-[71px] max-[768px]:pb-[63px] max-[768px]:mb-[47px] w-full bg-[#85B6FF1A] pt-[82px] pb-[151px] mb-[74px]">
        <div className="w-full max-w-[1300px] mx-auto px-[40px]">
          <h2 className="max-[768px]:text-[16px] max-[768px]:mb-[48px] text-[30px] uppercase text-[#949494] font-bold text-center mb-[150px]">Vantagens da energia renovável</h2>

          <Vantagens />
        </div>
      </section>

      {/* Tipos */}
      <section ref={sectionTipos} className="max-[768px]:mt-[47px] w-full mt-[74px]">
        <h2 className="max-[768px]:text-[16px] max-[768px]:mb-[50px] text-[30px] uppercase text-[#949494] font-bold text-center mb-[190px]">Tipos de energia renovável</h2>

        <Tipos />
      </section>

      <Footer />
    </main>
  );
}
