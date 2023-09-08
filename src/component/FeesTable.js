import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
export default function FeesTable() {
    const [fees , setFees] = useState([])
  const {id} = useParams();
 
  useEffect(()=>{
    loadFees();
  }, [])
  const loadFees = async () =>{
     const resp = await axios.get("http://localhost:8080/fees/view")
     setFees(resp.data);
  }


  const deleteFees = async (id) =>{
    await axios.delete(`http://localhost:8080/fees/delete/${id}`);
    loadFees()
  } 
  return (
        <>
    
           <div className="container-fluid">
            <div className="card shadow mb-4">
              <div className="card-header py-3 d-flex justify-content-between">
              <div className="mx-5 py-3">
                <h6 className="m-0 font-weight-bold text-primary">Employee DataTables </h6>
              </div>
                
              <div className="mx-5 py-3">
                  <Link to={`/add-fees`} type="text" className="btn btn-primary mx-2">
                    Add Fees
                  </Link>
              </div>
                
                        
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered table-striped" id="dataTable" width="100%" cellSpacing={0}>
                    <thead>
                    <tr>
                        <th>SN</th>
                        <th>Name</th>
                        <th>Amount</th>
                      
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>SN</th>
                        <th>Name</th>
                        <th>Amount</th>                      
                        <th>Action</th>
                      </tr>
                    </tfoot>
                    <tbody>
                    {fees.map((fee, index) => (
                      <tr 
                      // className={index % 2 === 0 ? 
                      // 'table-primary' : 'table-secondary'
                      // }
                      key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>
                          <Link to={`/view-fees/${fee.id}`} type="text" className="text-primary mx-2">
                            {fee.name}
                          </Link>
                        </td>
                        <td>{fee.amount}</td>
                        <td>{fee.isChecked}</td>
                        <td>
                          
                          <Link to={`/edit-fees/${fee.id}`} type="button" className="btn  btn-outline-primary mx-2">Edit</Link>
                          <button onClick={()=>deleteFees(fee.id)} type="button" className="btn btn-danger mx-2">Delete</button>
                        </td>
                      </tr>
                    ))}
                    
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
     
        </>
  )
}
