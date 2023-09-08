import React from 'react'

function DashboardContent() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                           {/* nav here */}
                           <Topbar toggleTopbar={toggleTopbar} />

                           content here
                           <div className="container-fluid">
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                                    <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                                        <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
                                    </a>
                                </div>

                                <div className="row">
                                    <div className="col-xl-11 col-lg-10 mx-5">
                                        <div className="card shadow mb-4">
                                            
                                            <DataTable />


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                    <Footer /> 
                    </div>
  )
}

export default DashboardContent
