import Image from "next/image";
import logoproducts from "../../../public/logoproducts.svg"
import ap001 from "../../../public/ap001.png"
import ap0010 from "../../../public/ap0010.png"
import ap0020 from "../../../public/ap0020.png"

export default function Products() {
    return (

        <section className="bg-white">
            <div className="bg-linear-to-tr from-red-200 via-white via-50% to-red-100 to-160% p-6 font-custom">
                <div className="text-4xl font-bold pb-6">
                    <h1>PRODUTOS</h1>
                </div>
                <div className="flex flex-col justify-center items-center pb-9">
                    <Image src={logoproducts} alt="logo produtos" className="w-72" />
                    <p className="font-light text-[0.7rem] tracking-[.2rem]">PERFORMANCE CLEANERS</p>
                </div>
                <div className="flex flex-col gap-9">
                    <div className="flex flex-col justify-center items-center gap-6">
                        <h3>APC</h3>
                        <Image src={ap001} alt="ap001" className="w-28" />
                        <p className="font-light text-center text-[0.7rem]">Limpador versátil que pode ser usado em diferentes superfícies, tanto no interior quanto exterior, formulado para remover sujeiras e outros contaminantes de maneira eficiente, sem danificar as aréas sensíveis das aeronaves.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-6">
                        <h3>CERA LÍQUIDA</h3>
                        <Image src={ap0010} alt="ap0010" className="w-36" />
                        <p className="font-light text-center text-[0.7rem]">Limpador versátil que pode ser usado em diferentes superfícies, tanto no interior quanto exterior, formulado para remover sujeiras e outros contaminantes de maneira eficiente, sem danificar as aréas sensíveis das aeronaves.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-6">
                        <h3>MASSA DE POLIR</h3>
                        <Image src={ap0020} alt="ap0020" className="w-36" />
                        <p className="font-light text-center text-[0.7rem]">Limpador versátil que pode ser usado em diferentes superfícies, tanto no interior quanto exterior, formulado para remover sujeiras e outros contaminantes de maneira eficiente, sem danificar as aréas sensíveis das aeronaves.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}