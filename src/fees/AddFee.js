import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function AddFee() {
  const navigate = useNavigate();

  const [fee, setFee] = useState({
    name: '',
    amount: null, // Initialize amount as null (or any other appropriate default value)
    isChecked: false, // Initialize isChecked as false (or any other appropriate default value)
  });

  const { name, amount, isChecked } = fee;

  const onInputChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFee({ ...fee, [e.target.name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/fees/create', fee);
    navigate('/');
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Add User</h2>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                      name="name"
                      value={name}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Amount</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Amount"
                      name="amount"
                      value={amount || ''}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Is Checked</label>
                  <div className="input-group">
                    <input
                      type="checkbox"
                      className="form-control form-check-input"
                      name="isChecked"
                      checked={isChecked}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-outline-primary btn-lg mx-5">Save</button>
                  <Link to="/" className="btn btn-outline-danger btn-lg mx-5">Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
