import Image from "next/image";
import platformjet from "../../../public/platformjet.png"


export default function Polish() {
    return (

        <section className="relative h-screen overflow-hidden font-custom">

            <div className="">

                <Image src={platformjet} alt='foto jato' fill sizes='100vw' className='absolute object-cover opacity-60' quality={100} priority />

            </div>
            <div className="relative text-white p-4 py-6 bg-linear-to-b from-red-950 to-transparent">

                <h1 className="text-3xl md:text-4xl lg:text-4xl font-custom-extended font-semibold" data-aos="fade-right">POLIMENTO TÉCNICO</h1>
                <h3 className="font-light mt-6 text-2xl" data-aos="fade-left">CORREÇÃO DE PINTURA</h3>
                <p className="pt-6" data-aos="fade-right">Polimento técnico em superfícies com pintura poliéster e poliuretano, com métodos controlados para <strong>remoção de arranhões</strong>, <strong>marcas e hologramas sem agressividade</strong>. O processo considera espessura, dureza, nível de brilho e padrão de acabamento, incluindo tratamentos em repinturas e etapas de lixamento quando necessárias, para restabelecer a estética da aeronave.</p>
            </div>
        </section>
    )
}