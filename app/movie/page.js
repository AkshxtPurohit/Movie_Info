"use client"
import axios from '@/util/axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const page = () => {
    const router=useRouter();
    const [movie, setmovie] = useState([])
  const get= async()=>{
    const movies= await axios.get('/trending/movie/day?api_key=0347902185e63b0e511c457b87748526');
    setmovie(movies.data.results);
    console.log(movies.data.results);
  }
  const getmovie=(id)=>{
    router.push(`/movie/${id}`);
  }
  useEffect(() => {
    get();
  }, [])
  
  return (
        <div >
        <h1>Treding Movies</h1>
        {movie.length===0 ? "none":
        movie.map((m)=>(  
          <div onClick={()=> getmovie(m.id)} key={m.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} />
            <h1>{m.title}</h1>
          </div>
      ))}
      </div>
  )
}

export default page