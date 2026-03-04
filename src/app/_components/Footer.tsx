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
        <section className='bg-red-800 font-custom text-white'>
            <h1 className='font-semibold text-3xl p-4 pt-9'>Marcas que trabalhamos</h1>
            <div className=''>
                <Marquee speed={150} delay={0} className='py-9 mask-alpha mask-r-from-black mask-r-from-70% mask-r-to-transparent'>
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
                    <footer className='bg-red-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-9 px-4'>
                        <div>
                            <h3 className='text-2xl font-semibold mb-2 font-custom-extended'>AERO-SERVICE AND DETAILING</h3>
                            <p className='mb-4 font-light'>Cuidando da sua Aeronave com amor e dedicação.</p>
                            <a href="#" className='bg-green-500 px-4 py-1 rounded-md'>
                                Contato via Whatsapp
                            </a>
                        </div>

                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
                            <p className='font-light'>Telefone: (31) 3197363-9785</p>
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
            <div className='bg-black p-4'>
                <h3 className='font-light text-sm text-center'>Aeropolimento © 2026. Todos os direitos reservados.</h3>
            </div>
        </section>
    )
}