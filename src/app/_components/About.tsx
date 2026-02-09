import Image from "next/image"
import falconjet from "../../../public/falconjet.jpg"
import h160 from "../../../public/h160.jpg"
import { Check, MapPin } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"


export function About() {
    return (
        <section className="bg-linear-to-b from-white from-20% to-black py-16 font-custom" >
            <div className="container px-4 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="relative">
                        <div className="relative w-full h-[400] rounded-3xl overflow-hidden">
                            <Image src={falconjet} alt="h160" fill quality={100} className="object-cover hover:scale-110 duration-300" priority />
                        </div>
                        <div className="absolute w-55 h-50 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white" data-aos="fade-up">
                            <Image src={h160} alt="h160" fill quality={100} className="object-cover" priority />
                        </div>
                    </div>

                    <div className="space-y-6 mt-10 overflow-hidden text-white">
                        <h2 className="text-4xl font-bold" data-aos="fade-down">ASAS FIXA E ROTATIVA</h2>
                        <p data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae sit, cupiditate dicta nostrum perspiciatis esse fugit accusantium illum minima voluptatum ut earum, aspernatur incidunt harum doloremque autem officia commodi pariatur.</p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2" data-aos="fade-left">
                                <Check className="text-red-600" />
                                Desde 2013 no mercado
                            </li>
                            <li className="flex items-center gap-2" data-aos="fade-left">
                                <Check className="text-red-600" />
                                Centenas de aeronaves entregues
                            </li>
                            <li className="flex items-center gap-2" data-aos="fade-left">
                                <Check className="text-red-600" />
                                Linha própria de produtos
                            </li>
                            <li className="flex items-center gap-2" data-aos="fade-left">
                                <Check className="text-red-600" />
                                Atendimento Fora de base
                            </li>
                        </ul>

                        <div className="flex gap-2">
                            <a href="#" className="bg-black text-white flex items-center justify-content w-fit gap-2 px-4 py-2 rounded-md">
                                <WhatsappLogo className="w-5 h-5 text-white" />
                                Contato via Whatsapp
                            </a>

                            <a href="#" className=" flex items-center justify-content w-fit gap-2 px-4 py-2 rounded-md">
                                <MapPin className="w-5 h-5 text-white" />
                                Endereço da loja
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}