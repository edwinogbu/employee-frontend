import React from 'react';

function Navbar({ toggleSidebar }) {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={toggleSidebar}>
                <i className="fa fa-bars"></i>
            </button>
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow d-sm-none">
                    {/* ... (Search Dropdown for XS screen) */}
                </li>
                <li className="nav-item dropdown no-arrow mx-1">
                    {/* ... (Alerts Dropdown) */}
                </li>
                <li className="nav-item dropdown no-arrow mx-1">
                    {/* ... (Messages Dropdown) */}
                </li>
                <div className="topbar-divider d-none d-sm-block"></div>
                <li className="nav-item dropdown no-arrow">
                    {/* ... (User Information Dropdown) */}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
