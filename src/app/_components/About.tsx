import Image from "next/image"
import falconjet from "../../../public/falconjet.jpg"
import h130 from "../../../public/h130.jpg"
import { Check, MapPin } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"


export function About() {
    return (
        <section className="bg-linear-to-t from-red-950 via-black via-50% to-white to-85% py-16 overflow-hidden" >
            <div className="container px-4 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="relative">
                        <div className="relative w-full h-[400] rounded-3xl overflow-hidden">
                            <Image src={falconjet} alt="h160" fill quality={100} className="object-cover hover:scale-110 duration-300" priority />
                        </div>
                        <div className="absolute w-55 h-50 right-4 -bottom-8 rounded-3xl border-4 overflow-hidden border-white" data-aos="fade-up">
                            <Image src={h130} alt="h160" fill quality={100} className="object-cover" priority />
                        </div>
                    </div>

                    <div className="space-y-6 mt-10 text-white">
                        <h1 className="text-3xl md:text-4xl lg:text-4xl font-custom-extended font-semibold" data-aos="fade-right">ASAS FIXA E ROTATIVA</h1>
                        <p className="font-custom" data-aos="fade-left">Nossa missão é atender respectivamente <strong>aviões e helicópteros</strong>, com serviços especializados de estética e preservação do interior e exterior, realizando intervenções e inspeções visuais minunciosas em cada superficie e componente, identificando possíveis depreciações e reparos necessários prezando pela integridade das aeronaves e valorização do ativo.</p>

                        <ul className="space-y-4 font-custom font-regular pt-3">
                            <li className="flex items-center gap-2" data-aos="fade-left">
                                <Check className="text-red-600" />
                                Desde <strong>2013</strong> no mercado
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

                    </div>
                </div>
            </div>
        </section>
    )
}