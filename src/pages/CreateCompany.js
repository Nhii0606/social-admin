import React, { Component} from 'react';

class CreateCompany extends Component {
  render () {
  return (
    <form action="#">
  <div className="add-employee">
    <div className="container-fluid pt-4 px-4">
      <h3 className="page-title">Add Company</h3>
      <div className="row g-4">
        <div className="col-sm-12 col-xl-6">
          <div className="bg-secondary-info rounded h-100 p-4">
            <h6 className="mb-4">Basic info</h6>
            <div className="mb-3">
              <input type="text" name="username" className="form-control" placeholder="Company name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className=" mb-3">
              <input type="text" name="email" className="form-control" placeholder="Email" aria-label="email" aria-describedby="basic-addon1" />
            </div>
            <div className=" mb-3">
              <input type="text" name="mobile" className="form-control" placeholder="Phone number" aria-label="Mobile" aria-describedby="basic-addon1" />
            </div>
            <div className=" mb-3">
              <input type="text" name="date-of-birth" className="form-control" placeholder="Create" aria-label="bankname" aria-describedby="basic-addon1" />    
            </div>
            <div className=" mb-3">
              <select className="form-select mb-3" aria-label="Default select example">
                <option selected>Location</option>
                <option value={1}>HCM</option>
                <option value={2}>Hà Nội</option>
                <option value={3}>Vũng Tàu</option>
              </select>
            </div>
            <div className=" mb-3">
              <select className="form-select mb-3" aria-label="Default select example">
                <option selected>Owner</option>
                <option value={1}>Hi hi</option>
                <option value={2}>Ha ha</option>
                <option value={3}>Hu hu</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-xl-6">
          <div className="bg-secondary-info rounded h-100 p-4">
            <h6 className="mb-4">Social profile</h6>
            <div className=" mb-3">
              <input type="text" name="height" className="form-control" placeholder="Fax" aria-label="height" aria-describedby="basic-addon1" />
            </div>
            <div className=" mb-3">
              <input type="text" name="height" className="form-control" placeholder="Facebook" aria-label="height" aria-describedby="basic-addon1" />
            </div>
            <div className=" mb-3">
              <input type="text" name="Weight" className="form-control" placeholder="Tags" aria-label="weight" aria-describedby="basic-addon1" />
            </div>
            <div className=" mb-3">
              <input type="text" name="height" className="form-control" placeholder="Website" aria-label="height" aria-describedby="basic-addon1" />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-xl-6">
          <div className="bg-secondary-info rounded h-100 p-4">
            <h6 className="mb-4">Shift</h6>
            <div className=" mb-3">
              <select className="form-select mb-3" aria-label="Default select example">
                <option selected>Select project</option>
                <option value={1}>Project 1</option>
                <option value={2}>Project 2</option>
                <option value={3}>Project 3</option>
              </select>
            </div>
            <div className="mb-3">
              <input type="text" name className="form-control" placeholder="Shift code" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="mb-3">
              <input type="text" name className="form-control" placeholder="Shift" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-xl-6">
          <div className="bg-secondary-info rounded h-100 p-4">
            <h6 className="mb-4">Work point</h6>
            <div className="mb-3">
              <select className="form-select mb-3" aria-label="Default select example">
                <option selected>Select province/city</option>
                <option value={1}>HCM</option>
                <option value={2}>Hà Nội</option>
                <option value={3}>Vũng Tàu</option>
              </select>
            </div>
            <div className=" mb-3">
              <input type="text" name="email" className="form-control" placeholder="Supermarket system" aria-label="email" aria-describedby="basic-addon1" />
            </div>
            <div className=" mb-3">
              <input type="text" name="email" className="form-control" placeholder="Supermarket name" aria-label="email" aria-describedby="basic-addon1" />
            </div>
            <div className="mb-3">
              <input type="text" name="email" className="form-control" placeholder="Supermarket address" aria-label="email" aria-describedby="basic-addon1" />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-xl-6">
          <div className="bg-secondary-info rounded h-100 p-4">
            <h6 className="mb-4">Bank</h6>
            <div className=" mb-3">
              <select className="form-select mb-3" aria-label="Default select example">
                <option selected>Select bank</option>
                <option value={1}>Vietcombank</option>
                <option value={2}>Aribank</option>
                <option value={3}>BIDV</option>
              </select>
            </div>     
          </div>
        </div>
        <div className="col-sm-12 col-xl-6">
          <div className="bg-secondary-info rounded h-100 p-4">
            <h6 className="mb-4">Status</h6>
            <div className=" mb-3">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="Active" id="inlineRadio1" defaultValue="option1" />
                <label className="form-check-label" htmlFor="inlineRadio1">Active</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="private" id="inlineRadio2" defaultValue="option2" />
                <label className="form-check-label" htmlFor="inlineRadio2">Private</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inactive" id="inlineRadio2" defaultValue="option2" />
                <label className="form-check-label" htmlFor="inlineRadio2">Inactive</label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="bg-secondary-info rounded h-100 p-4">
            <h6 className="mb-4">About company</h6>     
            <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="m-n2">
    <button type="button" className="btn btn-primary rounded-pill m-2">Cancel</button>
    <button type="button" className="btn btn-info rounded-pill m-2">Submit</button>
  </div>
</form>

  );
}
}
export default CreateCompany;
