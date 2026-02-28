import Marquee from 'react-fast-marquee'

import airbus from '../../../public/airbus.svg'
import leonardo from '../../../public/leonardo.svg'
import robinson from '../../../public/robinson.svg'
import cirrus from '../../../public/cirrus.svg'
import embraer from '../../../public/embraer.svg'
import bell from '../../../public/bell.svg'
import cessna from '../../../public/cessna.svg'
import bombardier from '../../../public/bombardier.svg'
import beechcraft from '../../../public/beechcraft.svg'
import dassault from '../../../public/dassault.svg'
import gulfstream from '../../../public/gulfstream.svg'
import Image from 'next/image'
import { FacebookLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr'


export function Footer() {
    return (
        <section className='bg-red-800 font-custom text-white py-6'>
            <h1 className='font-bold text-3xl pb-6 px-4'>Marcas que trabalhamos</h1>
            <div className=''>
                <Marquee speed={150} delay={0} className='py-6 mask-alpha mask-r-from-black mask-r-from-70% mask-r-to-transparent'>
                    <Image src={airbus} alt='airbuslogo' className='w-32 mx-12' />
                    <Image src={cessna} alt='cessnalogo' className='w-20 mx-12' />
                    <Image src={leonardo} alt='leonardologo' className='w-42 mx-12' />
                    <Image src={robinson} alt='robinsonlogo' className='w-34 mx-12' />
                    <Image src={bombardier} alt='bombardierlogo' className='w-34 mx-12' />
                    <Image src={cirrus} alt='cirruslogo' className='w-36 mx-12' />
                    <Image src={embraer} alt='embraerlogo' className='w-42 mx-12' />
                    <Image src={bell} alt='belllogo' className='w-16 mx-12' />
                    <Image src={beechcraft} alt='beechcraftlogo' className='w-36 mx-9' />
                    <Image src={dassault} alt='dassaultlogo' className='w-36 mx-12' />
                    <Image src={gulfstream} alt='gulfstreamlogo' className='w-36 mx-12' />
                </Marquee>

                <div>
                    <footer className='bg-red-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-9 px-4'>
                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>AERO-SERVICE AND DETAILING</h3>
                            <p className='mb-4'>Cuidando da sua Aeronave com amor e dedicação.</p>
                            <a href="#" className='bg-green-500 px-4 py-1 rounded-md'>
                                Contato via Whatsapp
                            </a>
                        </div>

                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
                            <p>Cuidando da sua Aeronave com amor e dedicação.</p>
                            <p>Telefone: (XX) 3197363-9785</p>
                            <p>Rua X, Centro, Campo Grande - MS</p>
                        </div>

                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>Redes Sociais</h3>
                            <div className='flex gap-4'>
                                <a href="#" target='_blank'><FacebookLogo className='w-8 h-8' /></a>
                                <a href="#" target='_blank'><InstagramLogo className='w-8 h-8' /></a>
                                <a href="#" target='_blank'><YoutubeLogo className='w-8 h-8' /></a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </section>
    )
}