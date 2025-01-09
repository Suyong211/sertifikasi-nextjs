import Image from "next/image";

export default function Introduction(){
    return (

        <>
        <div className="w-screen h-[500px] bg-slate-800 p-8">
            <div className="flex justify-between items-center">
                <div>

                    <div>
                        <p className="text-[#E1FFBB] text-2xl font-bold">Komputer Akuntansi</p>
                        <h2 className="text-7xl text-[#E1FFBB]">Hello, I&apos;m </h2>
                        <h2 className="text-7xl text-[#A6AEBF]">Suyanto</h2>
                    </div>

                    <div className="my-8">
                        <p className="text-[#E1FFBB] max-w-lg">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur iste natus eveniet repudiandae quos impedit doloribus laboriosam neque illo id minima molestiae nam, porro at qui! Ex suscipit repellat rem!
                        </p>
                    </div>

                </div>
                <div>
                    {/* Image */}
                    <div className="relative w-96 h-96">
                        <Image src={"/img/Foto_Suyanto.jpeg"} alt="Suyanto" fill={true} priority={true} className="rounded-3xl object-cover"/> 
                    </div>
                </div>
      
            </div>
        </div>
        </>
    )
}