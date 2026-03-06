"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ListTodo, Bubbles, BrushCleaning, ChevronLeft, ChevronRight, ShieldCheck, SquareRoundCorner, Sparkles } from 'lucide-react'
import checklist from '../../../public/checklist.jpg'
import paintcleaner from '../../../public/paintcleaner.jpg'
import insideclear from '../../../public/insideclear.jpg'
import insidecare from '../../../public/insidecare.jpg'
import proceduralpolish from '../../../public/proceduralpolish.jpg'
import plexiglass from '../../../public/plexiglass.jpg'
import logocard from '../../../public/logocard.svg'
import Image from 'next/image'


const services = [
    {
        title: "Check-list",
        description: "Procedimento de avaliação prévia da aeronave que gera um registro técnico antes do início dos serviços, garantindo segurança, conformidade e padrão de qualidade na execução.",
        icon: <ListTodo />,
        image: checklist
    },
    {
        title: "Descontaminação de Pintura",
        description: "Uma lavagem técnica da fuselagem removendo fuligens sujeiras ancoradas e contaminações. Esse procedimento é essencial para preservar a pintura da aeronave.",
        icon: <Bubbles />,
        image: paintcleaner
    },
    {
        title: "Higienização interna",
        description: "Higienização minuciosa de cockpit, galley, alojamento de galley, revestimentos em couro, cintos e tapetes, assegurando conservação e alto padrão estético da aeronave.",
        icon: <BrushCleaning />,
        image: insideclear
    },
    {
        title: "Impermeabilização interna",
        description: "Aplicação de tratamento de impermeabilização para couro, cintos e tapeçaria, formando uma barreira protetiva contra umidade, sujeira e desgaste prematuro, preservando a aparência e a durabilidade dos materiais da aeronave.",
        icon: <ShieldCheck />,
        image: insidecare
    },
    {
        title: "Polimento técnico",
        description: "O processo de polimento corretivo é fundamental para manter a aparência e integridade da pintura. Através de técnicas especializadas, é possível eliminar riscos e marcas superficiais, ao mesmo tempo em que se restaura o brilho e a uniformidade da pintura na superfície. ",
        icon: <Sparkles />,
        image: proceduralpolish
    },
    {
        title: "Polimento de Para-brisa em Plexiglass",
        description: "Procedimento técnico de polimento em superfícies de Plexiglass para remoção de marcas leves, recuperação da transparência e melhoria da visibilidade, preservando as características originais do material e o padrão óptico da aeronave.",
        icon: <SquareRoundCorner />,
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
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">

                <h2 className="text-3xl md:text-4xl lg:text-4xl font-custom-extended font-semibold mb-12" data-aos="fade-right">SERVIÇOS</h2>

                <div className="relative">
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex font-custom'>
                            {services.map((item, index) => (
                                <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] relative px-3'>
                                    <div className=''>
                                        <Image src={item.image} alt={item.title} quality={100} className='object-cover absolute bottom-0 left-0 px-3' />
                                    </div>
                                    <article className='bg-background/40 bg-linear-to-t from-black from-10% via-transparent via-50% to-red-700 to-130% text-white aspect-square p-4 space-y-4 h-full relative flex flex-col'>
                                        <div className='flex-1 flex items-start justify-between relative'>
                                            <div className='flex gap-3'>
                                                <span className='text-3xl pt-1'>{item.icon}</span>
                                                <div>
                                                    <h3 className='font-semibold text-xl my-1'>{item.title}</h3>
                                                    <p className='text-white text-sm'>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='border-t border-gray-100 pt-4 flex items-center justify-between'>
                                                <div className='flex items-center gap-2 text-sm'>
                                                    <Image src={logocard} className='w-9 h-9' alt='logocard' />
                                                </div>
                                                <a href="https://wa.me/5531973639785?text=Ol%C3%A1%2C%20venho%20do%20site%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os..." target='_blank' className='flex items-center justify-center text-sm border-red-950 border-2 gap-2 hover:bg-red-700 px-4 py-1 rounded-md duration-300'>
                                                    SAIBA MAIS
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