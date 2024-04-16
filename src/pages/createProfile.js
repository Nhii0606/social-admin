import React, { Component} from 'react';

class createProfile extends Component {
  render() {
  return (
    <form action="#">
  <div className="add-employee">
    <div className="container-fluid pt-4 px-4">
      <h3 className="page-title">Add new employee</h3>
      <div className="row g-4">
        <div className="col-sm-12 col-xl-6">
          <div className="bg-secondary-info rounded h-100 p-4">
            <h6 className="mb-4">Information</h6>
            <div className="mb-3">
              <input type="text" name="username" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className=" mb-3">
              <input type="text" name="email" className="form-control" placeholder="Email" aria-label="email" aria-describedby="basic-addon1" />
            </div>
            <div className=" mb-3">
              <input type="text" name="mobile" className="form-control" placeholder="Mobile" aria-label="Mobile" aria-describedby="basic-addon1" />
            </div>
            <div className=" mb-3">
              <input type="text" name="height" className="form-control" placeholder="Height" aria-label="height" aria-describedby="basic-addon1" />
            </div>
            <div className=" mb-3">
              <input type="text" name="Weight" className="form-control" placeholder="Weight" aria-label="weight" aria-describedby="basic-addon1" />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-xl-6">
          <div className="bg-secondary-info rounded h-100 p-4">
            <h6 className="mb-4">Information</h6>
            <div className=" mb-3">
              <input type="text" name="date-of-birth" className="form-control" placeholder="Date of birth" aria-label="bankname" aria-describedby="basic-addon1" />
            </div>
            <div className=" mb-3">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="Male" id="inlineRadio1" defaultValue="option1" />
                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="Female" id="inlineRadio2" defaultValue="option2" />
                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
              </div>
            </div>
            <div className=" mb-3">
              <select className="form-select mb-3" aria-label="Default select example">
                <option selected>Hometown</option>
                <option value={1}>HCM</option>
                <option value={2}>Hà Nội</option>
                <option value={3}>Vũng Tàu</option>
              </select>
            </div>
            <div className=" mb-3">
              <input type="text" name="bankbranch" className="form-control" placeholder="Place of residence" aria-label="bankbranch" aria-describedby="basic-addon1" />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-xl-6">
          <div className="bg-secondary-info rounded h-100 p-4">
            <h6 className="mb-4">Information</h6>
            <div className=" mb-3">
              <select className="form-select mb-3" aria-label="Default select example">
                <option selected>Temporary residence city/province</option>
                <option value={1}>HCM</option>
                <option value={2}>Hà Nội</option>
                <option value={3}>Vũng Tàu</option>
              </select>
            </div>
            <div className=" mb-3">
              <select className="form-select mb-3" aria-label="Default select example">
                <option selected>Temporary residence district</option>
                <option value={1}>Quận 1</option>
                <option value={2}>Quận 2</option>
                <option value={3}>Quận 3</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">Face image</label>
              <input className="form-control bg-dark-info" type="file" id="formFile" />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">Image of work participation </label>
              <input className="form-control bg-dark-info" type="file" id="formFile" />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-xl-6">
          <div className="bg-secondary-info rounded h-100 p-4">
            <h6 className="mb-4">Info CCCD</h6>
            <div className="mb-3">
              <input type="text" name="CCCDnumber" className="form-control" placeholder="CCCD Number" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className=" mb-3">
              <input type="text" name="email" className="form-control" placeholder="Date of issue" aria-label="email" aria-describedby="basic-addon1" />
            </div>
            <div className=" mb-3">
              <input type="text" name="mobile" className="form-control" placeholder="Place of issue" aria-label="Mobile" aria-describedby="basic-addon1" />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">CCCD front image</label>
              <input className="form-control bg-dark-info" type="file" id="formFile" />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">CCCD back image</label>
              <input className="form-control bg-dark-info" type="file" id="formFile" />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-xl-6">
          <div className="bg-secondary-info rounded h-100 p-4">
            <h6 className="mb-4">Bank</h6>
            <div className=" mb-3">
              <input type="text" name="bankname" className="form-control" placeholder="Bank name" aria-label="bankname" aria-describedby="basic-addon1" />
            </div>
            <div className=" mb-3">
              <input type="text" name="bankaccount" className="form-control" placeholder="Bank Account number" aria-label="bankaccount" aria-describedby="basic-addon1" />
            </div>
            <div className=" mb-3">
              <input type="text" name="bankbranch" className="form-control" placeholder="Bank branch" aria-label="bankbranch" aria-describedby="basic-addon1" />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-xl-6">
          <div className="bg-secondary-info rounded h-100 p-4">
            <h6 className="mb-4">personal relations</h6>
            <div className=" mb-3">
              <input type="text" name="name_of_relative" className="form-control" placeholder="Name of relative" aria-label="bankname" aria-describedby="basic-addon1" />
            </div>
            <div className=" mb-3">
              <input type="text" name="number_of_relative" className="form-control" placeholder="Number of relative" aria-label="bankaccount" aria-describedby="basic-addon1" />
            </div>
            <div className=" mb-3">
              <input type="text" name="personal_relations" className="form-control" placeholder="Personal relations" aria-label="bankbranch" aria-describedby="basic-addon1" />
            </div>
          </div>
        </div>
      </div>
    </div>  
    <div className="m-n2">
      <button type="button" className="btn btn-primary rounded-pill m-2">Cancel</button>
      <button type="button" className="btn btn-info rounded-pill m-2">Submit</button>
    </div>
  </div>
</form>

  );
}
}
export default createProfile;
