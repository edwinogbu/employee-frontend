import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function StudentTable() {
  const [students, setStudents] = useState([]);
  const [filterValue, setFilterValue] = useState('');

  const { id } = useParams();

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const resp = await axios.get('http://localhost:8080/api/students/view');
      setStudents(resp.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/students/delete/${id}`);
      loadStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  // Filter students based on email or matricNumber
  const filteredStudents = students.filter(
    (student) =>
      (student.name && student.name.toLowerCase().includes(filterValue.toLowerCase())) ||
      (student.matricNumber && student.matricNumber.toLowerCase().includes(filterValue.toLowerCase()))
  );

  return (
    <div className="container">
      <div className="card shadow mt-5">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h6 className="m-0 font-weight-bold text-primary">Students </h6>
          <Link to="/add-student" className="btn btn-primary">Add Student</Link>
        </div>
        <div className="card-body">
 

          <div className="card-header d-flex justify-content-between align-items-center">
          <h6 className="m-0 font-weight-bold text-primary">Students Records</h6>

          <div className="mb-3 col-sm-6">
            <label className="form-label text-primary font-weight-bold">Filter by Email or Matric Number:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email or Matric Number"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
            />
            </div>
        </div>

          {filteredStudents.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-bordered table-striped" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                  <tr>
                    <th>SN</th>
                    <th>Full Name</th>
                    <th>Matric Number</th>
                    <th>Department</th>
                    <th>Faculty</th>
                    <th>Entry Year</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <Link to={`/view-student/${student.id}`} className="text-primary">
                          {student.fullName}
                        </Link>
                      </td>
                      <td>{student.matricNumber}</td>
                      <td>{student.department}</td>
                      <td>{student.faculty}</td>
                      <td>{student.entryYear}</td>
                      <td>
                        <Link to={`/edit-student/${student.id}`} className="btn btn-outline-primary btn-sm">
                          Edit
                        </Link>
                        <button onClick={() => deleteStudent(student.id)} className="btn btn-danger btn-sm ml-2">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center">No such data found</div>
          )}
        </div>
      </div>
    </div>
  );
}


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link, useParams } from 'react-router-dom';

// export default function StudentTable() {
//   const [students, setStudents] = useState([]);
//   const [filterValue, setFilterValue] = useState('');

//   const { id } = useParams();

//   useEffect(() => {
//     loadStudents();
//   }, []);

//   const loadStudents = async () => {
//     const resp = await axios.get('http://localhost:8080/api/students/view');
//     setStudents(resp.data);
//   };

//   const deleteStudent = async (id) => {
//     await axios.delete(`http://localhost:8080/students/delete/${id}`);
//     loadStudents();
//   };

//   // Filter students based on email or matricNumber
//   const filteredStudents = students.filter(
//     (student) =>
//       (student.email && student.email.toLowerCase().includes(filterValue.toLowerCase())) ||
//       (student.matricNumber && student.matricNumber.toLowerCase().includes(filterValue.toLowerCase()))
//   );

//   return (
//     <>
//       <div className="container-fluid">
//         <div className="card shadow mb-4">
//           <div className="card-header py-3 d-flex justify-content-between">
//             <div className="mx-5 py-3">
//               <h6 className="m-0 font-weight-bold text-primary">Students DataTables</h6>
//             </div>

//             <div className="mx-5 py-3">
//               <Link to={`/add-students`} type="text" className="btn btn-primary mx-2">
//                 Add student
//               </Link>
//             </div>
//           </div>
//           <div className="card-body">
//             <div className="d-flex justify-content-end mb-3 col-sm-6">
//               <label className="form-label">Filter by Email or Matric Number:</label>
//               <input
//                 type="text"
//                 className="form-control text-end"
//                 placeholder="Enter Email or Matric Number"
//                 value={filterValue}
//                 onChange={(e) => setFilterValue(e.target.value)}
//               />
//             </div>

//             <div className="table-responsive">
//               {filteredStudents.length > 0 ? (
//                 <table className="table table-bordered table-striped" id="dataTable" width="100%" cellSpacing={0}>
//                   <thead>
//                     <tr>
//                       <th>SN</th>
//                       <th>Full Name</th>
//                       {/* Add more table headers here */}
//                       <th>Matric Number</th>
//                       <th>Department</th>
//                       <th>Faculty</th>
//                       <th>Entry Year</th>
//                       <th>Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {filteredStudents.map((student, index) => (
//                       <tr key={index}>
//                         <td>{index + 1}</td>
//                         <td>
//                           <Link to={`/view-student/${student.id}`} type="text" className="text-primary mx-2">
//                             {student.fullName}
//                           </Link>
//                         </td>
//                         {/* Add more table cells here */}
//                         <td>{student.matricNumber}</td>
//                         <td>{student.department}</td>
//                         <td>{student.faculty}</td>
//                         <td>{student.entryYear}</td>
//                         <td>
//                           <Link to={`/edit-student/${student.id}`} type="button" className="btn btn-outline-primary mx-2">
//                             Edit
//                           </Link>
//                           <button onClick={() => deleteStudent(student.id)} type="button" className="btn btn-danger mx-2">
//                             Delete
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               ) : (
//                 <div className="text-center">No such data found</div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link, useParams } from 'react-router-dom';

// export default function StudentTable() {
//   const [students, setStudents] = useState([]);
//   const [filteredStudents, setFilteredStudents] = useState([]);
//   const [filterValue, setFilterValue] = useState('');

//   const { id } = useParams();

//   useEffect(() => {
//     loadStudents();
//   }, []);

//   const loadStudents = async () => {
//     const resp = await axios.get('http://localhost:8080/api/students/view');
//     setStudents(resp.data);
//     setFilteredStudents(resp.data); // Initialize filtered students with all students
//   };

//   const deleteStudent = async (id) => {
//     await axios.delete(`http://localhost:8080/students/delete/${id}`);
//     loadStudents();
//   };

//   // Filter students based on email or matricNumber
//  // Filter students based on email or matricNumber
// const filterStudents = () => {
//     if (students) {
//       const filtered = students.filter(
//         (student) =>
//           (student.email && student.email.toLowerCase().includes(filterValue.toLowerCase())) ||
//           (student.matricNumber && student.matricNumber.toLowerCase().includes(filterValue.toLowerCase()))
//       );
//       setFilteredStudents(filtered);
//     }
//   };
  

//   return (
//     <>
//       <div className="container-fluid">
//         <div className="card shadow mb-4">
//           <div className="card-header py-3 d-flex justify-content-between">
//             <div className="mx-5 py-3">
//               <h6 className="m-0 font-weight-bold text-primary">Students DataTables</h6>
//             </div>

//             <div className="mx-5 py-3">
//               <Link to={`/add-students`} type="text" className="btn btn-primary mx-2">
//                 Add student
//               </Link>
//             </div>
//           </div>
//           <div className="card-body">
//             <div className="mb-3">
//               <label className="form-label">Filter by Email or Matric Number:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter Email or Matric Number"
//                 value={filterValue}
//                 onChange={(e) => setFilterValue(e.target.value)}
//               />
//             </div>
//             <button className="btn btn-primary" onClick={filterStudents}>
//               Apply Filter
//             </button>
//             <button className="btn btn-secondary mx-2" onClick={loadStudents}>
//               Clear Filter
//             </button>
//             <div className="table-responsive">
//               <table className="table table-bordered table-striped" id="dataTable" width="100%" cellSpacing={0}>
//                 <thead>
//                   <tr>
//                     <th>SN</th>
//                     <th>Full Name</th>
//                     <th>Department</th>
//                     <th>Faculty</th>
//                     <th>Entry Year</th>
//                     <th>Matric Number</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredStudents.map((student, index) => (
//                     <tr key={index}>
//                       <th scope="row">{index + 1}</th>
//                       <td>
//                         <Link to={`/view-student/${student.id}`} className="text-primary mx-2">
//                           {student.fullName}
//                         </Link>
//                       </td>
//                       <td>{student.department}</td>
//                       <td>{student.faculty}</td>
//                       <td>{student.entryYear}</td>
//                       <td>{student.matricNumber}</td>
//                       <td>
//                         <Link to={`/edit-student/${student.id}`} className="btn btn-outline-primary mx-2">
//                           Edit
//                         </Link>
//                         <button onClick={() => deleteStudent(student.id)} className="btn btn-danger mx-2">
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Link, useParams } from 'react-router-dom';


// export default function StudentTable() {
//     const [students , setStudents] = useState([])
//   const {id} = useParams();
 
//   useEffect(()=>{
//     loadStudents();
//   }, [])
//   const loadStudents = async () =>{
//      const resp = await axios.get("http://localhost:8080/api/students/view")
//      setStudents(resp.data);
//   }


//   const deleteStudents = async (id) =>{
//     await axios.delete(`http://localhost:8080/students/delete/${id}`);
//     loadStudents()
//   } 
//   return (
//         <>
    
//            <div className="container-fluid">
//             <div className="card shadow mb-4">
//               <div className="card-header py-3 d-flex justify-content-between">
//               <div className="mx-5 py-3">
//                 <h6 className="m-0 font-weight-bold text-primary">students DataTables </h6>
//               </div>
                
//               <div className="mx-5 py-3">
//                   <Link to={`/add-students`} type="text" className="btn btn-primary mx-2">
//                     Add student
//                   </Link>
//               </div>
                
                        
//               </div>
//               <div className="card-body">
//                 <div className="table-responsive">
//                   <table className="table table-bordered table-striped" id="dataTable" width="100%" cellSpacing={0}>
//                     <thead>
//                     <tr>
//                         <th>SN</th>
//                         <th>Full Name</th>                      
//                         {/* <th> dateOfBirth </th>  */}
//                         <th> department </th> 
//                         <th> faculty </th> 
//                         <th> entryYear </th> 
//                         {/* <th> graduationYear </th>  */}
//                         {/* <th> registrationNumber </th>  */}
//                         <th> matricNumber </th> 
                      
//                         <th>Action</th>
//                       </tr>
//                     </thead>
//                     <tfoot>
//                       <tr>
//                         <th>SN</th>
//                         <th>Full Name</th>                      
//                         {/* <th> dateOfBirth </th>  */}
//                         <th> department </th> 
//                         <th> faculty </th> 
//                         <th> entryYear </th> 
//                         {/* <th> graduationYear </th>  */}
//                         {/* <th> registrationNumber </th>  */}
//                         <th> matricNumber </th> 

//                         <th>Action</th>
//                       </tr>
//                     </tfoot>
//                     <tbody>
//                     {students.map((student, index) => (
//                       <tr 
//                       // className={index % 2 === 0 ? 
//                       // 'table-primary' : 'table-secondary'
//                       // }
//                       key={index}>
//                         <th scope="row">{index + 1}</th>
//                         <td>
//                           <Link to={`/view-student/${student.id}`} type="text" className="text-primary mx-2">
//                             {student.fullName}
//                           </Link>
//                         </td>
//                         {/* <td> { student.dateOfBirth } </td>  */}
//                         <td> { student.department } </td> 
//                         <td> { student.faculty } </td> 
//                         <td> { student.entryYear } </td> 
//                         {/* <td> { student.graduationYear } </td>  */}
//                         {/* <td> { student.registrationNumber } </td>  */}
//                         <td> { student.matricNumber } </td> 
                        
//                         <td>
                          
//                           <Link to={`/edit-student/${student.id}`} type="button" className="btn  btn-outline-primary mx-2">Edit</Link>
//                           <button onClick={()=>deleteStudents(student.id)} type="button" className="btn btn-danger mx-2">Delete</button>
//                         </td>
//                       </tr>
//                     ))}
                    
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
     
//         </>
//   )
// }
