import Image from "next/image";
import logoproducts from "../../../public/logoproducts.svg"
import ap001 from "../../../public/ap001.png"
import ap0010 from "../../../public/ap0010.png"
import ap0020 from "../../../public/ap0020.png"
import logoap001 from "../../../public/logoap001.svg"
import logoap0010 from "../../../public/logoap0010.svg"
import logoap0020 from "../../../public/logoap0020.svg"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"
import { ChartNoAxesColumnIncreasing, ListCheck } from "lucide-react";


export default function Products() {
    return (

        <section className="bg-white bg-linear-to-tr from-red-200 via-white via-50% to-red-100 to-160% font-custom overflow-hidden">
            <div className="flex flex-col justify-center items-center">
                {/* <div className="text-4xl font-bold pb-6">
                    <h1>PRODUTOS</h1>
                </div> */}
                <div className="flex flex-col justify-center items-center py-9">
                    <Image src={logoproducts} alt="logo produtos" className="w-76" data-aos="fade-right"/>
                    <p className="text-[0.8rem] tracking-[.08rem]" data-aos="fade-left">PERFORMANCE CLEANERS</p>
                </div>
                <ChartNoAxesColumnIncreasing className="w-12 h-12 text-red-700" data-aos="fade-right" />
                <h3 className="tracking-[.02rem] text-center uppercase p-4" data-aos="fade-left">Produtos de <b className="font-semibold">alto rendimento</b>, <b className="font-semibold">eficiência</b> e <b className="font-semibold">praticidade</b> de aplicação</h3>
            </div>
            <div className="flex flex-col pt-6">
                <div className="flex flex-col justify-center items-center gap-6 py-6">
                    <h2 className="w-full text-center font-bold border-b border-red-500" data-aos="fade-down">APC</h2>
                    <Image src={logoap001} alt="logoap001" className="w-21" data-aos="fade-right" />
                    <div className="flex flex-col items-center px-4 gap-3 lg:flex-row md:gap-36">
                        <Image src={ap001} alt="ap001" className="w-36 lg:w-46 md:w-36 py-6" data-aos="fade-left" />
                        <p data-aos="fade-right">Limpador versátil que pode ser usado em diferentes superfícies, tanto no <strong>interior</strong> quanto <strong>exterior</strong>, formulado para remover sujeiras e outros contaminantes de maneira eficiente.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-6 py-6">
                    <h3 className="w-full text-center font-bold border-b border-red-500" data-aos="fade-down">CERA LÍQUIDA</h3>
                    <Image src={logoap0010} alt="logoap0010" className="w-22" data-aos="fade-left" />
                    <div className="flex flex-col items-center px-4 gap-3 lg:flex-row md:gap-36">
                        <Image src={ap0010} alt="ap0010" className="w-46 lg:w-56 md:w-46 py-6" data-aos="fade-left" />
                        <p data-aos="fade-right">Uma aplicação que combina <strong>polimento</strong> e <strong>proteção</strong>, promovendo uma repelência na superficie, contém componentes de limpeza para restaurar o brilho.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-6 pt-6 pb-3">
                    <h3 className="w-full text-center font-bold border-b border-red-500" data-aos="fade-down">MASSA DE POLIR</h3>
                    <Image src={logoap0020} alt="logoap0020" className="w-22" data-aos="fade-right" />
                    <div className="flex flex-col items-center px-4 gap-3 lg:flex-row md:gap-36">
                        <Image src={ap0020} alt="ap0020" className="w-46 lg:w-56 md:w-46 py-6" data-aos="fade-left" />
                        <p data-aos="fade-right">Altamente indicada para revitalizar pinturas manchadas e oxidadas pela ação dos raios solares, pequenos arranhões e imperfeições. Ótima para <strong>pinturas PU e metálicas</strong>, cromados e metais em geral.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center gap-6 py-9 px-4">
                <ListCheck  className="w-12 h-12 text-red-700" data-aos="fade-right"/>
                <h2 className="text-center font-semibold" data-aos="fade-left">APROVADOS PARA USO AERONÁUTICO DE ACORDO COM AS NORMAS DA ANAC</h2>
                <p className="text-[0.8rem]" data-aos="fade-right">Produtos em conformidade com as normas <strong>AMS (Aerospace Material Specifications)</strong>, atendendo especificações rigorosas para materiais metálicos, tratamentos térmicos e processos especiais, assegurando controle técnico, rastreabilidade completa e conformidade com as exigências da indústria aeroespacial internacional.</p>
                <a href="https://wa.me/5531989477030?text=Ol%C3%A1%20venho%20do%20site%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos...%20" className="bg-linear-to-tr from-red-950 via-red-700 via-50% to-red-500 to-160% flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md text-white"><WhatsappLogo className="w-5 h-5 text-white" />SAIBA MAIS</a>
            </div>
        </section>
    )
}