import Image from "next/image";
import logoproducts from "../../../public/logoproducts.svg"
import ap001 from "../../../public/ap001.png"
import ap0010 from "../../../public/ap0010.png"
import ap0020 from "../../../public/ap0020.png"
import bucket from "../../../public/bucket.png"
import gallon from "../../../public/gallon.png"
import spray from "../../../public/spray.png"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

export default function Products() {
    return (

        <section className="bg-white">
            <div className="bg-linear-to-tr from-red-200 via-white via-50% to-red-100 to-160% p-6 font-custom overflow-hidden">
                {/* <div className="text-4xl font-bold pb-6">
                    <h1>PRODUTOS</h1>
                </div> */}
                <div className="flex flex-col justify-center items-center pb-9">
                    <Image src={logoproducts} alt="logo produtos" className="w-72" />
                    <p className="font-light text-[0.7rem] tracking-[.2rem]">PERFORMANCE CLEANERS</p>
                </div>
                <h2 className="text-[.7rem] tracking-[.05rem] text-center uppercase pb-6">Produtos de alto rendimento, eficiência e praticidade de aplicação</h2>
                <div className="flex flex-col gap-9">
                    <div className="flex flex-col justify-center items-center gap-6">
                        <h3 className="border-b border-red-500">APC</h3>
                        <Image src={spray} alt="logo produtos" className="w-10" data-aos="fade-right"/>
                        <Image src={ap001} alt="ap001" className="w-28" data-aos="fade-left"/>
                        <p className="font-light text-center text-[0.7rem]">Limpador versátil que pode ser usado em diferentes superfícies, tanto no interior quanto exterior, formulado para remover sujeiras e outros contaminantes de maneira eficiente, sem danificar as aréas sensíveis das aeronaves.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-6">
                        <h3 className="border-b border-red-500">CERA LÍQUIDA</h3>
                        <Image src={gallon} alt="logo produtos" className="w-10" data-aos="fade-left" />
                        <Image src={ap0010} alt="ap0010" className="w-36" data-aos="fade-right"/>
                        <p className="font-light text-center text-[0.7rem]">Limpador versátil que pode ser usado em diferentes superfícies, tanto no interior quanto exterior, formulado para remover sujeiras e outros contaminantes de maneira eficiente, sem danificar as aréas sensíveis das aeronaves.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-6">
                        <h3 className="border-b border-red-500">MASSA DE POLIR</h3>
                        <Image src={bucket} alt="logo produtos" className="w-10" data-aos="fade-right"/>
                        <Image src={ap0020} alt="ap0020" className="w-36" data-aos="fade-left"/>
                        <p className="font-light text-center text-[0.7rem]">Limpador versátil que pode ser usado em diferentes superfícies, tanto no interior quanto exterior, formulado para remover sujeiras e outros contaminantes de maneira eficiente, sem danificar as aréas sensíveis das aeronaves.</p>
                    </div>
                    <a href="#" className="bg-linear-to-tr from-red-950 via-red-700 via-50% to-red-500 to-160% flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md text-white"><WhatsappLogo className="w-5 h-5 text-white" />Contato via Whatsapp</a>
                    <h2 className="text-[.8rem] tracking-[.05rem] text-center pb-6">APROVADOS PARA USO AERONÁUTICO DE ACORDO COM AS NORMAS DA ANAC</h2>
                </div>
            </div>
        </section>
    )
}