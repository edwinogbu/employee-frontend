import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Dashboard.css';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import Topbar from './layout/Topbar';

/**!SECTION
 * Dashboard
 * 
 */
import DataTable from './component/DataTable';
import AddUser from './user/AddUser';
import EditUser from './user/EditUser';
import ViewUser from './user/ViewUser';
import FeesTable from './component/FeesTable';
import AddFee from './fees/AddFee';
import ViewFee from './fees/ViewFee';
import EditFee from './fees/EditFee';
import StudentTranscript from './pages/StudentTranscript';


function Dashboard() {
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

    const toggleTopbar = () => {
      if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
        setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
      } else {
        setStyle("navbar-nav bg-gradient-primary sidebar sidebarDark accordion")
      }
    };
  
    const [isSidebarToggled, setSidebarToggled] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    // const [isSidebarToggled2, setSidebarToggled2] = useState(false);

    const toggleSidebar = () => {
        setSidebarToggled(!isSidebarToggled);
    };
    
    const sidebarClass = isSidebarToggled
        ? "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
        : "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion";


    return (
        <Router>
        <div>
            <body id="page-top">
                <div id="wrapper">
                    <Sidebar style={sidebarClass} toggleSidebar={toggleSidebar} />

                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                           {/* nav here */}
                           <Topbar toggleTopbar={toggleTopbar} />

                            <div className="container-fluid">
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h2 mb-2 text-primary-800 m-0 font-weight-bold text-primary">The Floral International College</h1>
                                    <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                                        <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
                                    </a>
                                </div>

                                <div className="row">
                                    <div className="col-xl-11 col-lg-10 mx-5">
                                        <div className="mb-4">
                                           
                                           
                                    <Routes>
                                        <Route path="/" element={<DataTable />} />
                                        <Route path="/add-user" element={<AddUser />} />
                                        <Route path="/edit-user/:id" element={<EditUser />} />
                                        <Route path="/view-user/:id" element={<ViewUser />} />


                                        <Route path="/manage-fees" element={<FeesTable />} />
                                        <Route path="/add-fees" element={<AddFee />} />
                                        <Route path="/edit-fees/:id" element={<EditFee />} />
                                        <Route path="/view-fees/:id" element={<ViewFee />} />
                                        {/* <Route exact path='/edituser/:id' element={<EditUser />} /> */}
                                        {/* <Route exact path='/viewuser/:id' element={<ViewUser />} /> */}
                                        {/* <Route path="/blog" element={<Blog posts={posts} />} /> */}
                                        {/* <Route path="/blogDetail/:id" element={<PostDetail posts={posts} />} /> */}
                                        
                                        
                                        <Route path="/student-transcript" element={<StudentTranscript />} />
                                    </Routes>




                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                    <Footer /> 
                    </div>
                </div>

                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>

                {/* Logout Modal */}
                <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    {/* ... (logout modal code) */}
                </div>
            </body>
        </div>
        </Router>
    );
}

export default Dashboard;



