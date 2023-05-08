import React, { useEffect, useState } from 'react'
import axios from 'axios';

const FetchUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=> setUsers(response.data))
        .catch(error => console.log(error));
    }, [])
return (
    <div>
        
        <table>
            <thead>
            <th>ID</th>
            <th>NAME</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>ADDRESS</th>
            <th>PHONE</th>
            <th>WEBSITE</th>
            <th>COMPANY</th>
            </thead>
            <tbody>
                
                    {
                    users.map((user, index)=>(
                    <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}, {user.address.geo.lat}, {user.address.geo.lng}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>{user.company.name}, {user.company.catchPhrase}, {user.company.bs} </td>
                    </tr>
                    ))
                    }
                
            </tbody>
        </table>
    </div>
  )
}

export default FetchUsers