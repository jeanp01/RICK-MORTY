import axios from "axios"
import { useEffect, useState } from "react"

const Resident = ({residentUrl}) => {
    const [residentInfo, setResidentInfo] = useState(null)

    const statusStyles = {
        "Alive": "bg-green-500",
        "Dead": "bg-red-500",
        "unknown": "bg-gray-400"
    }



    useEffect(() =>{
        axios.get(residentUrl)
        .then(({data}) => setResidentInfo(data))
        .catch((err) => console.log(err))
    }, [])





    return (
        <div className="border border-9 border-green-600">
        <article className="">
            <div className="relative">
                <img src={residentInfo?.image} />
                <div className="p-2 bg-black bg-opacity-70  border border-14 shadow-lg border-green-600 flex items-center gap-2 absolute bottom-3 left-[50%] -translate-x-[50%]">
                    <div className={`h-3 aspect-square ${statusStyles[residentInfo?.status]} rounded-full`}></div>
                    {residentInfo?.status}
                </div>
            </div>
            <section className="">
                <h4 className=" p-2 px-4 text-xl  text-white font-bold">{residentInfo?.name}</h4>
                <ul>
                    <li className=" italic p-1 py-2 px-4 ">
                        Species : <span className="py-4 px-4 text-lg text-white font-bold">{residentInfo?.species}</span>
                    </li>
                    <li className="italic p-1 py-2 px-4">Origin : <span className="py-4 px-4 text-lg text-white font-bold">{residentInfo?.origin.name}</span>
                    </li>
                    <li className="italic p-1 py-2 px-4">Times appear : <span className="py-4 px-4 text-lg text-white font-bold">{residentInfo?.episode.length}</span>
                    </li>
                </ul>
            </section>
        </article>
        </div>
    )
}

export default Resident