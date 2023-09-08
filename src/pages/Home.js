import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';



export default function Home(posts) {
const [users, setUsers] =useState([]);
const {id} =useParams();

useEffect(()=>{
    loadUsers();
},[]);

const loadUsers = async () =>{
      const result = await axios.get("http://localhost:8080/users");
      setUsers(result.data);
}

const deleteUser = async (id)=>{
     await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
}
  return (
    <div className='container'>
      <div className='py-4'>
      <table className="table table-striped">
    <thead className="table-dark bg-dark text-white">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">User Name</th>
        <th scope="col">Email</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) => (
        <tr 
        // className={index % 2 === 0 ? 
        // 'table-primary' : 'table-secondary'
        // }
         key={index}>
          <th scope="row">{index + 1}</th>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>
            <Link to={`/viewuser/${user.id}`} type="button" className="btn btn-primary mx-2">View</Link>
            <Link to={`/edituser/${user.id}`} type="button" className="btn btn-outline-primary mx-2">Edit</Link>
            <button onClick={()=>deleteUser(user.id)} type="button" className="btn btn-outline-danger mx-2">Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

      </div>
      
    </div>
  )
}
