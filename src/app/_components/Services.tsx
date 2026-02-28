"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'
import checklist from '../../../public/checklist.jpg'
import paintcleaner from '../../../public/paintcleaner.jpg'
import insideclear from '../../../public/insideclear.jpg'
import insidecare from '../../../public/insidecare.jpg'
import proceduralpolish from '../../../public/proceduralpolish.jpg'
import plexiglass from '../../../public/plexiglass.jpg'
import Image from 'next/image'

const services = [
    {
        title: "Check-list",
        description: "Procedimento de avaliação prévia da aeronave que gera um registro técnico antes do início dos serviços, garantindo segurança, conformidade e padrão de qualidade na execução.",
        duration: "1h",
        price: "$1500",
        icon: <Scissors />,
        linkText: "Olá vi no site sobre Descontaminação de pintura",
        image: checklist
    },
    {
        title: "Descontaminação de Pintura",
        description: "Uma lavagem técninca da fuselagem removendo fuligens sujeiras ancoradas e contaminações",
        duration: "1h",
        price: "$1500",
        icon: <Scissors />,
        linkText: "Olá vi no site sobre Descontaminação de pintura",
        image: paintcleaner
    },
    {
        title: "Higienização interna",
        description: "Higienização minuciosa de cockpit, galley, alojamento de galley, revestimentos em couro, cintos e tapetes, assegurando conservação e alto padrão estético da aeronave.",
        duration: "1h",
        price: "$3500",
        icon: <Syringe />,
        linkText: "Olá vi no site sobre Higienização interna",
        image: insideclear
    },
    {
        title: "Impermeabilização interna",
        description: "Aplicação de tratamento de impermeabilização para couro, cintos e tapeçaria, formando uma barreira protetiva contra umidade, sujeira e desgaste prematuro, preservando a aparência e a durabilidade dos materiais da aeronave.",
        duration: "6h",
        price: "$16000",
        icon: <Hotel />,
        linkText: "Olá vi no site sobre Impermeabilização interna",
        image: insidecare
    },
    {
        title: "Polimento técnico",
        description: "Polimento técnico em superfícies com pintura poliéster e poliuretano, com métodos controlados para remoção de arranhões e marcas sem agressividade ao revestimento. O processo considera espessura, dureza, nível de brilho e padrão de acabamento, incluindo tratamentos em repinturas e etapas de lixamento quando necessárias, para restabelecer a estética da aeronave.",
        duration: "16h",
        price: "$15000",
        icon: <CarTaxiFront />,
        linkText: "Olá vi no site sobre Polimento técnico",
        image: proceduralpolish
    },
    {
        title: "Polimento de Para-brisa em Plexiglass",
        description: "Procedimento técnico de polimento em superfícies de Plexiglass para remoção de marcas leves, recuperação da transparência e melhoria da visibilidade, preservando as características originais do material e o padrão óptico da aeronave.",
        duration: "16h",
        price: "$15000",
        icon: <CarTaxiFront />,
        linkText: "Olá vi no site sobre Polimento técnico",
        image: plexiglass
    },

]

export function Services() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 3 }
        }
    })

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-white py-12 font-custom">
            <div className="container mx-auto px-4">

                <h2 className="text-4xl font-bold mb-12">SERVIÇOS</h2>

                <div className="relative">
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {services.map((item, index) => (
                                <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] relative px-3'>
                                    <div className=''>
                                        <Image src={item.image} alt={item.title} quality={100} className='object-cover absolute bottom-0 left-0 rounded-4xl px-3' />
                                    </div>
                                    <article className='bg-background/30 bg-linear-to-t from-black from-10% via-transparent via-50% to-red-700 to-130% text-white aspect-square p-6 space-y-4 h-full relative flex flex-col rounded-3xl'>
                                        <div className='flex-1 flex items-start justify-between relative'>
                                            <div className='flex gap-3'>
                                                <span className='text-3xl'>{item.icon}</span>
                                                <div>
                                                    <h3 className='font-bold text-xl my-1'>{item.title}</h3>
                                                    <p className='text-gray-100 text-sm'>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='border-t border-gray-100 pt-4 flex items-center justify-between'>
                                                <div className='flex items-center gap-2 text-sm'>
                                                    <Clock className='w-5 h-5' />
                                                    <span>{item.duration}</span>
                                                </div>

                                                <a href="#" className='flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300'>
                                                    <WhatsappLogo className='w-5 h-5' />
                                                    Entrar em contato
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className=' bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10' onClick={scrollPrev}>
                        <ChevronLeft className='w-6 h-6 text-gray-600' />
                    </button>

                    <button className=' bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10' onClick={scrollNext}>
                        <ChevronRight className='w-6 h-6 text-gray-600' />
                    </button>

                </div>

            </div>
        </section>
    )
}