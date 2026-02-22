export default function Album({album}){
      const { userId , id, title}= album;
      return(
            <div className="box2">
                  <h2>UserId: {userId}</h2>
                  <h3>Id: {id}</h3>
                  <h4>Title: {title}</h4>
            </div>
      )
}