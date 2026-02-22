import { useEffect, useState } from "react"
import Comment from "./Comment"
export default function Comments(){
      const [comment, setComment] = useState([])
      useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setComment(data))
      },[])
      return(
            <div className="box2">
                  <h3>First Comments: {comment.length}</h3>
                  {
                        comment.map(comments=> <Comment comments={comments}></Comment>)
                  }
            </div>
      )
}