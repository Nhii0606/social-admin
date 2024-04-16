import React, { Component} from 'react';

class form extends Component {
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
          <a href="#" className="dropdown-item">Log Out</a>
        </div>
      </div>
    </div>
  </nav>
  {/* Navbar End */}
  {/* Form Start */}
  <div className="container-fluid pt-4 px-4">
    <div className="row g-4">
      <div className="col-sm-12 col-xl-6">
        <div className="bg-secondary rounded h-100 p-4">
          <h6 className="mb-4">Basic Form</h6>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
          </form>
        </div>
      </div>
      <div className="col-sm-12 col-xl-6">
        <div className="bg-secondary rounded h-100 p-4">
          <h6 className="mb-4">Horizontal Form</h6>
          <form>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword3" />
              </div>
            </div>
            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" defaultChecked />
                  <label className="form-check-label" htmlFor="gridRadios1">
                    First radio
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Second radio
                  </label>
                </div>
              </div>
            </fieldset>
            <div className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">Checkbox</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck1" />
                  <label className="form-check-label" htmlFor="gridCheck1">
                    Check me out
                  </label>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
          </form>
        </div>
      </div>
      <div className="col-sm-12 col-xl-6">
        <div className="bg-secondary rounded h-100 p-4">
          <h6 className="mb-4">Floating Label</h6>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating mb-3">
            <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
              <option selected>Open this select menu</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
            <label htmlFor="floatingSelect">Works with selects</label>
          </div>
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height: 150}} defaultValue={""} />
            <label htmlFor="floatingTextarea">Comments</label>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-xl-6">
        <div className="bg-secondary rounded h-100 p-4">
          <h6 className="mb-4">File Input</h6>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Default file input example</label>
            <input className="form-control bg-dark" type="file" id="formFile" />
          </div>
          <div className="mb-3">
            <label htmlFor="formFileMultiple" className="form-label">Multiple files input example</label>
            <input className="form-control bg-dark" type="file" id="formFileMultiple" multiple />
          </div>
          <div className="mb-3">
            <label htmlFor="formFileSm" className="form-label">Small file input example</label>
            <input className="form-control form-control-sm bg-dark" id="formFileSm" type="file" />
          </div>
          <div>
            <label htmlFor="formFileLg" className="form-label">Large file input example</label>
            <input className="form-control form-control-lg bg-dark" id="formFileLg" type="file" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Form End */}
  {/* Footer Start */}
  <div className="container-fluid pt-4 px-4">
    <div className="bg-secondary rounded-top p-4">
      <div className="row">
        <div className="col-12 col-sm-6 text-center text-sm-start">
          © <a href="#">HiMCOM</a>
        </div>
        <div className="col-12 col-sm-6 text-center text-sm-end">
          Designed By <a href="#">ME</a>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
</div>


  );
}
}
export default form;
