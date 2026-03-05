import Image from "next/image";
import hangaroito from "../../../public/hangaroito.jpg"

export default function Aerocare() {
    return (
        
           <section className=" relative h-screen overflow-hidden">

            <div>
            
                <Image src={hangaroito} alt='foto jato' fill sizes='100' className='absolute object-cover' quality={100} priority />
            
            </div>
            <div className="flex flex-col relative h-screen text-black p-4 py-6 bg-linear-to-t from-white from-1% via-transparent to-white to-70%">

                
                <h1 className="text-3xl md:text-4xl lg:text-4xl font-custom-extended font-semibold">AEROCARE</h1>
                <h3 className="font-custom mt-6 text-2xl">PRESERVAÇÃO</h3>
                <p className="font-custom pt-6">Soluções que incluem métodos profissionais desenvolvidos para manter sua aeronave sempre limpa, higienizada e com aparência impecável, desde cuidados essenciais até tratamentos de performance máxima. </p>
            </div>
        </section>
    )
}