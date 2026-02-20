import airbus from '../../../public/airbus.png'
import leonardo from '../../../public/leonardo.png'
import robinson from '../../../public/robinson.png'
import cirrus from '../../../public/cirrus.png'
import embraer from '../../../public/embraer.png'
import bell from '../../../public/bell.svg'
import cessna from '../../../public/cessna.svg'
import bombardier from '../../../public/bombardier.svg'
import beechcraft from '../../../public/beechcraft.svg'
import dassault from '../../../public/dassault.svg'
import gulfstream from '../../../public/gulfstream.png'
import Image from 'next/image'
import { FacebookLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr'

const brands = [
    { name: "Airbus", logo: airbus },
    { name: "Leonardo", logo: leonardo },
    { name: "Robinson", logo: robinson },
    { name: "Cirrus", logo: cirrus },
    { name: "Embraer", logo: embraer },
    { name: "Beechcraft", logo: beechcraft },
    { name: "Bombardier", logo: bombardier },
    { name: "Gulfstream", logo: gulfstream },
    { name: "Dassault", logo: dassault },
    { name: "Bell", logo: bell },
    { name: "Cessna", logo: cessna },
]


export function Footer() {
    return (
        <section className='bg-red-950 py-16 text-white font-custom'>
            <div className='container mx-auto px-4'>

                <div className='border-b border-white/20 pb-8'>
                    <h4 className='text-3xl font-semibold mb-8 text-center'>Marcas que trabalhamos</h4>
                    <div className='grid grid-cols-2 lg:grid-cols-5 gap-8'>
                        {brands.map((item, index) => (
                            <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'>
                                <Image src={item.logo} alt={item.name} width={100} height={50} quality={100} style={{ width: "auto", height: "auto", }} className='object-contain' />
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
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