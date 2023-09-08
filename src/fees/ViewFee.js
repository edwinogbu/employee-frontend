import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ViewFee() {
  const navigate = useNavigate();
 const {id}=useParams();

  const [fee, setFee] = useState({
    name: '',
    amount: null, // Initialize amount as null (or any other appropriate default value)
    isChecked: false, // Initialize isChecked as false (or any other appropriate default value)
  });

  const { name, amount, isChecked } = fee;


  useEffect(()=>{
    loadFees();
  }, [])
  
  const loadFees = async () =>{
     const resp = await axios.get("http://localhost:8080/fees/view")
     setFee(resp.data);
  }




  function FeeDetailItem({ icon, label, value }) {
    return (
      <div className="list-group-item mb-5">
        <div className="d-flex justify-content-between">
          <div className="user-icon mx-2">
            <FontAwesomeIcon icon={icon} />
          </div>
          <div className="user-detail d-flex my-2">
            <div className="user-label mx-5">{label}:</div>
            <div className="user-value">{value}</div>
          </div>
        </div>
      </div>
    );
  }
  

  return (
    <div className="container mb-5">
      {/* Add a <style> tag with the CSS styles */}
      <style>{styles}</style>

      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">User Details</h2>
              <div className="list-group">
                <FeeDetailItem icon={faUser} label="Name" value={fee.name} />
                <FeeDetailItem icon={faUser} label="User Name" value={fee.amount} />
                <FeeDetailItem icon={faEnvelope} label="Email" value={fee.isChecked} />
              </div>
            </div>
            <div className="card-footer d-flex justify-content-center ">
             {/* <Link to={`/edit-user/${id}`} type="button" className="btn  btn-outline-primary mx-2">Edit</Link> */}

              <button
                className="btn btn-primary btn-edit mx-5"
                onClick={() => navigate(`/edit-fee/${id}`)}
              >
                Edit User
              </button>
              <button
                className="btn btn-danger mx-5 btn-back"
                onClick={() => navigate('/')}
              >
                Back to List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


  // Define the CSS styles within the template literal
  const styles = `
    .container {
      margin-top: 20px;
    }

    .card {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .card-body {
      padding: 20px;
    }

    .list-group-item {
      display: flex;
      justify-content: space-between;
    }

    .user-icon {
      margin-right: 10px;
    }

    .user-label {
      font-weight: bold;
    }

    .btn-edit {
      background-color: #007bff;
      color: #fff;
    }

    .btn-back {
      background-color: #dc3545;
      color: #fff;
    }
  `;
