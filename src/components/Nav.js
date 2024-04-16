import React, { Component} from 'react';

class Nav extends Component {
render () {
  return (
  
  <div className="sidebar pe-4 pb-3">
    <nav className="navbar bg-secondary navbar-dark">
      <a href="/Dashboard" className="navbar-brand mx-4 mb-3">
        <h3 className="text-primary"><i className="fa fa-user-edit me-2" />HIMCOM</h3>
      </a>
      <div className="d-flex align-items-center ms-4 mb-4">
        <div className="position-relative">
          <img className="rounded-circle" src="img/himcom.png" alt style={{width: 40, height: 40}} />
          <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
        </div>
        <div className="ms-3">
          <h6 className="mb-0">THACH</h6>
          <span>Admin</span>
        </div>
      </div>
      <div className="navbar-nav w-100">
        <a href="/Dashboard" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2" />Dashboard</a>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2" />Company</a>
          <div className="dropdown-menu bg-transparent border-0">
            <a href="/company" className="dropdown-item">All company</a>
            <a href="/AddCompany" className="dropdown-item">Add company</a>
            <a href className="dropdown-item" />
          </div>
        </div>
        <a href="/profile" className="nav-item nav-link"><i className="fa fa-th me-2" />Employee</a>
        <a href="/account" className="nav-item nav-link"><i className="fa fa-user-edit me-2" />Account</a>
        <a href="/project" className="nav-item nav-link"><i className="fa fa-table me-2" />Project</a>
        <a href="/form" className="nav-item nav-link"><i className="fa fa-keyboard me-2" />Forms</a>
      </div>
    </nav>
    </div>
  

  );
}
}
export default Nav;
