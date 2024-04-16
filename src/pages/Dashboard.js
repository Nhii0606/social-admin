import React, { Component} from 'react';

class Dashboard extends Component {
  render() {
  return (
   <div className="content">
  {/* Navbar Start */}
  <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
    <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
      <h2 className="text-primary mb-0"><i className="fa fa-user-edit" /></h2>
    </a>
    <a href="#" className="sidebar-toggler flex-shrink-0">
      <i className="fa fa-bars" />
    </a>
    <form className="d-none d-md-flex ms-4">
      <input className="form-control bg-dark border-0" type="search" placeholder="Search" />
    </form>
    <div className="navbar-nav ms-auto">
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
          <img className="rounded-circle me-lg-2" src="img/himcom.png" style={{width: 40, height: 40}} />      
        </a>
        <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
          <a href="#" className="dropdown-item">My Profile</a>
          <a href="sign_in.html" className="dropdown-item">Log Out</a>
        </div>
      </div>
    </div>
  </nav>

  <div className="container-fluid pt-4 px-4">
    <div className="row ">
      <div className="col-sm-6 col-xl-3">
        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
          <i className="fa fa-chart-line fa-3x text-primary" />
          <div className="ms-3">
            <p className="mb-2">Project</p>
            <h6 className="mb-0">112</h6>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xl-3">
        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
          <i className="fa fa-chart-bar fa-3x text-primary" />
          <div className="ms-3">
            <p className="mb-2">Task</p>
            <h6 className="mb-0">23</h6>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xl-3">
        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
          <i className="fa fa-chart-area fa-3x text-primary" />
          <div className="ms-3">
            <p className="mb-2">Client</p>
            <h6 className="mb-0">22</h6>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xl-3">
        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
          <i className="fa fa-chart-pie fa-3x text-primary" />
          <div className="ms-3">
            <p className="mb-2">Employee</p>
            <h6 className="mb-0">322</h6>
          </div>
        </div>
      </div>
   
  
      <div className="col-sm-12 col-xl-6">
        <div className="bg-secondary text-center rounded p-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h6 className="mb-0">Total Revenue</h6>
            <a href>Show All</a>
          </div>
          <canvas id="worldwide-sales" />
        </div>
      </div>
      <div className="col-sm-12 col-xl-6">
        <div className="bg-secondary text-center rounded p-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h6 className="mb-0">New employee</h6>
            <a href>Show All</a>
          </div>
          <canvas id="salse-revenue" />
        </div>
      </div>
    </div>
    </div>
  
  {/* Footer Start */}
  <div className="container-fluid pt-4 px-4">
    <div className="bg-secondary rounded-top p-4">
      <div className="row">
        <div className="col-12 col-sm-6 text-center text-sm-start">
          © <a href="#">HIMCOM</a>,App web ... 
        </div>
        Designed By <a href="#">ME</a>
      </div>
    </div>
  </div>
  {/* Footer End */}
</div>


  );
}
}
export default Dashboard;
