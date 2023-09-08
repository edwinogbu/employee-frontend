import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ViewUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/user/${id}`);
      setUser(result.data);
    } catch (error) {
      console.error('Error loading user:', error);
    }
  };

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
                <UserDetailItem icon={faUser} label="Name" value={user.name} />
                <UserDetailItem icon={faUser} label="User Name" value={user.username} />
                <UserDetailItem icon={faEnvelope} label="Email" value={user.email} />
              </div>
            </div>
            <div className="card-footer d-flex justify-content-center ">
             {/* <Link to={`/edit-user/${id}`} type="button" className="btn  btn-outline-primary mx-2">Edit</Link> */}

              <button
                className="btn btn-primary btn-edit mx-5"
                onClick={() => navigate(`/edit-user/${id}`)}
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

function UserDetailItem({ icon, label, value }) {
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


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// export default function ViewUser() {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [user, setUser] = useState({
//     name: '',
//     username: '',
//     email: '',
//   });

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const loadUser = async () => {
//     try {
//       const result = await axios.get(`http://localhost:8080/user/${id}`);
//       setUser(result.data);
//     } catch (error) {
//       console.error('Error loading user:', error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center mt-5">
//         <div className="col-md-8">
//           <div className="card shadow">
//             <div className="card-body">
//               <h2 className="text-center mb-4">User Details</h2>
//               <div className="list-group">
//                 <UserDetailItem icon={faUser} label="Name" value={user.name} />
//                 <UserDetailItem icon={faUser} label="User Name" value={user.username} />
//                 <UserDetailItem icon={faEnvelope} label="Email" value={user.email} />
//               </div>
//             </div>
//             <div className="card-footer d-flex justify-content-end">
//               <button
//                 className="btn btn-primary"
//                 onClick={() => navigate(`/edituser/${id}`)}
//               >
//                 Edit User
//               </button>
//               <button
//                 className="btn btn-danger mx-2"
//                 onClick={() => navigate('/')}
//               >
//                 Back to List
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function UserDetailItem({ icon, label, value }) {
//   return (
//     <div className="list-group-item">
//       <div className="d-flex justify-content-between">
//         <div>
//           <FontAwesomeIcon icon={icon} className="me-2" />
//           {label}:
//         </div>
//         <div>{value}</div>
//       </div>
//     </div>
//   );
// }

