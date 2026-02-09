import Image from 'next/image'
import logohero from '../../../public/logohero.svg'
import Link from 'next/link'

export default function Glassbar() {
    return (
        
            <nav className="fixed left-1/2 top-0 z-50 mt-5 flex h-18 w-16/17 max-w-7xl -translate-x-1/2 items-center justify-between rounded-2xl bg-background/20 backdrop-blur-lg">
                <div className="flex items-center gap-2 px-6">
                    <Link href="/">
                        <Image src={logohero} alt="logo" width={182} height={182}/>
                    </Link>
                </div>
            </nav>
    )
}