import Image from "next/image";
import hangaroito from "../../../public/hangaroito.jpg"

export default function Aerocare() {
    return (
        
           <section className=" relative h-screen overflow-hidden font-custom">

            <div>
            
                <Image src={hangaroito} alt='foto jato' fill sizes='100' className='absolute object-cover' quality={100} priority />
            
            </div>
            <div className="flex flex-col relative h-screen text-black p-4 py-6 bg-linear-to-t from-white from-5% via-transparent to-white to-100%">

                <h1 className="text-3xl font-bold font-custom-extended">AEROCARE</h1>
                <h3 className="font-bold mt-6 text-2xl">PRESERVAÇÂO</h3>
                <p className=" pt-6">Serviços executados por equipe técnica qualificada, em conformidade com normas da ANAC, legislação trabalhista e segurança do trabalho, com seguro de responsabilidade civil e acidentes pessoais vigente para toda a mão de obra especializada envolvida</p>
            </div>
        </section>
    )
}