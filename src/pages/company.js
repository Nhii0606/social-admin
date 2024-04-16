import React, { Component} from 'react';

class company extends Component {
  render() {
  return (
    <div className="content">
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
          <img className="rounded-circle me-lg-2" src="img/himcom.png"  style={{width: 40, height: 40}} />      
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
      <h3 className="page-title">Company</h3>
      <ul className="breadcrumb">
        <li className="tbl-search-box">
          <label htmlFor="search-input">
            <i className="material-icon search-icon" />
          </label>
          <input placeholder="Search" type="text" aria-label="Search box" className="browser-default search-field" />
        </li>
      </ul>
    </div>
    <div className="col-auto float-end ms-auto">
      <a href="javascript:void(0);" className="list-view btn-link active-filter" id="filter-search">
        <img src="img/filter.png"  style={{width: 20, height: 20}} /> filter
      </a>
      <a href="javascript:void(0);" className="list-view btn-link active-filter" id="filter-search">
        <img src="img/export-file.png" style={{width: 20, height: 20}} />export 
      </a>
      <a href="addcompany.html" className="btn btn-info" role="button">Add company</a>
    </div>
    <hr />
  </div>
  <div className="row">
    <div className="col-sm-12">
      <table className="table table-striped custom-table employee-table mb-0 datatable dataTable no-footer" id="DataTable_Table_0" role="grid" aria-describedby="DataTable_Table_0_info">
        <thead>
          <tr role="row">
            <th tabIndex={0} aria-controls="DataTable_Table_0" rowSpan={1} colSpan={1} style={{width: '20.037px'}}><input className="form-check-input" type="checkbox" /></th>
            <th className="sorting_asc" tabIndex={0} aria-controls="DataTable_Table_0" rowSpan={1} colSpan={1} style={{width: '175.037px'}}>Name</th>
            <th className="sorting_asc" tabIndex={0} aria-controls="DataTable_Table_0" rowSpan={1} colSpan={1} style={{width: '199.037px'}}>Email</th>
            <th className="sorting_asc" tabIndex={0} aria-controls="DataTable_Table_0" rowSpan={1} colSpan={1} style={{width: '189.066px'}}>Owner</th>
            <th className="sorting_asc" tabIndex={0} aria-controls="DataTable_Table_0" rowSpan={1} colSpan={1} style={{width: '135.077px'}}>Phone</th>
            <th className="sorting_asc" tabIndex={0} aria-controls="DataTable_Table_0" rowSpan={1} colSpan={1} style={{width: '138.037px'}}>Location</th>
            <th className="sorting_asc" tabIndex={0} aria-controls="DataTable_Table_0" rowSpan={1} colSpan={1} style={{width: '145.037px'}}>Contact</th>
            <th className="sorting_asc" tabIndex={0} aria-controls="DataTable_Table_0" rowSpan={1} colSpan={1} style={{width: '135.037px'}}>Status</th>
            <th className="sorting_asc" tabIndex={0} aria-controls="DataTable_Table_0" rowSpan={1} colSpan={1} style={{width: '100.037px'}}>Action</th>
          </tr>
        </thead>
        <tbody role="odd">
          <tr><td><input className="form-check-input" type="checkbox" /></td>
            <td> <img src="img/hot-coffee.png" style={{width: 20, height: 20}} />  Coffee</td>
            <td>cofee@gmail.com</td>
            <td> Nguyễn Văn hihi</td>
            <td>0987654321</td>
            <td>Hà Nội</td>
            <td>
              <a href data-bs-toggle="modal">
                <img src="img/facebook.png" style={{width: 20, height: 20}} />  
              </a>
              <a href data-bs-toggle="modal">
                <img src="img/phone-call.png"  style={{width: 20, height: 20}} />  
              </a>
              <a href data-bs-toggle="modal">
                <img src="img/gmail.png" style={{width: 20, height: 20}} />  
              </a>
            </td>
            <td>  <button type="button" className="btn btn-outline-success">Active</button></td>
            <td className="dropdown dropdown-action">
              <a href data-bs-toggle="dropdown" aria-expanded="false">
                <img src="img/three.png" style={{width: 20, height: 20}} /> 
              </a>
              <div className="dropdown-menu dropdown-menu-right" style={{}}>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#view">
                  <img src="img/user.png" style={{width: 20, height: 20}} />  View
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#edit">
                  <img src="img/edit-profile-vector-icon.jpg" style={{width: 20, height: 20}} />  Edit
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#detele">
                  <img src="img/delete.jpg" style={{width: 20, height: 20}} />   Delete 
                </a>
              </div>
            </td>
          </tr></tbody>
        <tbody role="odd">
          <tr><td><input className="form-check-input" type="checkbox" /></td>
            <td> <img src="img/hot-coffee.png" style={{width: 20, height: 20}} />  Coffee</td>
            <td>cofee@gmail.com</td>
            <td> Nguyễn Văn haha</td>
            <td>0987654321</td>
            <td>Hà Nội</td>
            <td>
              <a href data-bs-toggle="modal">
                <img src="img/facebook.png" style={{width: 20, height: 20}} />  
              </a>
              <a href data-bs-toggle="modal">
                <img src="img/phone-call.png" style={{width: 20, height: 20}} />  
              </a>
              <a href data-bs-toggle="modal">
                <img src="img/gmail.png" style={{width: 20, height: 20}} />  
              </a>
            </td>
            <td>  <button type="button" className="btn btn-outline-success">Active</button></td>
            <td className="dropdown dropdown-action">
              <a href data-bs-toggle="dropdown" aria-expanded="false">
                <img src="img/three.png" style={{width: 20, height: 20}} /> 
              </a>
              <div className="dropdown-menu dropdown-menu-right" style={{}}>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#view">
                  <img src="img/user.png" style={{width: 20, height: 20}} />  View
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#edit">
                  <img src="img/edit-profile-vector-icon.jpg" style={{width: 20, height: 20}} />  Edit
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#detele">
                  <img src="img/delete.jpg" style={{width: 20, height: 20}} />   Delete 
                </a>
              </div>
            </td>
          </tr></tbody>
        <tbody role="odd">
          <tr><td><input className="form-check-input" type="checkbox" /></td>
            <td> <img src="img/hot-coffee.png" style={{width: 20, height: 20}} />  Coffee</td>
            <td>cofee@gmail.com</td>
            <td> Nguyễn Văn hihi</td>
            <td>0987654321</td>
            <td>Hà Nội</td>
            <td>
              <a href data-bs-toggle="modal">
                <img src="img/facebook.png" style={{width: 20, height: 20}} />  
              </a>
              <a href data-bs-toggle="modal">
                <img src="img/phone-call.png" style={{width: 20, height: 20}} />  
              </a>
              <a href data-bs-toggle="modal">
                <img src="img/gmail.png" style={{width: 20, height: 20}} />  
              </a>
            </td>
            <td>  <button type="button" className="btn btn-outline-success">Active</button></td>
            <td className="dropdown dropdown-action">
              <a href data-bs-toggle="dropdown" aria-expanded="false">
                <img src="img/three.png" style={{width: 20, height: 20}} /> 
              </a>
              <div className="dropdown-menu dropdown-menu-right" style={{}}>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#view">
                  <img src="img/user.png" style={{width: 20, height: 20}} />  View
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#edit">
                  <img src="img/edit-profile-vector-icon.jpg" style={{width: 20, height: 20}} />  Edit
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#detele">
                  <img src="img/delete.jpg" style={{width: 20, height: 20}} />   Delete 
                </a>
              </div>
            </td>
          </tr></tbody>
        <tbody role="odd">
          <tr><td><input className="form-check-input" type="checkbox" /></td>
            <td> <img src="img/hot-coffee.png" style={{width: 20, height: 20}} />  Coffee</td>
            <td>cofee@gmail.com</td>
            <td>Nguyễn Văn hihi</td>
            <td>0987654321</td>
            <td>Hà Nội</td>
            <td>
              <a href data-bs-toggle="modal">
                <img src="img/facebook.png" style={{width: 20, height: 20}} />  
              </a>
              <a href data-bs-toggle="modal">
                <img src="img/phone-call.png" style={{width: 20, height: 20}} />  
              </a>
              <a href data-bs-toggle="modal">
                <img src="img/gmail.png" style={{width: 20, height: 20}} />  
              </a>
            </td>
            <td>  <button type="button" className="btn btn-outline-success">Active</button></td>
            <td className="dropdown dropdown-action">
              <a href data-bs-toggle="dropdown" aria-expanded="false">
                <img src="img/three.png" style={{width: 20, height: 20}} /> 
              </a>
              <div className="dropdown-menu dropdown-menu-right" style={{}}>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#view">
                  <img src="img/user.png" style={{width: 20, height: 20}} />  View
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#edit">
                  <img src="img/edit-profile-vector-icon.jpg" style={{width: 20, height: 20}} />  Edit
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#detele">
                  <img src="img/delete.jpg" style={{width: 20, height: 20}} />   Delete 
                </a>
              </div>
            </td>
          </tr></tbody>
        <tbody role="odd">
          <tr><td><input className="form-check-input" type="checkbox" /></td>
            <td> <img src="img/hot-coffee.png" style={{width: 20, height: 20}} />  Coffee</td>
            <td>cofee@gmail.com</td>
            <td>Nguyễn Văn hihi</td>
            <td>0987654321</td>
            <td>Hà Nội</td>
            <td>
              <a href data-bs-toggle="modal">
                <img src="img/facebook.png" style={{width: 20, height: 20}} />  
              </a>
              <a href data-bs-toggle="modal">
                <img src="img/phone-call.png" style={{width: 20, height: 20}} />  
              </a>
              <a href data-bs-toggle="modal">
                <img src="img/gmail.png" style={{width: 20, height: 20}} />  
              </a>
            </td>
            <td>  <button type="button" className="btn btn-outline-success">Active</button></td>
            <td className="dropdown dropdown-action">
              <a href data-bs-toggle="dropdown" aria-expanded="false">
                <img src="img/three.png" style={{width: 20, height: 20}} /> 
              </a>
              <div className="dropdown-menu dropdown-menu-right" style={{}}>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#view">
                  <img src="img/user.png" style={{width: 20, height: 20}} />  View
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#edit">
                  <img src="img/edit-profile-vector-icon.jpg" style={{width: 20, height: 20}} />  Edit
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#detele">
                  <img src="img/delete.jpg" style={{width: 20, height: 20}} />   Delete 
                </a>
              </div>
            </td>
          </tr></tbody>
        <tbody role="odd">
          <tr><td><input className="form-check-input" type="checkbox" /></td>
            <td> <img src="img/hot-coffee.png" style={{width: 20, height: 20}} />  Coffee</td>
            <td>cofee@gmail.com</td>
            <td>hihi</td>
            <td>0987654321</td>
            <td>Hà Nội</td>
            <td>
              <a href data-bs-toggle="modal">
                <img src="img/facebook.png" style={{width: 20, height: 20}} />  
              </a>
              <a href data-bs-toggle="modal">
                <img src="img/phone-call.png" style={{width: 20, height: 20}} />  
              </a>
              <a href data-bs-toggle="modal">
                <img src="img/gmail.png" style={{width: 20, height: 20}} />  
              </a>
            </td>
            <td>  <button type="button" className="btn btn-outline-success">Active</button></td>
            <td className="dropdown dropdown-action">
              <a href data-bs-toggle="dropdown" aria-expanded="false">
                <img src="img/three.png" style={{width: 20, height: 20}} /> 
              </a>
              <div className="dropdown-menu dropdown-menu-right" style={{}}>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#view">
                  <img src="img/user.png" style={{width: 20, height: 20}} />  View
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#edit">
                  <img src="img/edit-profile-vector-icon.jpg" style={{width: 20, height: 20}} />  Edit
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#detele">
                  <img src="img/delete.jpg" style={{width: 20, height: 20}} />   Delete 
                </a>
              </div>
            </td>
          </tr></tbody>
          <tbody role="odd">
          <tr><td><input className="form-check-input" type="checkbox" /></td>
            <td> <img src="img/hot-coffee.png" style={{width: 20, height: 20}} />  Coffee</td>
            <td>cofee@gmail.com</td>
            <td>hihi</td>
            <td>0987654321</td>
            <td>Hà Nội</td>
            <td>
              <a href data-bs-toggle="modal">
                <img src="img/facebook.png" style={{width: 20, height: 20}} />  
              </a>
              <a href data-bs-toggle="modal">
                <img src="img/phone-call.png" style={{width: 20, height: 20}} />  
              </a>
              <a href data-bs-toggle="modal">
                <img src="img/gmail.png" style={{width: 20, height: 20}} />  
              </a>
            </td>
            <td>  <button type="button" className="btn btn-outline-success">Active</button></td>
            <td className="dropdown dropdown-action">
              <a href data-bs-toggle="dropdown" aria-expanded="false">
                <img src="img/three.png" style={{width: 20, height: 20}} /> 
              </a>
              <div className="dropdown-menu dropdown-menu-right" style={{}}>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#view">
                  <img src="img/user.png" style={{width: 20, height: 20}} />  View
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#edit">
                  <img src="img/edit-profile-vector-icon.jpg" style={{width: 20, height: 20}} />  Edit
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#detele">
                  <img src="img/delete.jpg" style={{width: 20, height: 20}} />   Delete 
                </a>
              </div>
            </td>
          </tr></tbody>
          <tbody role="odd">
          <tr><td><input className="form-check-input" type="checkbox" /></td>
            <td> <img src="img/hot-coffee.png" style={{width: 20, height: 20}} />  Coffee</td>
            <td>cofee@gmail.com</td>
            <td>hihi</td>
            <td>0987654321</td>
            <td>Hà Nội</td>
            <td>
              <a href data-bs-toggle="modal">
                <img src="img/facebook.png" style={{width: 20, height: 20}} />  
              </a>
              <a href data-bs-toggle="modal">
                <img src="img/phone-call.png" style={{width: 20, height: 20}} />  
              </a>
              <a href data-bs-toggle="modal">
                <img src="img/gmail.png" style={{width: 20, height: 20}} />  
              </a>
            </td>
            <td>  <button type="button" className="btn btn-outline-success">Active</button></td>
            <td className="dropdown dropdown-action">
              <a href data-bs-toggle="dropdown" aria-expanded="false">
                <img src="img/three.png" style={{width: 20, height: 20}} /> 
              </a>
              <div className="dropdown-menu dropdown-menu-right" style={{}}>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#view">
                  <img src="img/user.png" style={{width: 20, height: 20}} />  View
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#edit">
                  <img src="img/edit-profile-vector-icon.jpg" style={{width: 20, height: 20}} />  Edit
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#detele">
                  <img src="img/delete.jpg" style={{width: 20, height: 20}} />   Delete 
                </a>
              </div>
            </td>
          </tr></tbody>
          <tbody role="odd">
          <tr><td><input className="form-check-input" type="checkbox" /></td>
            <td> <img src="img/hot-coffee.png" style={{width: 20, height: 20}} />  Coffee</td>
            <td>cofee@gmail.com</td>
            <td>hihi</td>
            <td>0987654321</td>
            <td>Hà Nội</td>
            <td>
              <a href data-bs-toggle="modal">
                <img src="img/facebook.png" style={{width: 20, height: 20}} />  
              </a>
              <a href data-bs-toggle="modal">
                <img src="img/phone-call.png" style={{width: 20, height: 20}} />  
              </a>
              <a href data-bs-toggle="modal">
                <img src="img/gmail.png" style={{width: 20, height: 20}} />  
              </a>
            </td>
            <td>  <button type="button" className="btn btn-outline-success">Active</button></td>
            <td className="dropdown dropdown-action">
              <a href data-bs-toggle="dropdown" aria-expanded="false">
                <img src="img/three.png" style={{width: 20, height: 20}} /> 
              </a>
              <div className="dropdown-menu dropdown-menu-right" style={{}}>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#view">
                  <img src="img/user.png" style={{width: 20, height: 20}} />  View
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#edit">
                  <img src="img/edit-profile-vector-icon.jpg" style={{width: 20, height: 20}} />  Edit
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#detele">
                  <img src="img/delete.jpg" style={{width: 20, height: 20}} />   Delete 
                </a>
              </div>
            </td>
          </tr></tbody>
          <tbody role="odd">
          <tr><td><input className="form-check-input" type="checkbox" /></td>
            <td> <img src="img/hot-coffee.png" style={{width: 20, height: 20}} />  Coffee</td>
            <td>cofee@gmail.com</td>
            <td>hihi</td>
            <td>0987654321</td>
            <td>Hà Nội</td>
            <td>
              <a href data-bs-toggle="modal">
                <img src="img/facebook.png" style={{width: 20, height: 20}} />  
              </a>
              <a href data-bs-toggle="modal">
                <img src="img/phone-call.png" style={{width: 20, height: 20}} />  
              </a>
              <a href data-bs-toggle="modal">
                <img src="img/gmail.png" style={{width: 20, height: 20}} />  
              </a>
            </td>
            <td>  <button type="button" className="btn btn-outline-success">Active</button></td>
            <td className="dropdown dropdown-action">
              <a href data-bs-toggle="dropdown" aria-expanded="false">
                <img src="img/three.png" style={{width: 20, height: 20}} /> 
              </a>
              <div className="dropdown-menu dropdown-menu-right" style={{}}>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#view">
                  <img src="img/user.png" style={{width: 20, height: 20}} />  View
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#edit">
                  <img src="img/edit-profile-vector-icon.jpg" style={{width: 20, height: 20}} />  Edit
                </a>
                <a className="dropdown-item" href data-bs-toggle="modal" data-bs-target="#detele">
                  <img src="img/delete.jpg" style={{width: 20, height: 20}} />   Delete 
                </a>
              </div>
            </td>
          </tr></tbody>
      </table>
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


  );
}
}
export default company;
