import Image from "next/image";
import logoproducts from "../../../public/logoproducts.svg"
import ap001 from "../../../public/ap001.png"
import ap0010 from "../../../public/ap0010.png"
import ap0020 from "../../../public/ap0020.png"
import logoap001 from "../../../public/logoap001.svg"
import logoap0010 from "../../../public/logoap0010.svg"
import logoap0020 from "../../../public/logoap0020.svg"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

export default function Products() {
    return (

        <section className="bg-white">
            <div className="bg-linear-to-tr from-red-200 via-white via-50% to-red-100 to-160% font-custom overflow-hidden">
                {/* <div className="text-4xl font-bold pb-6">
                    <h1>PRODUTOS</h1>
                </div> */}
                <div className="flex flex-col justify-center items-center py-6">
                    <Image src={logoproducts} alt="logo produtos" className="w-82" />
                    <p className="text-[0.9rem] tracking-[.08rem]">PERFORMANCE CLEANERS</p>
                </div>
                <h3 className="tracking-[.02rem] text-center uppercase p-4">Produtos de alto <strong>rendimento</strong>, <strong>eficiência</strong> e <strong>praticidade</strong> de aplicação</h3>
                <div className="flex flex-col justify-center items-center pt-9">
                    <div className="flex flex-col justify-center items-center gap-6">
                        <h2 className="w-full text-center font-bold border-b border-red-500">APC</h2>
                        <Image src={logoap001} alt="logoap001" className="w-21" data-aos="fade-right" />
                        <div className="lg:flex justify-center items-center justify-items-center px-4 gap-16">
                            <Image src={ap001} alt="ap001" className="w-36 lg:w-46 md:w-36 py-6" />
                            <p>Limpador versátil que pode ser usado em diferentes superfícies, tanto no interior quanto exterior, formulado para remover sujeiras e outros contaminantes de maneira eficiente, sem danificar as aréas sensíveis das aeronaves.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-6">
                        <h3 className="w-full text-center font-bold border-b border-red-500">CERA LÍQUIDA</h3>
                        <Image src={logoap0010} alt="logoap0010" className="w-22" data-aos="fade-left" />
                        <div className="lg:flex justify-center items-center justify-items-center px-4 gap-16">
                            <Image src={ap0010} alt="ap0010" className="w-46 lg:w-56 md:w-46 py-6"  />
                            <p>Limpador versátil que pode ser usado em diferentes superfícies, tanto no interior quanto exterior, formulado para remover sujeiras e outros contaminantes de maneira eficiente, sem danificar as aréas sensíveis das aeronaves.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-6">
                        <h3 className="w-full text-center font-bold border-b border-red-500">MASSA DE POLIR</h3>
                        <Image src={logoap0020} alt="logoap0020" className="w-22" data-aos="fade-right" />
                        <div className="lg:flex justify-center items-center justify-items-center px-4 gap-16">
                            <Image src={ap0020} alt="ap0020" className="w-46 lg:w-56 md:w-46 py-6" />
                            <p>Limpador versátil que pode ser usado em diferentes superfícies, tanto no interior quanto exterior, formulado para remover sujeiras e outros contaminantes de maneira eficiente, sem danificar as aréas sensíveis das aeronaves.</p>
                        </div>
                    </div>
                    <a href="#" className="bg-linear-to-tr from-red-950 via-red-700 via-50% to-red-500 to-160% flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md text-white"><WhatsappLogo className="w-5 h-5 text-white" />Contato via Whatsapp</a>
                    <h2 className="text-[0.8rem] tracking-[.03rem] text-center pb-0 px-4">APROVADOS PARA USO AERONÁUTICO DE ACORDO COM AS NORMAS DA ANAC</h2>
                    <p>Atendendo normas AMS internacionais</p>
                </div>
            </div>
        </section>
    )
}