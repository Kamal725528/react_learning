import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

 export default function Github(){
   
    const data = useLoaderData();

    // const [data, setData]= useState([]);
    
    // useEffect(()=>{
    //  fetch('https://api.github.com/users/Kamal725528')
    // .then(response=>response.json())
    // .then(data=>setData(data))
    // },[]);                        // use loader one

    return(
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Repos: {data.public_repos}
        <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

// or use Loader() to enhance Ux by fast loading

 export const githubInfoLoader= async ()=>{

    const response= await fetch('https://api.github.com/users/Kamal725528')
    return  response.json();
}





