import Image from "next/image";
import Vantagem from "./Vantagem";

export default function Vantagens() {
    return (
        <>
            <div className="max-[768px]:flex-col max-[768px]:gap-[57px] max-[768px]:mb-[57px] w-full flex justify-between gap-[60px] mb-[108px]">
                <Vantagem>
                    <div className="flex items-center gap-[15px] h-[42px]">
                        <Image 
                            src="/img/sustentabilidade.svg"
                            alt="Ícones"
                            width={60}
                            height={60}
                            className="max-[768px]:w-[28px] max-[768px]:h-[28px]"
                        />

                        <h3 className="max-[768px]:text-[15px] uppercase text-[25px] font-bold text-[#85B6FF]">Sustentabilidade ambiental</h3>
                        
                    </div>

                    <p className="max-[768px]:text-[13px] text-[#949494] text-[20px] uppercase font-semibold">
                        Energias renováveis são limpas e sustentáveis, reduzindo a emissão de gases de efeito estufa e minimizando o impacto ambiental.
                    </p>
                </Vantagem>

                <Vantagem>
                    <div className="flex items-center gap-[15px] h-[42px]">
                        <Image 
                            src="/img/economico.svg"
                            alt="Ícones"
                            width={60}
                            height={60}
                            className="max-[768px]:w-[28px] max-[768px]:h-[28px]"
                        />

                        <h3 className="max-[768px]:text-[15px] uppercase text-[25px] font-bold text-[#85B6FF]">Econômico</h3>
                        
                    </div>

                    <p className="max-[768px]:text-[13px] text-[#949494] text-[20px] uppercase font-semibold">
                        Ao utilizar fontes de energia renováveis, como solar ou eólica, preservamos recursos naturais finitos, como combustíveis fósseis, petróleo e carvão.
                    </p>
                </Vantagem>
            </div>

            <div className="max-[768px]:flex-col max-[768px]:gap-[57px] w-full flex justify-between gap-[40px]">
                <Vantagem>
                    <div className="flex items-center gap-[15px] h-[42px]">
                        <Image 
                            src="/img/custo.svg"
                            alt="Ícones"
                            width={60}
                            height={60}
                            className="max-[768px]:w-[28px] max-[768px]:h-[28px]"
                        />

                        <h3 className="max-[768px]:text-[15px] uppercase text-[25px] font-bold text-[#85B6FF]">Custo a longo prazo</h3>
                        
                    </div>

                    <p className="max-[768px]:text-[13px] text-[#949494] text-[20px] uppercase font-semibold">
                        Embora o investimento inicial possa ser maior, as energias renováveis tendem a ser mais econômicas a longo prazo devido à sua disponibilidade gratuita e à redução dos custos de manutenção.
                    </p>
                </Vantagem>

                <Vantagem>
                    <div className="flex items-center gap-[15px] h-[42px]">
                        <Image 
                            src="/img/emprego.svg"
                            alt="Ícones"
                            width={60}
                            height={60}
                            className="max-[768px]:w-[28px] max-[768px]:h-[28px]"
                        />

                        <h3 className="max-[768px]:text-[15px] uppercase text-[25px] font-bold text-[#85B6FF]">Geração de empregos</h3>
                        
                    </div>

                    <p className="max-[768px]:text-[13px] text-[#949494] text-[20px] uppercase font-semibold">
                        A indústria de energias renováveis gera uma quantidade significativa de empregos, desde a fabricação e instalação de equipamentos até a manutenção e gestão de infraestrutura.
                    </p>
                </Vantagem>
            </div>
        </>
    )
}