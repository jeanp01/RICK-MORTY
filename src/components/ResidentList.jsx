import { useEffect, useState } from "react"
import Resident from "./Resident"
import { paginationLogic } from "../utils/pagination"
import "./Resident.css"
const firstPage = 1


const ResidentList = ({residents, location}) =>{
    const [currentPage, setCurrentPage] = useState(firstPage);

    const { pages, residentsInPage } = paginationLogic(currentPage, residents);

    useEffect(() =>{
        setCurrentPage(firstPage)
    }, [location])

    return (
        <section className=" container px-3 z-1  ">
        {/* lista de residentes */}
            <section className="grid gap-8 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1024px] mx-auto py-6">
                {residentsInPage?.map((resident) => (
                <Resident key={resident} residentUrl ={resident} />
                ))}
            </section>
           {/* paginacion */}
        
            <section className="flex justify-center gap-4 flex-wrap pb-8">
                {pages.map((page) => (
                <button
                        key={page} onClick={() => setCurrentPage(page)}
                        className={` p-2 px-3 rounded-md ${currentPage === page ? "bg-red-500" : "bg-green-700"}`}
                        >
                        {page}
                        </button>
                ))}
            </section>

        </section>
    );
};

export default ResidentList