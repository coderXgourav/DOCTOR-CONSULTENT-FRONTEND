import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
const Dashboard = () => {
  return (
    <>
      <div className="wrapper">
        {/* Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <div id="content-page" className="content-page">
          {/* TOP Nav Bar */}
          <Topbar />

          {/* TOP Nav Bar END */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-md-6 col-lg-3">
                    <div className="iq-card">
                      <div className="iq-card-body iq-bg-primary rounded-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="rounded-circle iq-card-icon bg-primary">
                            <i className="ri-user-fill" />
                          </div>
                          <div className="text-end">
                            <h2 className="mb-0">
                              <span className="counter">5600</span>
                            </h2>
                            <h5 className>Doctors</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="iq-card">
                      <div className="iq-card-body iq-bg-warning rounded-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="rounded-circle iq-card-icon bg-warning">
                            <i className="ri-women-fill" />
                          </div>
                          <div className="text-end">
                            <h2 className="mb-0">
                              <span className="counter">3450</span>
                            </h2>
                            <h5 className>Nurses</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="iq-card">
                      <div className="iq-card-body iq-bg-danger rounded-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="rounded-circle iq-card-icon bg-danger">
                            <i className="ri-group-fill" />
                          </div>
                          <div className="text-end">
                            <h2 className="mb-0">
                              <span className="counter">3500</span>
                            </h2>
                            <h5 className>Patients</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="iq-card">
                      <div className="iq-card-body iq-bg-info rounded-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="rounded-circle iq-card-icon bg-info">
                            <i className="ri-hospital-line" />
                          </div>
                          <div className="text-end">
                            <h2 className="mb-0">
                              <span className="counter">4500</span>
                            </h2>
                            <h5 className>Pharmacists</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                      <h4 className="card-title">Hospital Survey</h4>
                    </div>
                  </div>
                  <div className="iq-card-body pb-0 mt-3">
                    <div className="row text-center">
                      <div className="col-sm-3 col-6">
                        <h4 className="margin-0">$ 305 </h4>
                        <p className="text-muted"> Today Income</p>
                      </div>
                      <div className="col-sm-3 col-6">
                        <h4 className="margin-0">$ 999 </h4>
                        <p className="text-muted">This Week Income</p>
                      </div>
                      <div className="col-sm-3 col-6">
                        <h4 className="margin-0">$ 4999 </h4>
                        <p className="text-muted">This Month Income</p>
                      </div>
                      <div className="col-sm-3 col-6">
                        <h4 className="margin-0">$ 90,000 </h4>
                        <p className="text-muted">This Year Income</p>
                      </div>
                    </div>
                  </div>
                  <div id="home-servey-chart" />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between position-relative">
                    <div className="iq-header-title">
                      <h4 className="card-title">Hospital Staff</h4>
                    </div>
                    <div className="iqonic-navigation-custom">
                      <div className="iqonic-navigation" id="navDemo">
                        <div
                          className="swiper-buttons swiper-button-prev"
                          tabIndex={0}
                          role="button"
                          aria-label="Previous slide"
                        >
                          <i className="ri-arrow-left-s-line" />
                        </div>
                        <div
                          className="swiper-buttons swiper-button-next"
                          tabIndex={-1}
                          role="button"
                          aria-label="Next slide"
                        >
                          <i className="ri-arrow-right-s-line" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-card-body">
                    <div
                      className="ele-widget-swiper swiper"
                      data-navtarget="#navDemo"
                      data-slide={5}
                      data-loop="true"
                      data-speed={1000}
                      data-laptop={4}
                      data-tab={3}
                      data-mobile={2}
                      data-mobile-sm={1}
                      data-navnext
                      data-navprev
                      data-pagination
                      data-center="false"
                      data-autoplay="false"
                      data-spacebtslide={20}
                      data-spacelaptop={30}
                      data-spacetablet={30}
                      data-spacemobile={30}
                    >
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="docter-list-item-inner rounded text-center">
                            <div className="donter-profile">
                              <img
                                src="/public/images/user/05.jpg"
                                className="img-fluid rounded-circle"
                                alt="user-img"
                              />
                            </div>
                            <div className="doctor-detail mt-3">
                              <h5>Dr. Paul Molive</h5>
                              <h6>Doctor</h6>
                            </div>
                            <hr />
                            <div className="doctor-description">
                              <p className="mb-0 text-center ps-2 pe-2">
                                California Hospital Medical Center
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="docter-list-item-inner rounded text-center">
                            <div className="donter-profile">
                              <img
                                src="/public/images/user/06.jpg"
                                className="img-fluid rounded-circle"
                                alt="user-img"
                              />
                            </div>
                            <div className="doctor-detail mt-3">
                              <h5>Dr. Paul Molive</h5>
                              <h6>Nurse</h6>
                            </div>
                            <hr />
                            <div className="doctor-description">
                              <p className="mb-0 text-center ps-2 pe-2">
                                California Hospital Medical Center
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="docter-list-item-inner rounded text-center">
                            <div className="donter-profile">
                              <img
                                src="/public/images/user/07.jpg"
                                className="img-fluid rounded-circle"
                                alt="user-img"
                              />
                            </div>
                            <div className="doctor-detail mt-3">
                              <h5>Dr. Paul Molive</h5>
                              <h6>Surgeon</h6>
                            </div>
                            <hr />
                            <div className="doctor-description">
                              <p className="mb-0 text-center ps-2 pe-2">
                                California Hospital Medical Center
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="docter-list-item-inner rounded text-center">
                            <div className="donter-profile">
                              <img
                                src="/public/images/user/08.jpg"
                                className="img-fluid rounded-circle"
                                alt="user-img"
                              />
                            </div>
                            <div className="doctor-detail mt-3">
                              <h5>Dr. Paul Molive</h5>
                              <h6>Doctor</h6>
                            </div>
                            <hr />
                            <div className="doctor-description">
                              <p className="mb-0 text-center ps-2 pe-2">
                                California Hospital Medical Center
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="docter-list-item-inner rounded text-center">
                            <div className="donter-profile">
                              <img
                                src="/public/images/user/09.jpg"
                                className="img-fluid rounded-circle"
                                alt="user-img"
                              />
                            </div>
                            <div className="doctor-detail mt-3">
                              <h5>Dr. Paul Molive</h5>
                              <h6>Surgeon</h6>
                            </div>
                            <hr />
                            <div className="doctor-description">
                              <p className="mb-0 text-center ps-2 pe-2">
                                California Hospital Medical Center
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="docter-list-item-inner rounded text-center">
                            <div className="donter-profile">
                              <img
                                src="/public/images/user/10.jpg"
                                className="img-fluid rounded-circle"
                                alt="user-img"
                              />
                            </div>
                            <div className="doctor-detail mt-3">
                              <h5>Dr. Paul Molive</h5>
                              <h6>OT Assistent</h6>
                            </div>
                            <hr />
                            <div className="doctor-description">
                              <p className="mb-0 text-center ps-2 pe-2">
                                California Hospital Medical Center
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-8">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="iq-card">
                      <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                          <h4 className="card-title">Operations</h4>
                        </div>
                        <div className="iq-card-header-toolbar d-flex align-items-center">
                          <div className="dropdown">
                            <span
                              className="dropdown-toggle text-primary"
                              id="dropdownMenuButton5"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ri-more-fill" />
                            </span>
                            <div
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="dropdownMenuButton5"
                            >
                              <a className="dropdown-item" href="#">
                                <i className="ri-eye-fill me-2" />
                                View
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="ri-delete-bin-6-fill me-2" />
                                Delete
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="ri-pencil-fill me-2" />
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="ri-printer-fill me-2" />
                                Print
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="ri-file-download-fill me-2" />
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="iq-card-body">
                        <div className="table-responsive">
                          <table className="table mb-0 table-borderless">
                            <thead>
                              <tr>
                                <th scope="col">Patient</th>
                                <th scope="col">Patient Name </th>
                                <th scope="col">Doctors Team</th>
                                <th scope="col">Date Of Operation</th>
                                <th scope="col"> Report</th>
                                <th scope="col">Diseases</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-center">
                                  <img
                                    className="rounded-circle img-fluid avatar-40"
                                    src="/public/images/user/01.jpg"
                                    alt="profile"
                                  />
                                </td>
                                <td>Petey Cruiser</td>
                                <td>
                                  <div className="iq-media-group">
                                    <a href="#" className="iq-media">
                                      <img
                                        className="img-fluid avatar-40 rounded-circle"
                                        src="/public/images/user/05.jpg"
                                        alt
                                      />
                                    </a>
                                    <a href="#" className="iq-media">
                                      <img
                                        className="img-fluid avatar-40 rounded-circle"
                                        src="/public/images/user/06.jpg"
                                        alt
                                      />
                                    </a>
                                    <a href="#" className="iq-media">
                                      <img
                                        className="img-fluid avatar-40 rounded-circle"
                                        src="/public/images/user/07.jpg"
                                        alt
                                      />
                                    </a>
                                  </div>
                                </td>
                                <td>12-02-2020</td>
                                <td>
                                  <i className="ri-file-pdf-line font-size-16 text-danger" />
                                </td>
                                <td>Fracture</td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <img
                                    className="rounded-circle img-fluid avatar-40"
                                    src="/public/images/user/02.jpg"
                                    alt="profile"
                                  />
                                </td>
                                <td>Anna Sthesia</td>
                                <td>
                                  <div className="iq-media-group">
                                    <a href="#" className="iq-media">
                                      <img
                                        className="img-fluid avatar-40 rounded-circle"
                                        src="/public/images/user/05.jpg"
                                        alt
                                      />
                                    </a>
                                    <a href="#" className="iq-media">
                                      <img
                                        className="img-fluid avatar-40 rounded-circle"
                                        src="/public/images/user/06.jpg"
                                        alt
                                      />
                                    </a>
                                    <a href="#" className="iq-media">
                                      <img
                                        className="img-fluid avatar-40 rounded-circle"
                                        src="/public/images/user/07.jpg"
                                        alt
                                      />
                                    </a>
                                  </div>
                                </td>
                                <td>14-02-2020</td>
                                <td>
                                  <i className="ri-file-pdf-line font-size-16 text-danger" />
                                </td>
                                <td>Cataract surgery</td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <img
                                    className="rounded-circle img-fluid avatar-40"
                                    src="/public/images/user/03.jpg"
                                    alt="profile"
                                  />
                                </td>
                                <td>Paul Molive</td>
                                <td>
                                  <div className="iq-media-group">
                                    <a href="#" className="iq-media">
                                      <img
                                        className="img-fluid avatar-40 rounded-circle"
                                        src="/public/images/user/05.jpg"
                                        alt
                                      />
                                    </a>
                                    <a href="#" className="iq-media">
                                      <img
                                        className="img-fluid avatar-40 rounded-circle"
                                        src="/public/images/user/06.jpg"
                                        alt
                                      />
                                    </a>
                                    <a href="#" className="iq-media">
                                      <img
                                        className="img-fluid avatar-40 rounded-circle"
                                        src="/public/images/user/07.jpg"
                                        alt
                                      />
                                    </a>
                                  </div>
                                </td>
                                <td>14-02-2020</td>
                                <td>
                                  <i className="ri-file-pdf-line font-size-16 text-danger" />
                                </td>
                                <td>Cancer</td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <img
                                    className="rounded-circle img-fluid avatar-40"
                                    src="/public/images/user/04.jpg"
                                    alt="profile"
                                  />
                                </td>
                                <td>Anna Mull</td>
                                <td>
                                  <div className="iq-media-group">
                                    <a href="#" className="iq-media">
                                      <img
                                        className="img-fluid avatar-40 rounded-circle"
                                        src="/public/images/user/05.jpg"
                                        alt
                                      />
                                    </a>
                                    <a href="#" className="iq-media">
                                      <img
                                        className="img-fluid avatar-40 rounded-circle"
                                        src="/public/images/user/06.jpg"
                                        alt
                                      />
                                    </a>
                                    <a href="#" className="iq-media">
                                      <img
                                        className="img-fluid avatar-40 rounded-circle"
                                        src="/public/images/user/07.jpg"
                                        alt
                                      />
                                    </a>
                                  </div>
                                </td>
                                <td>16-02-2020</td>
                                <td>
                                  <i className="ri-file-pdf-line font-size-16 text-danger" />
                                </td>
                                <td>Hysterectomy</td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <img
                                    className="rounded-circle img-fluid avatar-40"
                                    src="/public/images/user/05.jpg"
                                    alt="profile"
                                  />
                                </td>
                                <td>Ruby saul</td>
                                <td>
                                  <div className="iq-media-group">
                                    <a href="#" className="iq-media">
                                      <img
                                        className="img-fluid avatar-40 rounded-circle"
                                        src="/public/images/user/05.jpg"
                                        alt
                                      />
                                    </a>
                                    <a href="#" className="iq-media">
                                      <img
                                        className="img-fluid avatar-40 rounded-circle"
                                        src="/public/images/user/06.jpg"
                                        alt
                                      />
                                    </a>
                                    <a href="#" className="iq-media">
                                      <img
                                        className="img-fluid avatar-40 rounded-circle"
                                        src="/public/images/user/07.jpg"
                                        alt
                                      />
                                    </a>
                                  </div>
                                </td>
                                <td>18-02-2020</td>
                                <td>
                                  <i className="ri-file-pdf-line font-size-16 text-danger" />
                                </td>
                                <td>Cancer</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="row">
                      <div className="col-md-6 col-lg-12">
                        <div className="iq-card">
                          <div className="iq-card-body">
                            <div className="iq-info-box d-flex align-items-center p-3">
                              <div className="info-image me-3">
                                <img
                                  src="/public/images/page-img/30.png"
                                  className="img-fluid"
                                  alt="image-box"
                                />
                              </div>
                              <div className="info-text">
                                <h3>120</h3>
                                <span>Total Appointments</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-12">
                        <div className="iq-card">
                          <div className="iq-card-body">
                            <div className="iq-info-box d-flex align-items-center p-3">
                              <div className="info-image me-3">
                                <img
                                  src="/public/images/page-img/31.png"
                                  className="img-fluid"
                                  alt="image-box"
                                />
                              </div>
                              <div className="info-text">
                                <h3>5000</h3>
                                <span>Completed Appointments</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-12">
                        <div className="iq-card">
                          <div className="iq-card-body">
                            <div className="iq-info-box d-flex align-items-center p-3">
                              <div className="info-image me-3">
                                <img
                                  src="/public/images/page-img/32.png"
                                  className="img-fluid"
                                  alt="image-box"
                                />
                              </div>
                              <div className="info-text">
                                <h3>1500</h3>
                                <span>Cancelled Appointments</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-12">
                        <div className="iq-card">
                          <div className="iq-card-body">
                            <div className="iq-info-box d-flex align-items-center p-3">
                              <div className="info-image me-3">
                                <img
                                  src="/public/images/page-img/33.png"
                                  className="img-fluid"
                                  alt="image-box"
                                />
                              </div>
                              <div className="info-text">
                                <h3>500</h3>
                                <span>Followup Appointments</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="iq-card">
                      <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                          <h4 className="card-title">Recent Activity</h4>
                        </div>
                        <div className="iq-card-header-toolbar d-flex align-items-center">
                          <div className="dropdown">
                            <span
                              className="dropdown-toggle text-primary"
                              id="dropdownMenuButton4"
                              data-bs-toggle="dropdown"
                            >
                              View All
                            </span>
                            <div
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="dropdownMenuButton4"
                            >
                              <a className="dropdown-item" href="#">
                                <i className="ri-eye-fill me-2" />
                                View
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="ri-delete-bin-6-fill me-2" />
                                Delete
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="ri-pencil-fill me-2" />
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="ri-printer-fill me-2" />
                                Print
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="ri-file-download-fill me-2" />
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="iq-card-body">
                        <ul className="iq-timeline">
                          <li>
                            <div className="timeline-dots-fill" />
                            <h6 className="float-start mb-2 text-dark">
                              <i className="ri-user-fill" /> 5 min ago
                            </h6>
                            <small className="float-end mt-1">Active</small>
                            <div className="d-inline-block w-100">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque scelerisque
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-dots-fill bg-success" />
                            <h6 className="float-start mb-2 text-dark">
                              <i className="ri-user-fill" /> 6 min ago
                            </h6>
                            <small className="float-end mt-1">Away</small>
                            <div className="d-inline-block w-100">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque scelerisque
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-dots-fill bg-info" />
                            <h6 className="float-start mb-2 text-dark">
                              <i className="ri-user-fill" /> 10 min ago
                            </h6>
                            <small className="float-end mt-1">Active</small>
                            <div className="d-inline-block w-100">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque scelerisque
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-dots-fill bg-warning" />
                            <h6 className="float-start mb-2 text-dark">
                              <i className="ri-user-fill" /> 15 min ago
                            </h6>
                            <small className="float-end mt-1">Offline</small>
                            <div className="d-inline-block w-100">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque scelerisque
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-dots-fill bg-danger" />
                            <h6 className="float-start mb-2 text-dark">
                              <i className="ri-user-fill" /> 18 min ago
                            </h6>
                            <small className="float-end mt-1">Away</small>
                            <div className="d-inline-block w-100">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque scelerisque
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                      <h4 className="card-title">Total Accident Report</h4>
                    </div>
                  </div>
                  <div className="iq-card-body">
                    <div className="row">
                      <div className="col-sm-6">
                        <h3>$40K</h3>
                      </div>
                    </div>
                    <div id="chart-7" />
                    <div className="row text-center mt-3">
                      <div className="col-sm-6">
                        <h6 className="text-truncate d-block">Last Month</h6>
                        <p className="m-0">358</p>
                      </div>
                      <div className="col-sm-6">
                        <h6 className="text-truncate d-block">Current Month</h6>
                        <p className="m-0">194</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                      <h4 className="card-title">Total Death Report</h4>
                    </div>
                  </div>
                  <div className="iq-card-body">
                    <div className="row">
                      <div className="col-sm-6">
                        <h3>$20K</h3>
                      </div>
                    </div>
                    <div id="chart-8" />
                    <div className="row text-center mt-3">
                      <div className="col-sm-6">
                        <h6 className="text-truncate d-block">Last Month</h6>
                        <p className="m-0">220</p>
                      </div>
                      <div className="col-sm-6">
                        <h6 className="text-truncate d-block">Current Month</h6>
                        <p className="m-0">120</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                      <h4 className="card-title">Overall Progress</h4>
                    </div>
                  </div>
                  <div className="iq-card-body">
                    <div id="apex-radialbar-chart" />
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

export default Dashboard;
