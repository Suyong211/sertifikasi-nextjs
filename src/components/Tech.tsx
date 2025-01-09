import TechCard from "./TechCard";

export default function Tech(){
    return (
        <>
        <div className="bg-slate-800 w-screen min-h[300px] p-8">
            <h1 className="text-4xl text-[#E1FFBB] font-bold mb-4">Techs</h1>
            <div className="w-32 border-2 mb-8" />
            <div className="flex justify-center items-center w-full">
                
                {/* Daftar Tech Card */}
            <TechCard imageURL="/img/c++.png" techStack="C++" />
            <TechCard imageURL="/img/Javascript.png" techStack="Javascript" />
            <TechCard imageURL="/img/Java.png" techStack="Java" />
            </div>
        </div>
        
        </>
    )
}