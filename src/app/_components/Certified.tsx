import Image from "next/image";
import logoida from '../../../public/logoida.png'
import logoanac from '../../../public/logoanac.png'
import brazilflag from '../../../public/brazilflag.svg'
import usaflag from '../../../public/usaflag.svg'
import { Award } from "lucide-react";

export default function Certified() {
    return (

        <section className="bg-linear-to-tr from-zinc-100 via-white via-50% to-zinc-300 to-160% p-4 pt-12 pb-9 overflow-hidden">
            <div className="lg:flex gap-20">
                <div className="">
                    <h1 className="font-semibold text-3xl md:text-4xl lg:text-4xl pb-3 font-custom-extended" data-aos="fade-down" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="300">CERTIFICAÇÕES</h1>
                    <Award className="w-12 h-12 stroke-1" data-aos="fade-right" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="300"/>
                    <p className="pb-6 pt-4 font-custom font-light" data-aos="fade-right">A primeira empresa especializada em <strong>estética aeronaútica homologada</strong> para executar serviços de limpeza e conservação de aeronaves, atendendo em todo território nacional e internacional, conforme orientação dos manuais de fabricantes e instituições regulamentadoras.</p>
                </div>

                <div className="py-6 md:px-16 flex justify-center items-center gap-20">
                    <div className="flex flex-col justify-center items-center w-32 gap-6" data-aos="fade-right">
                        <Image src={brazilflag} alt="brazilflag" className="w-12"/>
                        <Image src={logoanac} alt="logoanac" />
                    </div>
                    <div className="flex flex-col justify-center items-center w-32 gap-6" data-aos="fade-left">
                        <Image src={usaflag} alt="usaflag" className="w-13"/>
                        <Image src={logoida} alt="logoida" />
                    </div>
                </div>
            </div>
        </section>
    )
}