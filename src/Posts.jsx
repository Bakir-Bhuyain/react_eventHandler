import { useEffect, useState } from "react"

export default function Posts(){
      const [post, setPost]= useState([]);
      useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=> res.json())
            .then(data=> setPost(data))
      },[])
      return(
            <div>
                  <h4>Posts: {post.length}</h4>
            </div>
      )
}