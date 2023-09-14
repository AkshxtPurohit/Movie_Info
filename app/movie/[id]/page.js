"use client"
import axios from '@/util/axios'
import React, { useEffect, useState } from 'react'
// import { Loader } from '@/app/movie/loading'

const page = (props) => {
    // console.log(props);
    const [det, setdet] = useState([]);
    const [gen, setgen] = useState([]);
    const detail=async()=>{
      const d= await axios.get(`https://api.themoviedb.org/3/movie/${props.params.id}?api_key=0347902185e63b0e511c457b87748526`)
        // console.log(d.data);
        // d.data.genres.forEach((g)=>{
        //   console.log(g.name);})
        setdet(d.data);
        setgen(d.data.genres);
    }
    useEffect(() => {
      detail();
    }, [])
    
  return (
    <div className='container-fluid mt-3 '>
        <h1>{det.title} ({det.release_date})</h1>
        <h2>{det.tagline}</h2>
        <h2 className='fw-normal fs-5'><span className='fw-bold'>Overview:</span>{det.overview}</h2>

        <img className=' img-thumbnail rounded mx-auto' src={`https://image.tmdb.org/t/p/w500/${det.poster_path}`} />
        <h3 className='d-flex mt-3'>Genre: {gen.map((g)=>(<p className='me-3' key={g.id}>{g.name}</p>))}</h3>
    </div>
  )
}

export default page