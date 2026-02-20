import Image from "next/image";
import logoida from '../../../public/logoida.png'
import logoanac from '../../../public/logoanac.png'
import { Award } from "lucide-react";

export default function Certified() {
    return (

        <section className="bg-linear-to-tr from-zinc-100 via-white via-50% to-zinc-300 to-160% p-6 font-custom overflow-hidden">
            <div className="text-3xl font-bold pb-3">
                <h1>CERTIFICAÇÕES</h1>
            </div>
            <Award className="w-12 h-12"/>
            <p className="text-[0.9rem] tracking-[.05em] pb-6 pt-4" data-aos="fade-right">A primeira empresa especializada em estética aeronaútica homologada para executar serviços de limpeza e conservação de aeronaves, atendendo em todo território nacional e internacional, conforme orientação dos manuais de fabricantes e regulamentações da ANAC.</p>
            <div className="flex justify-center items-center gap-20">
                <div className="w-32" data-aos="fade-right">
                    <Image src={logoanac} alt="logoanac" />
                </div>
                <div className="w-32" data-aos="fade-left">
                    <Image src={logoida} alt="logoida" />
                </div>
            </div>
        </section>
    )
}