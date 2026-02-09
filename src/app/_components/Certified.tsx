import Image from "next/image";
import logoida from '../../../public/logoida.png'
import logoanac from '../../../public/logoanac.png'

export default function Certified() {
    return (

        <section className="bg-linear-to-tr from-zinc-100 via-white via-50% to-zinc-300 to-160% p-6 font-custom">
            <div className="text-3xl font-bold pb-6">
                <h1>CERTIFICAÇÕES</h1>
            </div>
            <p className="text-[0.9rem] tracking-[.05em] pb-6" data-aos="fade-right">A primeira empresa especializada em estética aeronaútica homologada para executar serviços de limpeza e conservação de aeronaves, atendendo em todo território nacional e internacional, conforme orientação dos manuais de fabricantes e regulamentações da ANAC.</p>
            <div className="flex justify-center items-center gap-20">
                <div className="w-32">
                    <Image src={logoanac} alt="logoanac" />
                </div>
                <div className="w-32">
                    <Image src={logoida} alt="logoida" />
                </div>
            </div>
        </section>
    )
}