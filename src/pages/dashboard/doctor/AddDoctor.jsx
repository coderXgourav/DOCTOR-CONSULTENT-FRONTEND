import Sidebar from "../../../components/Sidebar";
import Topbar from "../../../components/Topbar";
import Footer from "../../../components/Footer";

const AddDoctor = () => {
  return (
    <>
      <div className="wrapper">
        {/* Sidebar  */}
        <Sidebar />
        {/* Page Content  */}
        <div id="content-page" className="content-page">
          {/* TOP Nav Bar */}
          <Topbar />
          {/* TOP Nav Bar END */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3">
                <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                      <h4 className="card-title">Add New User</h4>
                    </div>
                  </div>
                  <div className="iq-card-body">
                    <form>
                      <div className="form-group">
                        <div className="add-img-user profile-img-edit">
                          <img
                            className="profile-pic img-fluid"
                            src="/public/images/user/11.png"
                            alt="profile-pic"
                          />
                          <div className="p-image">
                            <a
                              href="javascript:void();"
                              className="upload-button btn iq-bg-primary"
                            >
                              File Upload
                            </a>
                            <input
                              className="file-upload"
                              type="file"
                              accept="image/*"
                            />
                          </div>
                        </div>
                        <div className="img-extension mt-3">
                          <div className="d-inline-block align-items-center">
                            <span>Only</span>
                            <a href="javascript:void();">.jpg</a>
                            <a href="javascript:void();">.png</a>
                            <a href="javascript:void();">.jpeg</a>
                            <span>allowed</span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>User Role:</label>
                        <select
                          className="form-control my-2"
                          id="selectuserrole"
                        >
                          <option>Select</option>
                          <option>Surgery</option>
                          <option>Gastroenterologist</option>
                          <option>Endocrinologist</option>
                          <option>Orthopaedic surgeon</option>
                          <option>Cardiologist </option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="furl">Facebook Url:</label>
                        <input
                          type="text"
                          className="form-control my-2"
                          id="furl"
                          placeholder="Facebook Url"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="turl">Twitter Url:</label>
                        <input
                          type="text"
                          className="form-control my-2"
                          id="turl"
                          placeholder="Twitter Url"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="instaurl">Instagram Url:</label>
                        <input
                          type="text"
                          className="form-control my-2"
                          id="instaurl"
                          placeholder="Instagram Url"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="lurl">Linkedin Url:</label>
                        <input
                          type="text"
                          className="form-control my-2"
                          id="lurl"
                          placeholder="Linkedin Url"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                      <h4 className="card-title">New User Information</h4>
                    </div>
                  </div>
                  <div className="iq-card-body">
                    <div className="new-user-info">
                      <form>
                        <div className="row">
                          <div className="form-group col-md-6">
                            <label htmlFor="fname">First Name:</label>
                            <input
                              type="text"
                              className="form-control my-2"
                              id="fname"
                              placeholder="First Name"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="lname">Last Name:</label>
                            <input
                              type="text"
                              className="form-control my-2"
                              id="lname"
                              placeholder="Last Name"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="add1">Street Address 1:</label>
                            <input
                              type="text"
                              className="form-control my-2"
                              id="add1"
                              placeholder="Street Address 1"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="add2">Street Address 2:</label>
                            <input
                              type="text"
                              className="form-control my-2"
                              id="add2"
                              placeholder="Street Address 2"
                            />
                          </div>
                          <div className="form-group col-md-12">
                            <label htmlFor="cname">Department Name:</label>
                            <input
                              type="text"
                              className="form-control my-2"
                              id="cname"
                              placeholder="Department Name"
                            />
                          </div>
                          <div className="form-group col-sm-12">
                            <label>Country:</label>
                            <select
                              className="form-control my-2"
                              id="selectcountry"
                            >
                              <option>Select Country</option>
                              <option>Caneda</option>
                              <option>Noida</option>
                              <option>USA</option>
                              <option>India</option>
                              <option>Africa</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="mobno">Mobile Number:</label>
                            <input
                              type="text"
                              className="form-control my-2"
                              id="mobno"
                              placeholder="Mobile Number"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="altconno">Alternate Contact:</label>
                            <input
                              type="text"
                              className="form-control my-2"
                              id="altconno"
                              placeholder="Alternate Contact"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="email">Email:</label>
                            <input
                              type="email"
                              className="form-control my-2"
                              id="email"
                              placeholder="Email"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="pno">Pin Code:</label>
                            <input
                              type="text"
                              className="form-control my-2"
                              id="pno"
                              placeholder="Pin Code"
                            />
                          </div>
                          <div className="form-group col-md-12">
                            <label htmlFor="city">Town/City:</label>
                            <input
                              type="text"
                              className="form-control my-2"
                              id="city"
                              placeholder="Town/City"
                            />
                          </div>
                        </div>
                        <hr />
                        <h5 className="mb-3">Security</h5>
                        <div className="row">
                          <div className="form-group col-md-12">
                            <label htmlFor="uname">User Name:</label>
                            <input
                              type="text"
                              className="form-control my-2"
                              id="uname"
                              placeholder="User Name"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="pass">Password:</label>
                            <input
                              type="password"
                              className="form-control my-2"
                              id="pass"
                              placeholder="Password"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="rpass">Repeat Password:</label>
                            <input
                              type="password"
                              className="form-control my-2"
                              id="rpass"
                              placeholder="Repeat Password "
                            />
                          </div>
                        </div>
                        <div className="custom-control custom-checkbox mb-4">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            Enable Two-Factor-Authentication
                          </label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Add New User
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <Footer />
          {/* Footer END */}
        </div>
      </div>
    </>
  );
};
export default AddDoctor;
