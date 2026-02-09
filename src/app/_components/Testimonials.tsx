"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'
import marco from '../../../public/marco.jpg'
import veras from '../../../public/veras.jpg'
import regis from '../../../public/regis.png'
import raul from '../../../public/raul.png'
import Image from 'next/image'


const testimonials = [
    {
        content: "“O serviço de limpeza e polimento superou todas as expectativas. A aeronave ficou com aspecto de nova, além de um cuidado impecável com cada detalhe. Profissionalismo do início ao fim.”",
        author: "Raul",
        role: "Aviation",
        image: raul
    },
    {
        content: "“Excelente qualidade e atenção aos detalhes. O polimento devolveu o brilho original da aeronave e a limpeza interna foi feita com extremo cuidado. Recomendo sem hesitar.”",
        author: "Marco Audi",
        role: "HBR",
        image: marco
    },
    {
        content: "“Equipe altamente qualificada e comprometida com o resultado. A aeronave ficou visualmente impecável, refletindo o alto padrão do serviço prestado.”",
        author: "Regis EMMCAMP",
        role: "EMMCAMP Construtora",
        image: regis
    },
    {
        content: "“Já utilizei outros serviços no mercado, mas este se destacou pela qualidade, pontualidade e acabamento final. O polimento realmente faz diferença.”",
        author: "Felipe Veras",
        role: "Líder Aviação",
        image: veras
    },
]

export function Testimonials() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
    })

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-gray-600 py-16 font-custom">
            <div className="container mx-auto px-4">

                <h2 className="text-4xl text-white font-bold mb-12">Depoimentos de nossos clientes</h2>

                <div className="relative max-w-4xl mx-auto">
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {testimonials.map((item, index) => (
                                <div key={index} className='flex-[0_0_100%] min-w-0 px-3'>
                                    <article className='bg-gray-800 text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                        <div className='flex flex-col items-center text-center space-y-4'>
                                            <div className='relative w-24 h-24'>
                                                <Image src={item.image} alt={item.author} fill sizes='96px' className='object-cover rounded-full' />
                                            </div>
                                            <p className='text-gray-200'>{item.content}</p>
                                            <div>
                                                <p className='font-bold'>{item.author}</p>
                                                <p className='text-sm text-gray-400'>{item.role}</p>
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