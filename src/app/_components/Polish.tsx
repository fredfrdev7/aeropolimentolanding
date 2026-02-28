import Image from "next/image";
import platformjet from "../../../public/platformjet.png"


export default function Polish() {
    return (

        <section className="relative h-screen overflow-hidden font-custom">

            <div className="">
            
                <Image src={platformjet} alt='foto jato' fill sizes='100vw' className='absolute object-cover opacity-60' quality={100} priority />
            
            </div>
            <div className="relative text-white p-4 py-6 bg-linear-to-b from-red-950 to-transparent">

                <h1 className="text-3xl font-bold font-custom-extended">POLIMENTO TÉCNICO</h1>

                <p className=" pt-6">Serviços executados por equipe técnica qualificada, em conformidade com normas da ANAC, legislação trabalhista e segurança do trabalho, com seguro de responsabilidade civil e acidentes pessoais vigente para toda a mão de obra especializada envolvida</p>
            </div>
        </section>
    )
}