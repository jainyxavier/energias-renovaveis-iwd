import Image from "next/image";
import Tipo from "./Tipo";

export default function Tipos() {
    return (
        <>
            <Tipo>
                <div className="w-full max-w-[1300px] mx-auto px-[40px]">
                    <h3 className="max-[768px]:text-[15px] text-[25px] text-[#85B6FF] uppercase font-bold">Energia solar</h3>

                    <div className="max-[768px]:mt-[20px] max-[768px]:mb-[38px] mt-[92px] mb-[82px] flex flex-col gap-[20px]">
                        <p className="max-[768px]:text-[13px] text-[20px] font-semibold text-[#949494] uppercase">
                            A energia solar é gerada através da luz do sol e é uma das formas mais populares de energia renovável. Painéis solares convertem a luz solar em eletricidade ou calor. 
                        </p>

                        <span className="max-[768px]:text-[13px] text-[20px] font-semibold text-[#949494] uppercase">Exemplos incluem:</span>

                        <ul className="list-disc ml-[30px]">
                            <li className="max-[768px]:text-[13px] text-[20px] font-semibold text-[#949494] uppercase">Painéis solares fotovoltaicos em telhados de residências.</li>
                            <li className="max-[768px]:text-[13px] text-[20px] font-semibold text-[#949494] uppercase">Usinas solares de grande escala em áreas abertas.</li>
                        </ul>
                    </div>
                </div>

                <Image
                    src="/img/energia-solar.png"
                    alt="Imagem de energia solar e pôr do sol"
                    width={1512}
                    height={577}
                    className="w-full"
                />
            </Tipo>

            <Tipo>
                <div className="w-full max-w-[1300px] mx-auto px-[40px]">
                    <h3 className="max-[768px]:text-[15px] text-[25px] text-[#85B6FF] uppercase font-bold">Energia eólica</h3>

                    <div className="max-[768px]:mt-[20px] max-[768px]:mb-[38px] mt-[92px] mb-[82px] flex flex-col gap-[20px]">
                        <p className="max-[768px]:text-[13px] text-[20px] font-semibold text-[#949494] uppercase">
                            A energia eólica é gerada pelo movimento do ar, capturado por turbinas eólicas. É uma fonte de energia limpa e sustentável.
                        </p>

                        <span className="max-[768px]:text-[13px] text-[20px] font-semibold text-[#949494] uppercase">Exemplos incluem:</span>

                        <ul className="list-disc ml-[30px]">
                            <li className="max-[768px]:text-[13px] text-[20px] font-semibold text-[#949494] uppercase">Parques eólicos em terra ou offshore.</li>
                            <li className="max-[768px]:text-[13px] text-[20px] font-semibold text-[#949494] uppercase">Turbinas eólicas instaladas em áreas rurais ou costeiras.</li>
                        </ul>
                    </div>
                </div>

                <Image
                    src="/img/energia-eolica.png"
                    alt="Imagem de torres de energia eólica"
                    width={1512}
                    height={577}
                    className="w-full"
                />
            </Tipo>

            <Tipo>
                <div className="w-full max-w-[1300px] mx-auto px-[40px]">
                    <h3 className="max-[768px]:text-[15px] text-[25px] text-[#85B6FF] uppercase font-bold">Energia hidrelétrica</h3>

                    <div className="max-[768px]:mt-[20px] max-[768px]:mb-[38px] mt-[92px] mb-[82px] flex flex-col gap-[20px]">
                        <p className="max-[768px]:text-[13px] text-[20px] font-semibold text-[#949494] uppercase">
                            A energia hidrelétrica é gerada pelo fluxo de água, capturado através de barragens e turbinas. É uma das fontes mais antigas de energia renovável.
                        </p>

                        <span className="max-[768px]:text-[13px] text-[20px] font-semibold text-[#949494] uppercase">Exemplos incluem:</span>

                        <ul className="list-disc ml-[30px]">
                            <li className="max-[768px]:text-[13px] text-[20px] font-semibold text-[#949494] uppercase">Grandes usinas hidrelétricas em rios.</li>
                            <li className="max-[768px]:text-[13px] text-[20px] font-semibold text-[#949494] uppercase">Pequenas usinas hidrelétricas em rios ou córregos.</li>
                        </ul>
                    </div>
                </div>

                <Image
                    src="/img/energia-hidreletrica.png"
                    alt="Imagem da usina hidrelétrica de Paulo Afonso BA"
                    width={1512}
                    height={577}
                    className="w-full"
                />
            </Tipo>

            <Tipo>
                <div className="w-full max-w-[1300px] mx-auto px-[40px]">
                    <h3 className="max-[768px]:text-[15px] text-[25px] text-[#85B6FF] uppercase font-bold">Energia de Biomassa</h3>

                    <div className="max-[768px]:mt-[20px] max-[768px]:mb-[38px] mt-[92px] mb-[82px] flex flex-col gap-[20px]">
                        <p className="max-[768px]:text-[13px] text-[20px] font-semibold text-[#949494] uppercase">
                            A biomassa é produzida a partir de materiais orgânicos, como resíduos agrícolas, madeira ou resíduos urbanos. Pode ser queimada para gerar calor ou eletricidade.
                        </p>

                        <span className="max-[768px]:text-[13px] text-[20px] font-semibold text-[#949494] uppercase">Exemplos incluem:</span>

                        <ul className="list-disc ml-[30px]">
                            <li className="max-[768px]:text-[13px] text-[20px] font-semibold text-[#949494] uppercase">Usinas de biomassa que queimam resíduos agrícolas para gerar eletricidade.</li>
                            <li className="max-[768px]:text-[13px] text-[20px] font-semibold text-[#949494] uppercase">Sistemas de aquecimento residencial que queimam pellets de madeira.</li>
                        </ul>
                    </div>
                </div>

                <Image
                    src="/img/energia-biomassa.png"
                    alt="Imagem de uma usina de energia de biomassa"
                    width={1512}
                    height={577}
                    className="w-full"
                />
            </Tipo>

            <Tipo>
                <div className="w-full max-w-[1300px] mx-auto px-[40px]">
                    <h3 className="max-[768px]:text-[15px] text-[25px] text-[#85B6FF] uppercase font-bold">Energia geotérmica</h3>

                    <div className="max-[768px]:mt-[20px] max-[768px]:mb-[38px] mt-[92px] mb-[82px] flex flex-col gap-[20px]">
                        <p className="max-[768px]:text-[13px] text-[20px] font-semibold text-[#949494] uppercase">
                            A energia geotérmica é gerada a partir do calor natural da Terra, geralmente encontrado em áreas com atividade vulcânica ou fontes termais. É uma fonte de energia constante e confiável.
                        </p>

                        <span className="max-[768px]:text-[13px] text-[20px] font-semibold text-[#949494] uppercase">Exemplos incluem:</span>

                        <ul className="list-disc ml-[30px]">
                            <li className="max-[768px]:text-[13px] text-[20px] font-semibold text-[#949494] uppercase">Usinas geotérmicas que extraem calor do subsolo para gerar eletricidade.</li>
                            <li className="max-[768px]:text-[13px] text-[20px] font-semibold text-[#949494] uppercase">Bombas de calor geotérmicas usadas para aquecimento e resfriamento residencial.</li>
                        </ul>
                    </div>
                </div>

                <Image
                    src="/img/energia-geotermica.png"
                    alt="Imagem de uma usina de energia geotérmica"
                    width={1512}
                    height={577}
                    className="w-full"
                />
            </Tipo>
        </>
    )
}