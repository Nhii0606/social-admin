import React, { Component} from 'react';

class account extends Component {
  render() {
    return(
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
  <div className="row align-items-center">
    <div className="col">
      <h3 className="page-title">User</h3>
      <ul className="breadcrumb">
        <li className="tbl-search-box">
          <input placeholder="Name" type="text" aria-label="Search box" className="browser-default search-field" />
          <select className="form-select user mb-3" aria-label="Default select example">
            <option selected>Open this select company</option>
            <option value={1}>Coffee</option>
            <option value={2}>Milk</option>
            <option value={3}>Tea</option>
          </select>
          <select className="form-select user-role mb-3" aria-label="Default select example">
            <option selected>Open this select role </option>
            <option value={1}>Coffee</option>
            <option value={2}>Milk</option>
            <option value={3}>Tea</option>
          </select>
          <button type="button" className="btn btn-success user"> <img src="img/search.png" style={{width: 20, height: 20}} /> </button>
        </li>
      </ul>
    </div>
    <div className="col-auto float-end ms-auto">
      <a href="createProfile.html" className="btn btn-info" role="button">Add User</a>
    </div>
  </div>
  <div className="row">
    <div className="col-sm-12">
      <table className="table table-striped custom-table employee-table mb-0 datatable dataTable no-footer" id="DataTable_Table_0" role="grid" aria-describedby="DataTable_Table_0_info">
        <thead>
          <tr role="row">
            <th className="sorting_asc" tabIndex={0} aria-controls="DataTable_Table_0" rowSpan={1} colSpan={1} style={{width: '600.037px'}}>Name</th>
            <th className="sorting_asc" tabIndex={0} aria-controls="DataTable_Table_0" rowSpan={1} colSpan={1} style={{width: '540.037px'}}>Email</th>
            <th className="sorting_asc" tabIndex={0} aria-controls="DataTable_Table_0" rowSpan={1} colSpan={1} style={{width: '590.066px'}}>Company</th>
            <th className="sorting_asc" tabIndex={0} aria-controls="DataTable_Table_0" rowSpan={1} colSpan={1} style={{width: '430.077px'}}>Create Date</th>
            <th className="sorting_asc" tabIndex={0} aria-controls="DataTable_Table_0" rowSpan={1} colSpan={1} style={{width: '360.037px'}}>Role</th>
            <th className="sorting_asc" tabIndex={0} aria-controls="DataTable_Table_0" rowSpan={1} colSpan={1} style={{width: '155.037px'}}>Action</th>
          </tr>
        </thead>
        <tbody role="odd">         
          <tr><td> Nguyen van a</td>    
            <td>nguyena@gmail.com</td>
            <td>Coffee</td>
            <td>2/2/2022</td>
            <td>
              <span className="badge bg-inverse-info">Admin</span>
            </td>
            <td className="dropdown dropdown-action">
              <a href data-bs-toggle="dropdown" aria-expanded="false">
                <img src="img/three.png" alt style={{width: 20, height: 20}} /> 
              </a>
              <div className="dropdown-menu dropdown-menu-right" style={{}}>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#edit">
                  <img src="img/edit-profile-vector-icon.jpg" alt style={{width: 20, height: 20}} />  Edit
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#detele">
                  <img src="img/delete.jpg" alt style={{width: 20, height: 20}} />   Delete 
                </a>
              </div>
            </td>
          </tr></tbody>
        {/* */}   
        <tbody role="odd">         
          <tr><td> Nguyen van a</td>    
            <td>nguyena@gmail.com</td>
            <td>Coffee</td>
            <td>2/2/2022</td>
            <td>
              <span className="badge bg-inverse-danger">Client</span>
            </td>
            <td className="dropdown dropdown-action">
              <a href data-bs-toggle="dropdown" aria-expanded="false">
                <img src="img/three.png" alt style={{width: 20, height: 20}} /> 
              </a>
              <div className="dropdown-menu dropdown-menu-right" style={{}}>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#edit">
                  <img src="img/edit-profile-vector-icon.jpg" alt style={{width: 20, height: 20}} />  Edit
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#detele">
                  <img src="img/delete.jpg" alt style={{width: 20, height: 20}} />   Delete 
                </a>
              </div>
            </td>
          </tr></tbody>
        {/* */}   
        <tbody role="odd">         
          <tr><td> Nguyen van a</td>    
            <td>nguyena@gmail.com</td>
            <td>Coffee</td>
            <td>2/2/2022</td>
            <td>
              <span className="badge bg-inverse-info">Admin</span>
            </td>
            <td className="dropdown dropdown-action">
              <a href data-bs-toggle="dropdown" aria-expanded="false">
                <img src="img/three.png" alt style={{width: 20, height: 20}} /> 
              </a>
              <div className="dropdown-menu dropdown-menu-right" style={{}}>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#edit">
                  <img src="img/edit-profile-vector-icon.jpg" alt style={{width: 20, height: 20}} />  Edit
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#detele">
                  <img src="img/delete.jpg" alt style={{width: 20, height: 20}} />   Delete 
                </a>
              </div>
            </td>
          </tr></tbody>
        {/* */}   
        <tbody role="odd">         
          <tr><td> Nguyen van a</td>    
            <td>nguyena@gmail.com</td>
            <td>Coffee</td>
            <td>2/2/2022</td>
            <td>
              <span className="badge bg-inverse-danger">Client</span>
            </td>
            <td className="dropdown dropdown-action">
              <a href data-bs-toggle="dropdown" aria-expanded="false">
                <img src="img/three.png" alt style={{width: 20, height: 20}} /> 
              </a>
              <div className="dropdown-menu dropdown-menu-right" style={{}}>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#edit">
                  <img src="img/edit-profile-vector-icon.jpg" alt style={{width: 20, height: 20}} />  Edit
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#detele">
                  <img src="img/delete.jpg" alt style={{width: 20, height: 20}} />   Delete 
                </a>
              </div>
            </td>
          </tr></tbody>
        {/* */}   
        <tbody role="odd">         
          <tr><td> Nguyen van a</td>    
            <td>nguyena@gmail.com</td>
            <td>Coffee</td>
            <td>2/2/2022</td>
            <td>
              <span className="badge bg-inverse-info">Admin</span>
            </td>
            <td className="dropdown dropdown-action">
              <a href data-bs-toggle="dropdown" aria-expanded="false">
                <img src="img/three.png" alt style={{width: 20, height: 20}} /> 
              </a>
              <div className="dropdown-menu dropdown-menu-right" style={{}}>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#edit">
                  <img src="img/edit-profile-vector-icon.jpg" alt style={{width: 20, height: 20}} />  Edit
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#detele">
                  <img src="img/delete.jpg" alt style={{width: 20, height: 20}} />   Delete 
                </a>
              </div>
            </td>
          </tr></tbody>
        {/* */}   
        <tbody role="odd">         
          <tr><td> Nguyen van a</td>    
            <td>nguyena@gmail.com</td>
            <td>Coffee</td>
            <td>2/2/2022</td>
            <td>
              <span className="badge bg-inverse-danger">Client</span>
            </td>
            <td className="dropdown dropdown-action">
              <a href data-bs-toggle="dropdown" aria-expanded="false">
                <img src="img/three.png" alt style={{width: 20, height: 20}} /> 
              </a>
              <div className="dropdown-menu dropdown-menu-right" style={{}}>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#edit">
                  <img src="img/edit-profile-vector-icon.jpg" alt style={{width: 20, height: 20}} />  Edit
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#detele">
                  <img src="img/delete.jpg" alt style={{width: 20, height: 20}} />   Delete 
                </a>
              </div>
            </td>
          </tr></tbody>
        {/* */}   
        <tbody role="odd">         
          <tr><td> Nguyen van a</td>    
            <td>nguyena@gmail.com</td>
            <td>Coffee</td>
            <td>2/2/2022</td>
            <td>
              <span className="badge bg-inverse-info">Admin</span>
            </td>
            <td className="dropdown dropdown-action">
              <a href data-bs-toggle="dropdown" aria-expanded="false">
                <img src="img/three.png" alt style={{width: 20, height: 20}} /> 
              </a>
              <div className="dropdown-menu dropdown-menu-right" style={{}}>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#edit">
                  <img src="img/edit-profile-vector-icon.jpg" alt style={{width: 20, height: 20}} />  Edit
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#detele">
                  <img src="img/delete.jpg" alt style={{width: 20, height: 20}} />   Delete 
                </a>
              </div>
            </td>
          </tr></tbody>
        {/* */}   
        <tbody role="odd">         
          <tr><td> Nguyen van a</td>    
            <td>nguyena@gmail.com</td>
            <td>Coffee</td>
            <td>2/2/2022</td>
            <td>
              <span className="badge bg-inverse-danger">Client</span>
            </td>
            <td className="dropdown dropdown-action">
              <a href data-bs-toggle="dropdown" aria-expanded="false">
                <img src="img/three.png" alt style={{width: 20, height: 20}} /> 
              </a>
              <div className="dropdown-menu dropdown-menu-right" style={{}}>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#edit">
                  <img src="img/edit-profile-vector-icon.jpg" alt style={{width: 20, height: 20}} />  Edit
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#detele">
                  <img src="img/delete.jpg" alt style={{width: 20, height: 20}} />   Delete 
                </a>
              </div>
            </td>
          </tr></tbody>
        {/* */}   
        <tbody role="odd">         
          <tr><td> Nguyen van a</td>    
            <td>nguyena@gmail.com</td>
            <td>Coffee</td>
            <td>2/2/2022</td>
            <td>
              <span className="badge bg-inverse-info">Admin</span>
            </td>
            <td className="dropdown dropdown-action">
              <a href data-bs-toggle="dropdown" aria-expanded="false">
                <img src="img/three.png" alt style={{width: 20, height: 20}} /> 
              </a>
              <div className="dropdown-menu dropdown-menu-right" style={{}}>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#edit">
                  <img src="img/edit-profile-vector-icon.jpg" alt style={{width: 20, height: 20}} />  Edit
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#detele">
                  <img src="img/delete.jpg" alt style={{width: 20, height: 20}} />   Delete 
                </a>
              </div>
            </td>
          </tr></tbody>
        {/* */}   
        <tbody role="odd">         
          <tr><td> Nguyen van a</td>    
            <td>nguyena@gmail.com</td>
            <td>Coffee</td>
            <td>2/2/2022</td>
            <td>
              <span className="badge bg-inverse-danger">Client</span>
            </td>
            <td className="dropdown dropdown-action">
              <a href data-bs-toggle="dropdown" aria-expanded="false">
                <img src="img/three.png" alt style={{width: 20, height: 20}} /> 
              </a>
              <div className="dropdown-menu dropdown-menu-right" style={{}}>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#edit">
                  <img src="img/edit-profile-vector-icon.jpg" alt style={{width: 20, height: 20}} />  Edit
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#detele">
                  <img src="img/delete.jpg" alt style={{width: 20, height: 20}} />   Delete 
                </a>
              </div>
            </td>
          </tr></tbody>
        {/* */}   
      </table>
    </div>
  </div>
  <div className="row">
    <div className="col-sm-12 col-md-5">
      <div className="dataTable_info" id="DataTable_Table_0_info" role="status" aria-live="polite"> Page show 1 to 10</div>
    </div>
    <div className="col-sm-12 col-md-7">
      <div className="dataTables_paginate paging_simple_number" id="DataTable_Table_0_paginate">
        <ul className="pagination">
          <li className="pagination_button page-item previous disable" id="DataTables_Table_0_previous">
            <a href aria-controls="DataTable_Table_0" data-dt-idx={0} tabIndex={0} className="page-link">
              <i className>&lt;</i>
            </a>
          </li>
          <li className="paginate_button page_item active">
            <a href aria-controls="DataTable_Table_0" data-dt-idx={1} tabIndex={0} className="page-link">1</a>
          </li>
          <li className="pagination_button page-item next disable" id="DataTables_Table_0_next">
            <a href aria-controls="DataTable_Table_0" data-dt-idx={0} tabIndex={0} className="page-link">
              <i className>&gt;</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="container-fluid pt-4 px-4">
    <div className="bg-secondary rounded-top p-4">
      <div className="row">
        <div className="col-12 col-sm-6 text-center text-sm-start">
          © <a href="#">HiMCOM</a> 
        </div>
        <div className="col-12 col-sm-6 text-center text-sm-end">
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
</div>


  );
}
}
export default account;