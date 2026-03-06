import Image from "next/image";
import hangaroito from "../../../public/hangaroito.jpg"

export default function Aerocare() {
    return (

        <section className=" relative h-screen overflow-hidden">

            <div>

                <Image src={hangaroito} alt='foto jato' fill sizes='100' className='absolute object-cover' quality={100} priority />

            </div>
            <div className="flex flex-col relative h-screen text-black p-4 py-6 bg-linear-to-t from-white from-1% via-transparent to-white to-70%">
                <h1 className="text-3xl md:text-4xl lg:text-4xl font-custom-extended font-semibold" data-aos="fade-right">AEROCARE</h1>
                <h3 className="font-custom mt-6 text-2xl" data-aos="fade-left">PRESERVAÇÃO</h3>
                <p className="font-custom pt-6" data-aos="fade-right">Soluções aplicadas e métodos profissionais desenvolvidos para manter <strong>sua aeronave sempre limpa</strong>, <strong>higienizada e com aparência impecável</strong>, desde cuidados essenciais até tratamentos de performance máxima.</p>
            </div>
        </section>
    )
}