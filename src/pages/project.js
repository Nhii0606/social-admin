import React, { Component} from 'react';

class project extends Component {
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
            <img className="rounded-circle me-lg-2" src="img/himcom.png" alt style={{width: 40, height: 40}} />      
          </a>
          <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
            <a href="#" className="dropdown-item">My Profile</a>
            <a href="sign_in.html" className="dropdown-item">Log Out</a>
          </div>
        </div>
      </div>
    </nav>
    {/* Navbar End */}
    {/*content*/}
    <div className="row align-items-center">
      <div className="col">
        <h3 className="page-title">Project</h3>
        <ul className="breadcrumb">
          <li className="tbl-search-box">
            <input placeholder="Project name" type="text" aria-label="Search box" className="browser-default search-field" />
            <input placeholder="Employee name" type="text" aria-label="Search box" className="browser-default search-field" />
            <button type="button" className="btn btn-success m-2">Search</button>
          </li>
        </ul>
      </div>
      <div className="col-auto float-end ms-auto">
        <a href="createProfile.html" className="btn btn-info" role="button">Add Project</a>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 col-md-12 cl-sm-12 col-xs-12">
        <div className="body">
          <div className="board">
            <div className="list ng-star-inserted">
              <ul className="cdk-drop-list project">
                <li className="cdk-drag project ng-star-inserted">
                  <div className="dropdown dropdown-action project-action">
                    <a href className="action-icon" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="img/three.png"style={{width: 20, height: 20}} /> 
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" style={{}}>
                      <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#edit">
                        <img src="img/edit-profile-vector-icon.jpg" style={{width: 20, height: 20}} />  Edit
                      </a>
                      <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#detele">
                        <img src="img/delete.jpg" style={{width: 20, height: 20}} />   Delete 
                      </a>
                    </div>
                  </div>
                  <h4 className="project-title"> System</h4>
                  <small className="block text-ellipsis m-b-15">
                    <span className="text-xm">12</span>
                    <span className="text-muted">open tasks</span>
                  </small>
                  <p className="mt-3">Tạo Công ty/Dự án theo nhu cầu của Công ty, trong mỗi thư mục Công ty/Dự
                    án sẽ chưa các thông tin sau:Ca làm việc, Danh sách địa điểm làm việc và Danh 
                    sách tên ngân hàng:</p>
                  <div className="project-members m-b-15">
                    <ul className="team-members">
                      <li className="dropdown avtar-dropdown">
                        <div className="row">
                          <div className="col-5 pro-left mb-2">Created:</div>
                          <div className="col-7 pro-left mb-2">20/11/2022</div>
                          <div className="col-5 pro-left mb-2">Team leader:</div>
                          <div className="col-7 pro-left mb-2">Alibaba</div>
                          <div className="col-5 pro-left mb-2">Deedline:</div>
                          <div className="col-7 pro-left mb-2">3/2/2023</div>
                          <div className="col-5 pro-left mb-2">Team:</div>
                          <div className="col-7 pro-left mb-2">a , b , c</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="list ng-star-inserted">
              <ul className="cdk-drop-list project">
                <li className="cdk-drag project ng-star-inserted">
                  <div className="dropdown dropdown-action project-action">
                    <a href className="action-icon" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="img/three.png" style={{width: 20, height: 20}} /> 
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" style={{}}>
                      <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#edit">
                        <img src="img/edit-profile-vector-icon.jpg" style={{width: 20, height: 20}} />  Edit
                      </a>
                      <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#detele">
                        <img src="img/delete.jpg" style={{width: 20, height: 20}} />   Delete 
                      </a>
                    </div>
                  </div>
                  <h4 className="project-title"> System</h4>
                  <small className="block text-ellipsis m-b-15">
                    <span className="text-xm">12</span>
                    <span className="text-muted">open tasks</span>
                  </small>
                  <p className="mt-3">Tạo Công ty/Dự án theo nhu cầu của Công ty, trong mỗi thư mục Công ty/Dự
                    án sẽ chưa các thông tin sau:Ca làm việc, Danh sách địa điểm làm việc và Danh 
                    sách tên ngân hàng:</p>
                  <div className="project-members m-b-15">
                    <ul className="team-members">
                      <li className="dropdown avtar-dropdown">
                        <div className="row">
                          <div className="col-5 pro-left mb-2">Created:</div>
                          <div className="col-7 pro-left mb-2">20/11/2022</div>
                          <div className="col-5 pro-left mb-2">Team leader:</div>
                          <div className="col-7 pro-left mb-2">Alibaba</div>
                          <div className="col-5 pro-left mb-2">Deedline:</div>
                          <div className="col-7 pro-left mb-2">3/2/2023</div>
                          <div className="col-5 pro-left mb-2">Team:</div>
                          <div className="col-7 pro-left mb-2">a , b , c</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="list ng-star-inserted">
              <ul className="cdk-drop-list project">
                <li className="cdk-drag project ng-star-inserted">
                  <div className="dropdown dropdown-action project-action">
                    <a href className="action-icon" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="img/three.png" style={{width: 20, height: 20}} /> 
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" style={{}}>
                      <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#edit">
                        <img src="img/edit-profile-vector-icon.jpg" style={{width: 20, height: 20}} />  Edit
                      </a>
                      <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#detele">
                        <img src="img/delete.jpg" style={{width: 20, height: 20}} />   Delete 
                      </a>
                    </div>
                  </div>
                  <h4 className="project-title"> System</h4>
                  <small className="block text-ellipsis m-b-15">
                    <span className="text-xm">12</span>
                    <span className="text-muted">open tasks</span>
                  </small>
                  <p className="mt-3">Tạo Công ty/Dự án theo nhu cầu của Công ty, trong mỗi thư mục Công ty/Dự
                    án sẽ chưa các thông tin sau:Ca làm việc, Danh sách địa điểm làm việc và Danh 
                    sách tên ngân hàng:</p>
                  <div className="project-members m-b-15">
                    <ul className="team-members">
                      <li className="dropdown avtar-dropdown">
                        <div className="row">
                          <div className="col-5 pro-left mb-2">Created:</div>
                          <div className="col-7 pro-left mb-2">20/11/2022</div>
                          <div className="col-5 pro-left mb-2">Team leader:</div>
                          <div className="col-7 pro-left mb-2">Alibaba</div>
                          <div className="col-5 pro-left mb-2">Deedline:</div>
                          <div className="col-7 pro-left mb-2">3/2/2023</div>
                          <div className="col-5 pro-left mb-2">Team:</div>
                          <div className="col-7 pro-left mb-2">a , b , c</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="list ng-star-inserted">
              <ul className="cdk-drop-list project">
                <li className="cdk-drag project ng-star-inserted">
                  <div className="dropdown dropdown-action project-action">
                    <a href className="action-icon" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="img/three.png" style={{width: 20, height: 20}} /> 
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" style={{}}>
                      <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#edit">
                        <img src="img/edit-profile-vector-icon.jpg" style={{width: 20, height: 20}} />  Edit
                      </a>
                      <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#detele">
                        <img src="img/delete.jpg" style={{width: 20, height: 20}} />   Delete 
                      </a>
                    </div>
                  </div>
                  <h4 className="project-title"> System</h4>
                  <small className="block text-ellipsis m-b-15">
                    <span className="text-xm">12</span>
                    <span className="text-muted">open tasks</span>
                  </small>
                  <p className="mt-3">Tạo Công ty/Dự án theo nhu cầu của Công ty, trong mỗi thư mục Công ty/Dự
                    án sẽ chưa các thông tin sau:Ca làm việc, Danh sách địa điểm làm việc và Danh 
                    sách tên ngân hàng:</p>
                  <div className="project-members m-b-15">
                    <ul className="team-members">
                      <li className="dropdown avtar-dropdown">
                        <div className="row">
                          <div className="col-5 pro-left mb-2">Created:</div>
                          <div className="col-7 pro-left mb-2">20/11/2022</div>
                          <div className="col-5 pro-left mb-2">Team leader:</div>
                          <div className="col-7 pro-left mb-2">Alibaba</div>
                          <div className="col-5 pro-left mb-2">Deedline:</div>
                          <div className="col-7 pro-left mb-2">3/2/2023</div>
                          <div className="col-5 pro-left mb-2">Team:</div>
                          <div className="col-7 pro-left mb-2">a , b , c</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer Start */}
    <div className="container-fluid pt-4 px-4">
      <div className="bg-secondary rounded-top p-4">
        <div className="row">
          <div className="col-12 col-sm-6 text-center text-sm-start">
            © <a href="#">HiMCOM</a> 
          </div>
        </div>
      </div>
    </div>
    {/* Footer End */}
  </div>

  )
}
}
export default project;