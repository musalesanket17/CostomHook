import axios from "axios"
import { useState } from "react"
import { StringLiteralLike } from "typescript"


export const GitHub=()=>{
     type User={
        login:string;
        id:number
     }
 const[text,setText] = useState("")
 const url ="https://api.github.com/search/users"
 const [data,setData] = useState<User[]>([])
  const handleSerch=()=>{
     
     axios({
        method:"GET",
        url:url,
        params:{
          per_page:5,
          q:text
        }
     }).then((res)=>setData(res.data.items))
 }
  
//   console.log(data)
    return(
        <>
         <input value={text} placeholder="Enter Your Repo Name" onChange={(e)=>setText(e.target.value)} />
         <button onClick={handleSerch}>search</button>
         {data.map((el)=>
            <h1 key={el.id}>{el.login}</h1> 
         )}
        </>
    )
         }