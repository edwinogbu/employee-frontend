 
 import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

// // Import Bootstrap 5 CSS (make sure to include it in your project)
import 'bootstrap/dist/css/bootstrap.min.css';

// // Import Bootstrap Datepicker styles
// import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';

export default function EditStudent() {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    fullName: '',
    dateOfBirth: '',
    department: '',
    faculty: '',
    entryYear: '',
    graduationYear: '',
    registrationNumber: '',
    matricNumber: '',
  });

  const {
    fullName,
    dateOfBirth,
    department,
    faculty,
    entryYear,
    graduationYear,
    registrationNumber,
    matricNumber,
  } = student;

//   useEffect(() => {
    // Initialize Bootstrap Datepicker for year picker
    // $('[data-toggle="datepicker"]').datepicker({
    //   format: 'yyyy',
    //   startView: 'years',
    //   minViewMode: 'years',
    //   autoclose: true,
    //   orientation: 'bottom',
    // });

    // // Initialize Bootstrap Datepicker for date picker
    // $('#dateOfBirth').datepicker({
    //   format: 'yyyy-mm-dd',
    //   autoclose: true,
    // });

    // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

const {id} = useParams();


  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8080/api/students/update/${id}`, student);
      navigate('/students');
    } catch (error) {
      console.error('Error:', error);
    }
  };



 

  const loadStudents = useCallback( async () =>{
     const resp = await axios.get(`http://localhost:8080/api/students/view/${id}`)
      setStudent(resp.data);
  }, [id])

  useEffect(() => {
    loadStudents();
  }, [loadStudents]);


 


  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Edit Students</h2>
              <form onSubmit={(e)=>{ onSubmit(e) }}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Full Name"
                    name="fullName"
                    value={fullName}
                    onChange={onInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Date of Birth</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        data-toggle="datepicker"
                      >
                        Select Year
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Select Date"
                      name="dateOfBirth"
                      id="dateOfBirth"
                      value={dateOfBirth}
                      onChange={onInputChange}
                      data-date-format="yyyy-mm-dd"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Department</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Department"
                    name="department"
                    value={department}
                    onChange={onInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Faculty</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Faculty"
                    name="faculty"
                    value={faculty}
                    onChange={onInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Entry Year</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Entry Year"
                    name="entryYear"
                    value={entryYear}
                    onChange={onInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Graduation Year</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Graduation Year"
                    name="graduationYear"
                    value={graduationYear}
                    onChange={onInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Registration Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Registration Number"
                    name="registrationNumber"
                    value={registrationNumber}
                    onChange={onInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Matric Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Matric Number"
                    name="matricNumber"
                    value={matricNumber}
                    onChange={onInputChange}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-outline-primary btn-lg mx-5">
                    Save
                  </button>
                  <Link to="/" className="btn btn-outline-danger btn-lg mx-5">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
