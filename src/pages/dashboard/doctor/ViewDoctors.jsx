import Topbar from "../../../components/Topbar";
import Sidebar from "../../../components/Sidebar";
import Footer from "../../../components/Footer";
import { Link } from "react-router-dom";

const ViewDoctors = () => {
  return (
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
            <div className="col-sm-12">
              <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">Docters List</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="iq-card">
                <div className="iq-card-body text-center">
                  <div className="doc-profile">
                    <img
                      className="rounded-circle img-fluid avatar-80"
                      src="/public/images/user/12.jpg"
                      alt="profile"
                    />
                  </div>
                  <div className="iq-doc-info mt-3">
                    <h4> Dr. Anna Mull</h4>
                    <p className="mb-0">Cardiologists</p>
                    <a href="javascript:void();">www.demo.com</a>
                  </div>
                  <div className="iq-doc-description mt-2">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam auctor non erat non gravida. In id ipsum consequat
                    </p>
                  </div>
                  <div className="iq-doc-social-info mt-3 mb-3">
                    <ul className="m-0 p-0 list-inline">
                      <li>
                        <a href="#">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-twitter-fill" />
                        </a>{" "}
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-google-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <Link to="/admin/profile/1" className="btn btn-primary">
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="iq-card">
                <div className="iq-card-body text-center">
                  <div className="doc-profile">
                    <img
                      className="rounded-circle img-fluid avatar-80"
                      src="/public/images/user/13.jpg"
                      alt="profile"
                    />
                  </div>
                  <div className="iq-doc-info mt-3">
                    <h4> Dr. Paul Molive</h4>
                    <p className="mb-0">Heart Surgeons</p>
                    <a href="javascript:void();">www.demo.com</a>
                  </div>
                  <div className="iq-doc-description mt-2">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam auctor non erat non gravida. In id ipsum consequat
                    </p>
                  </div>
                  <div className="iq-doc-social-info mt-3 mb-3">
                    <ul className="m-0 p-0 list-inline">
                      <li>
                        <a href="#">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-twitter-fill" />
                        </a>{" "}
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-google-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="profile.html" className="btn btn-primary">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="iq-card">
                <div className="iq-card-body text-center">
                  <div className="doc-profile">
                    <img
                      className="rounded-circle img-fluid avatar-80"
                      src="/public/images/user/14.jpg"
                      alt="profile"
                    />
                  </div>
                  <div className="iq-doc-info mt-3">
                    <h4> Dr. Terry Aki</h4>
                    <p className="mb-0">Medicine Specialists</p>
                    <a href="javascript:void();">www.demo.com</a>
                  </div>
                  <div className="iq-doc-description mt-2">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam auctor non erat non gravida. In id ipsum consequat
                    </p>
                  </div>
                  <div className="iq-doc-social-info mt-3 mb-3">
                    <ul className="m-0 p-0 list-inline">
                      <li>
                        <a href="#">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-twitter-fill" />
                        </a>{" "}
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-google-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="profile.html" className="btn btn-primary">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="iq-card">
                <div className="iq-card-body text-center">
                  <div className="doc-profile">
                    <img
                      className="rounded-circle img-fluid avatar-80"
                      src="/public/images/user/15.jpg"
                      alt="profile"
                    />
                  </div>
                  <div className="iq-doc-info mt-3">
                    <h4> Dr. Poppa Cherry</h4>
                    <p className="mb-0">Family Physicians</p>
                    <a href="javascript:void();">www.demo.com</a>
                  </div>
                  <div className="iq-doc-description mt-2">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam auctor non erat non gravida. In id ipsum consequat
                    </p>
                  </div>
                  <div className="iq-doc-social-info mt-3 mb-3">
                    <ul className="m-0 p-0 list-inline">
                      <li>
                        <a href="#">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-twitter-fill" />
                        </a>{" "}
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-google-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="profile.html" className="btn btn-primary">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="iq-card">
                <div className="iq-card-body text-center">
                  <div className="doc-profile">
                    <img
                      className="rounded-circle img-fluid avatar-80"
                      src="/public/images/user/16.jpg"
                      alt="profile"
                    />
                  </div>
                  <div className="iq-doc-info mt-3">
                    <h4> Dr. Saul T. Balls</h4>
                    <p className="mb-0">Gynaecology</p>
                    <a href="javascript:void();">www.demo.com</a>
                  </div>
                  <div className="iq-doc-description mt-2">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam auctor non erat non gravida. In id ipsum consequat
                    </p>
                  </div>
                  <div className="iq-doc-social-info mt-3 mb-3">
                    <ul className="m-0 p-0 list-inline">
                      <li>
                        <a href="#">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-twitter-fill" />
                        </a>{" "}
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-google-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="profile.html" className="btn btn-primary">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="iq-card">
                <div className="iq-card-body text-center">
                  <div className="doc-profile">
                    <img
                      className="rounded-circle img-fluid avatar-80"
                      src="/public/images/user/17.jpg"
                      alt="profile"
                    />
                  </div>
                  <div className="iq-doc-info mt-3">
                    <h4> Dr. Hal Appeno </h4>
                    <p className="mb-0">MD</p>
                    <a href="javascript:void();">www.demo.com</a>
                  </div>
                  <div className="iq-doc-description mt-2">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam auctor non erat non gravida. In id ipsum consequat
                    </p>
                  </div>
                  <div className="iq-doc-social-info mt-3 mb-3">
                    <ul className="m-0 p-0 list-inline">
                      <li>
                        <a href="#">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-twitter-fill" />
                        </a>{" "}
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-google-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="profile.html" className="btn btn-primary">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="iq-card">
                <div className="iq-card-body text-center">
                  <div className="doc-profile">
                    <img
                      className="rounded-circle img-fluid avatar-80"
                      src="/public/images/user/18.jpg"
                      alt="profile"
                    />
                  </div>
                  <div className="iq-doc-info mt-3">
                    <h4> Dr. Polly Tech</h4>
                    <p className="mb-0">Eye Special</p>
                    <a href="javascript:void();">www.demo.com</a>
                  </div>
                  <div className="iq-doc-description mt-2">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam auctor non erat non gravida. In id ipsum consequat
                    </p>
                  </div>
                  <div className="iq-doc-social-info mt-3 mb-3">
                    <ul className="m-0 p-0 list-inline">
                      <li>
                        <a href="#">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-twitter-fill" />
                        </a>{" "}
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-google-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="profile.html" className="btn btn-primary">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="iq-card">
                <div className="iq-card-body text-center">
                  <div className="doc-profile">
                    <img
                      className="rounded-circle img-fluid avatar-80"
                      src="/public/images/user/12.jpg"
                      alt="profile"
                    />
                  </div>
                  <div className="iq-doc-info mt-3">
                    <h4> Dr. Pat Agonia</h4>
                    <p className="mb-0">Therapy Special</p>
                    <a href="javascript:void();">www.demo.com</a>
                  </div>
                  <div className="iq-doc-description mt-2">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam auctor non erat non gravida. In id ipsum consequat
                    </p>
                  </div>
                  <div className="iq-doc-social-info mt-3 mb-3">
                    <ul className="m-0 p-0 list-inline">
                      <li>
                        <a href="#">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-twitter-fill" />
                        </a>{" "}
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-google-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="profile.html" className="btn btn-primary">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="iq-card">
                <div className="iq-card-body text-center">
                  <div className="doc-profile">
                    <img
                      className="rounded-circle img-fluid avatar-80"
                      src="/public/images/user/13.jpg"
                      alt="profile"
                    />
                  </div>
                  <div className="iq-doc-info mt-3">
                    <h4> Dr. Barry Cade</h4>
                    <p className="mb-0">Heart Surgeons</p>
                    <a href="javascript:void();">www.demo.com</a>
                  </div>
                  <div className="iq-doc-description mt-2">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam auctor non erat non gravida. In id ipsum consequat
                    </p>
                  </div>
                  <div className="iq-doc-social-info mt-3 mb-3">
                    <ul className="m-0 p-0 list-inline">
                      <li>
                        <a href="#">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-twitter-fill" />
                        </a>{" "}
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-google-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="profile.html" className="btn btn-primary">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="iq-card">
                <div className="iq-card-body text-center">
                  <div className="doc-profile">
                    <img
                      className="rounded-circle img-fluid avatar-80"
                      src="/public/images/user/14.jpg"
                      alt="profile"
                    />
                  </div>
                  <div className="iq-doc-info mt-3">
                    <h4> Dr.Jimmy Changa</h4>
                    <p className="mb-0">Cardiologists</p>
                    <a href="javascript:void();">www.demo.com</a>
                  </div>
                  <div className="iq-doc-description mt-2">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam auctor non erat non gravida. In id ipsum consequat
                    </p>
                  </div>
                  <div className="iq-doc-social-info mt-3 mb-3">
                    <ul className="m-0 p-0 list-inline">
                      <li>
                        <a href="#">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-twitter-fill" />
                        </a>{" "}
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-google-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="profile.html" className="btn btn-primary">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="iq-card">
                <div className="iq-card-body text-center">
                  <div className="doc-profile">
                    <img
                      className="rounded-circle img-fluid avatar-80"
                      src="/public/images/user/15.jpg"
                      alt="profile"
                    />
                  </div>
                  <div className="iq-doc-info mt-3">
                    <h4> Dr. Sue Vaneer</h4>
                    <p className="mb-0">Orthopedics Special</p>
                    <a href="javascript:void();">www.demo.com</a>
                  </div>
                  <div className="iq-doc-description mt-2">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam auctor non erat non gravida. In id ipsum consequat
                    </p>
                  </div>
                  <div className="iq-doc-social-info mt-3 mb-3">
                    <ul className="m-0 p-0 list-inline">
                      <li>
                        <a href="#">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-twitter-fill" />
                        </a>{" "}
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-google-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="profile.html" className="btn btn-primary">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="iq-card">
                <div className="iq-card-body text-center">
                  <div className="doc-profile">
                    <img
                      className="rounded-circle img-fluid avatar-80"
                      src="/public/images/user/16.jpg"
                      alt="profile"
                    />
                  </div>
                  <div className="iq-doc-info mt-3">
                    <h4> Dr. Monty Carlo</h4>
                    <p className="mb-0">Anesthesiologists</p>
                    <a href="javascript:void();">www.demo.com</a>
                  </div>
                  <div className="iq-doc-description mt-2">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam auctor non erat non gravida. In id ipsum consequat
                    </p>
                  </div>
                  <div className="iq-doc-social-info mt-3 mb-3">
                    <ul className="m-0 p-0 list-inline">
                      <li>
                        <a href="#">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-twitter-fill" />
                        </a>{" "}
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-google-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="profile.html" className="btn btn-primary">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="iq-card">
                <div className="iq-card-body text-center">
                  <div className="doc-profile">
                    <img
                      className="rounded-circle img-fluid avatar-80"
                      src="/public/images/user/17.jpg"
                      alt="profile"
                    />
                  </div>
                  <div className="iq-doc-info mt-3">
                    <h4> Dr. Rick OShea</h4>
                    <p className="mb-0">General</p>
                    <a href="javascript:void();">www.demo.com</a>
                  </div>
                  <div className="iq-doc-description mt-2">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam auctor non erat non gravida. In id ipsum consequat
                    </p>
                  </div>
                  <div className="iq-doc-social-info mt-3 mb-3">
                    <ul className="m-0 p-0 list-inline">
                      <li>
                        <a href="#">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-twitter-fill" />
                        </a>{" "}
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-google-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="profile.html" className="btn btn-primary">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="iq-card">
                <div className="iq-card-body text-center">
                  <div className="doc-profile">
                    <img
                      className="rounded-circle img-fluid avatar-80"
                      src="/public/images/user/18.jpg"
                      alt="profile"
                    />
                  </div>
                  <div className="iq-doc-info mt-3">
                    <h4> Dr. Bunny Joy</h4>
                    <p className="mb-0">Gynaecology</p>
                    <a href="javascript:void();">www.demo.com</a>
                  </div>
                  <div className="iq-doc-description mt-2">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam auctor non erat non gravida. In id ipsum consequat
                    </p>
                  </div>
                  <div className="iq-doc-social-info mt-3 mb-3">
                    <ul className="m-0 p-0 list-inline">
                      <li>
                        <a href="#">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-twitter-fill" />
                        </a>{" "}
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-google-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="profile.html" className="btn btn-primary">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="iq-card">
                <div className="iq-card-body text-center">
                  <div className="doc-profile">
                    <img
                      className="rounded-circle img-fluid avatar-80"
                      src="/public/images/user/12.jpg"
                      alt="profile"
                    />
                  </div>
                  <div className="iq-doc-info mt-3">
                    <h4> Dr. Shonda Leer</h4>
                    <p className="mb-0">Orthopedics Special</p>
                    <a href="javascript:void();">www.demo.com</a>
                  </div>
                  <div className="iq-doc-description mt-2">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam auctor non erat non gravida. In id ipsum consequat
                    </p>
                  </div>
                  <div className="iq-doc-social-info mt-3 mb-3">
                    <ul className="m-0 p-0 list-inline">
                      <li>
                        <a href="#">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-twitter-fill" />
                        </a>{" "}
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-google-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="profile.html" className="btn btn-primary">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="iq-card">
                <div className="iq-card-body text-center">
                  <div className="doc-profile">
                    <img
                      className="rounded-circle img-fluid avatar-80"
                      src="/public/images/user/13.jpg"
                      alt="profile"
                    />
                  </div>
                  <div className="iq-doc-info mt-3">
                    <h4> Dr. Ira Membrit</h4>
                    <p className="mb-0">MD</p>
                    <a href="javascript:void();">www.demo.com</a>
                  </div>
                  <div className="iq-doc-description mt-2">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam auctor non erat non gravida. In id ipsum consequat
                    </p>
                  </div>
                  <div className="iq-doc-social-info mt-3 mb-3">
                    <ul className="m-0 p-0 list-inline">
                      <li>
                        <a href="#">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-twitter-fill" />
                        </a>{" "}
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-google-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="profile.html" className="btn btn-primary">
                    View Profile
                  </a>
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
  );
};
export default ViewDoctors;
