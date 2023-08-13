
import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimension } from './utils/random'
import axios from 'axios'
import Location from './components/Location'
import ResidentList from './components/ResidentList'
import Loader from './components/Loader'

function App() {

  const [location, setLocation] = useState (null)
  const[Loading, setLoading] = useState(true)


  useEffect(() =>{
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`
    
    axios.get(URL)
    .then(({data}) =>{ 
                      setLocation(data);
                      setLoading(false)
    })
    .catch((err) => {console.log(err);
                    setLoading(false)
    });  
  }, [])


  return (
    <main className='bg-black min-h-screen text-white'>
      {Loading? (
        <div className='flex justify-center items-center h-screen'>
        <Loader />
      </div>
      )
      :(
      <>
      <Location location={location} setLocation={setLocation}/>
      <ResidentList location={location} residents={location?.residents} />
      </>
      )}
    </main>
  )
  }


export default App
