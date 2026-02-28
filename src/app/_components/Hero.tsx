import herophoto from '../../../public/herophoto.jpg'
import hexagonwhiteasset from '../../../public/hexagonwhiteasset.png'
import Image from 'next/image'

export function Hero() {
    return (

        <section className="text-white overflow-hidden font-custom-extended h-screen">

            <div>
                <Image src={herophoto} alt='foto jato' fill sizes='100vh' className='object-cover' quality={100} priority />
            </div>


            {/* <div className='absolute flex'>
                <div className='w-52 translate-y-111 translate-x-0'>
                    <Image src={hexagonwhiteasset} alt='hexagon layout' quality={100} className='object-fill' data-aos="fade-up" />
                </div>
                <div className='w-52 -translate-x-17 translate-y-90'>
                    <Image src={hexagonwhiteasset} alt='hexagon layout' quality={100} className='object-fill' data-aos="fade-down" />
                </div>
                <div className='w-52 -translate-x-56 translate-y-119' >
                    <Image src={hexagonwhiteasset} alt='hexagon layout' quality={100} className='object-fill' data-aos="fade-left" />
                </div>
            </div> */}

            <div className='flex flex-col relative justify-between h-screen bg-linear-to-tr from-red-950 via-transparent via-50% to-red-700 to-160%'>

                <h1 className="pt-26 px-4 text-2xl md:text-4xl lg:text-5xl font-bold uppercase" data-aos="fade-down">1º Empresa homologada em serviço especializado de estética aeronáutica</h1>
                {/* <p className="lg:text-md tracking-[.05em]" data-aos="fade-right">A primeira empresa especializada em estética aeronaútica homologada para executar serviços de limpeza e conservação de aeronaves, atendendo em todo território nacional e internacional, conforme orientação dos manuais de fabricantes e regulamentações da ANAC.</p> */}

                {/* <a href="#" className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2">
                            <WhatsappLogo className='w-5 h-5' />
                            Contato via whatsapp
                        </a> */}


                <div className="pb-9 px-4">
                    <p className="text-sm">
                        <b className="bg-linear-to-tr from bg-red-950 to-black text-white px-3 py-3 rounded-md">15</b>
                        <strong> ANOS DE MERCADO</strong>
                    </p>
                </div>
            </div>

            {/* <div className='relative z-0 translate-x-0 translate-y-0'>
                        <Image src={h130sp} alt='foto jato' className='object-contain' quality={100} priority data-aos="fade-left" />
                    </div> */}

            {/* <div className='flex mt-4'>
                    <div className='w-52 hidden lg:block -translate-y-8 -translate-x-3' >
                        <Image src={hexagonwhiteasset} alt='hexagon layout' quality={100} className='object-fill' data-aos="fade-right" />
                    </div>
                    <div className='w-52 hidden lg:block relative -translate-x-20 -translate-y-29'>
                        <Image src={hexagonwhiteasset} alt='hexagon layout' quality={100} className='object-fill' data-aos="fade-down" />
                    </div>
                    <div className='w-52 hidden lg:block -translate-x-59' >
                        <Image src={hexagonwhiteasset} alt='hexagon layout' quality={100} className='object-fill' data-aos="fade-left" />
                    </div>
                </div> */}

        </section>
    )
}