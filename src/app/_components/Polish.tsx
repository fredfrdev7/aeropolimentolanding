import Image from "next/image";
import platformjet from "../../../public/platformjet.png"


export default function Polish() {
    return (

        <section className="flex flex-col bg-linear-to-tr from-zinc-100 via-white via-50% to-zinc-300 to-160% p-6 relative  overflow-hidden font-custom gap-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">POLIMENTO TÉCNICO</h1>
            <div className="rounded-3xl ">
                <Image src={platformjet} alt='foto jato' />
            </div>
            <p className="text-sm">Serviços executados por equipe técnica qualificada, em conformidade com normas da ANAC, legislação trabalhista e segurança do trabalho, com seguro de responsabilidade civil e acidentes pessoais vigente para toda a mão de obra especializada envolvida</p>
        </section>
    )
}