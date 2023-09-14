"use client"
import axios from '@/util/axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const page = () => {
    const router=useRouter();
    const [TvShow, setTvShow] = useState([])
  const get= async()=>{
    const TvShows= await axios.get('/trending/tv/day?api_key=0347902185e63b0e511c457b87748526');
    setTvShow(TvShows.data.results);
    console.log(TvShows.data.results);
  }
  const getTvShow=(id)=>{
    router.push(`/tvShow/${id}`);
  }
  useEffect(() => {
    get();
  }, [])
  
  return (
        <div >
        <h1>Treding Shows</h1>
        {TvShow.length===0 ? "none":
        TvShow.map((m)=>(  
          <div onClick={()=> getTvShow(m.id)} key={m.id} className='container d-flex align-items-center mt-3'>
            <img className='container-sm' src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} />
            <h1>{m.name}</h1>
          </div>
      ))}
      </div>
  )
}

export default page