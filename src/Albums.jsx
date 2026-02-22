import { useEffect, useState } from "react"
import Album from "./Album";

export default function Albums(){
      const [album, setAlbum] = useState([]);
      useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(data=> setAlbum(data))
      },[])
      return(
            <div>
                  <h3>Album: {album.length}</h3>
                  
                  {
                        album.map(albums=> <Album album={albums}></Album>)
                  }
            </div>
      )
}