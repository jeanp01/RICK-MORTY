import axios from "axios"
import "./Location.css"
const Location = ({location, setLocation}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const newLocation = e.target.newLocation.value

        const URL = `https://rickandmortyapi.com/api/location/${newLocation}`
    
        axios.get(URL)
        .then(({data}) => setLocation(data))
        .catch((err) => console.log(err))
    }








    return (
        <section>
            <div className="">
                <img className="transform scale-130" src="/images/RICKMORTY.png" alt="" />
            </div>
            {/*input de busqueda*/}
            <form className="flex items-center justify-center p-4" onSubmit={handleSubmit}>
                <input className="focus:outline-none focus:bg-transparent px-3" id="newLocation" type="text" placeholder="Buscar en Mapa" />
                <button className="">Search <i className='px-3 bx bx-search-alt-2'></i></button>
            </form>
            {/*info location*/}
            <section className="info">
                <h2 className=" text-lg flex items-center justify-center font-bold uppercase text-green-600 p-4 ">{location?.name}</h2>
                <ul >
                    <li className=" flex items-center justify-center  text-green-600 p-2">Type: {location?.type}</li>
                    <li className="flex items-center justify-center text-green-600 p-2">Dimension: {location?.dimension}</li>
                    <li className="flex items-center justify-center text-green-600 p-2">Population: {location?.residents.length}</li>
                </ul>

            </section>
        </section>
    )
} 

export default Location