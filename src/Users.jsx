import { useEffect, useState } from "react"

export default function Users() {
      const [users, setUsers] = useState([]);
      useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                  .then(res => res.json())
                  .then(data => setUsers(data))
      }, [])

      return (
            <div>
                  <h4>Users: {users.length}</h4>
            </div>
      )
}

//no1 : declare a state to hold the data
//no2 : useEffect with callBack and dependencies array
//no3 : use fetch to  load data