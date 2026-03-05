import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

export default function Whatsapp() {
    return (

        <div className="">
            <a href="https://wa.me/5531973639785?text=Ol%C3%A1%2C%20venho%20do%20site%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os..." target="_blank" className="fixed right-5 bottom-5 z-50 flex h-18 w-18 justify-center items-center rounded-3xl bg-background/20 backdrop-blur-lg">
                <WhatsappLogo className='w-10 h-10 text-white' />
                <div className="h-18 w-18 absolute rounded-3xl shadow-md shadow-green-500/50 animate-pulse"></div>
            </a>
        </div>
    )
}