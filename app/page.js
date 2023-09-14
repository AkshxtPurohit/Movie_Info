"use client"
import React, { useEffect, useState } from 'react'
import axios from '@/util/axios'
import { useRouter } from 'next/navigation'
// import * as icons from 'react-bootstrap-icons'
const page = () => {
  const [sear, setsear] = useState([]);
    const router=useRouter();
  const get=()=>{
    router.push("/movie");
  }
  const searchlist=async (s)=>{
    const res= await axios.get(`search/multi?query=${s}&api_key=0347902185e63b0e511c457b87748526`)
    console.log(res);
    setsear(res.data.results);
  }
  
  return (
    <div>
      <form>
        <input onChange={(e)=>searchlist(e.target.value)} type="search" placeholder='search'/>
      </form>
      <ul className="list-group">
      {  
      sear.map((s)=>( 
        <li className="list-group-item" key={s.id} onClick={router.push(`/search/${s.id}`)}>{s.name}</li>
      ))}
      </ul>

      <button onClick={get}>Trending Movies</button>
      <button onClick={()=>(router.push("/tvShow"))}>Trending Shows</button>
    </div>
  )
}

export default page