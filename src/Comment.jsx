export default function Comment ({comments}){
      const {id, name, email}= comments;
      return(
            <div className="box">
                  <h3>Id: {id}</h3>
                  <p>Name: {name}</p>
                  <p>Email: {email}</p>
            </div>
      )
}