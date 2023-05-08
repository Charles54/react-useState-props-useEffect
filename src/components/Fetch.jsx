import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const [post, setPost] = useState([])
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(response => setPost(response))
        .catch(error => console.log(error))
    }, [])
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>BODY</th>
                </tr>
            </thead>
            <tbody>
            {
                post.map((p) => (
                <tr>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>{p.body}</td>
                </tr>
                ))
            }
            </tbody>
        </table>
















    </div>
  )
}

export default Fetch