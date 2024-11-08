const Topbar = () => {
  return (
    <>
      <div className="iq-top-navbar">
        <div className="iq-navbar-custom">
          <div className="iq-sidebar-logo">
            <div className="top-logo">
              <a href="index.html" className="logo">
                <img src="/public/images/logo.png" className="img-fluid" alt />
                <span>XRay</span>
              </a>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <div className="iq-search-bar">
              <form action="#" className="searchbox">
                <input
                  type="text"
                  className="text search-input"
                  placeholder="Type here to search..."
                />
                <a className="search-link" href="#">
                  <i className="ri-search-line" />
                </a>
              </form>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              href="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="ri-menu-3-line" />
            </button>
            <div className="iq-menu-bt align-self-center">
              <div className="wrapper-menu">
                <div className="main-circle">
                  <i className="ri-more-fill" />
                </div>
                <div className="hover-circle">
                  <i className="ri-more-2-fill" />
                </div>
              </div>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto navbar-list">
                <li className="nav-item iq-full-screen">
                  <a href="#" className="iq-waves-effect" id="btnFullscreen">
                    <i className="ri-fullscreen-line" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="search-toggle iq-waves-effect">
                    <i className="ri-notification-3-fill" />
                    <span className="bg-danger dots" />
                  </a>
                  <div className="iq-sub-dropdown">
                    <div className="iq-card shadow-none m-0">
                      <div className="iq-card-body p-0 ">
                        <div className="bg-primary p-3">
                          <h5 className="mb-0 text-white d-flex justify-content-between">
                            All Notifications
                            <small className="badge  badge-dark float-end pt-1 ms-2">
                              4
                            </small>
                          </h5>
                        </div>
                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center d-flex">
                            <div className>
                              <img
                                className="avatar-40 rounded"
                                src="/public/images/user/01.jpg"
                                alt
                              />
                            </div>
                            <div className="media-body ms-3">
                              <h6 className="mb-0 ">Emma Watson Bini</h6>
                              <small className="float-end font-size-12">
                                Just Now
                              </small>
                              <p className="mb-0">95 MB</p>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center d-flex">
                            <div className>
                              <img
                                className="avatar-40 rounded"
                                src="/public/images/user/02.jpg"
                                alt
                              />
                            </div>
                            <div className="media-body ms-3">
                              <h6 className="mb-0 ">New customer is join</h6>
                              <small className="float-end font-size-12">
                                5 days ago
                              </small>
                              <p className="mb-0">Jond Bini</p>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center d-flex">
                            <div className>
                              <img
                                className="avatar-40 rounded"
                                src="/public/images/user/03.jpg"
                                alt
                              />
                            </div>
                            <div className="media-body ms-3">
                              <h6 className="mb-0 ">Two customer is left</h6>
                              <small className="float-end font-size-12">
                                2 days ago
                              </small>
                              <p className="mb-0">Jond Bini</p>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center d-flex">
                            <div className>
                              <img
                                className="avatar-40 rounded"
                                src="/public/images/user/04.jpg"
                                alt
                              />
                            </div>
                            <div className="media-body ms-3">
                              <h6 className="mb-0 ">New Mail from Fenny</h6>
                              <small className="float-end font-size-12">
                                3 days ago
                              </small>
                              <p className="mb-0">Jond Bini</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="search-toggle iq-waves-effect">
                    <i className="ri-mail-open-fill" />
                    <span className="bg-primary count-mail" />
                  </a>
                  <div className="iq-sub-dropdown">
                    <div className="iq-card shadow-none m-0">
                      <div className="iq-card-body p-0 ">
                        <div className="bg-primary p-3">
                          <h5 className="mb-0 text-white d-flex justify-content-between">
                            All Messages
                            <small className="badge  badge-dark float-end pt-1 ms-2">
                              5
                            </small>
                          </h5>
                        </div>
                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center d-flex">
                            <div className>
                              <img
                                className="avatar-40 rounded"
                                src="/public/images/user/01.jpg"
                                alt
                              />
                            </div>
                            <div className="media-body ms-3">
                              <h6 className="mb-0 ">Bini Emma Watson</h6>
                              <small className="float-start font-size-12">
                                13 Jun
                              </small>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center d-flex">
                            <div className>
                              <img
                                className="avatar-40 rounded"
                                src="/public/images/user/02.jpg"
                                alt
                              />
                            </div>
                            <div className="media-body ms-3">
                              <h6 className="mb-0 ">Lorem Ipsum Watson</h6>
                              <small className="float-start font-size-12">
                                20 Apr
                              </small>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center d-flex">
                            <div className>
                              <img
                                className="avatar-40 rounded"
                                src="/public/images/user/03.jpg"
                                alt
                              />
                            </div>
                            <div className="media-body ms-3">
                              <h6 className="mb-0 ">Why do we use it?</h6>
                              <small className="float-start font-size-12">
                                30 Jun
                              </small>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center d-flex">
                            <div className>
                              <img
                                className="avatar-40 rounded"
                                src="/public/images/user/04.jpg"
                                alt
                              />
                            </div>
                            <div className="media-body ms-3">
                              <h6 className="mb-0 ">Variations Passages</h6>
                              <small className="float-start font-size-12">
                                12 Sep
                              </small>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="media align-items-center d-flex">
                            <div className>
                              <img
                                className="avatar-40 rounded"
                                src="/public/images/user/05.jpg"
                                alt
                              />
                            </div>
                            <div className="media-body ms-3">
                              <h6 className="mb-0 ">Lorem Ipsum generators</h6>
                              <small className="float-start font-size-12">
                                5 Dec
                              </small>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <ul className="navbar-list">
              <li>
                <a
                  href="#"
                  className="search-toggle iq-waves-effect d-flex align-items-center"
                >
                  <img
                    src="/public/images/user/1.jpg"
                    className="img-fluid rounded"
                    alt="user"
                  />
                  <div className="caption">
                    <h6 className="mb-0 line-height">Bini Jets</h6>
                    <span className="font-size-12">Available</span>
                  </div>
                </a>
                <div className="iq-sub-dropdown iq-user-dropdown">
                  <div className="iq-card shadow-none m-0">
                    <div className="iq-card-body p-0 ">
                      <div className="bg-primary p-3">
                        <h5 className="mb-0 text-white line-height">
                          Hello Bini Jets
                        </h5>
                        <span className="text-white font-size-12">
                          Available
                        </span>
                      </div>
                      <a
                        href="profile.html"
                        className="iq-sub-card iq-bg-primary-hover"
                      >
                        <div className="media align-items-center d-flex">
                          <div className="rounded iq-card-icon iq-bg-primary">
                            <i className="ri-file-user-line" />
                          </div>
                          <div className="media-body ms-3">
                            <h6 className="mb-0 ">My Profile</h6>
                            <p className="mb-0 font-size-12">
                              View personal profile details.
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="profile-edit.html"
                        className="iq-sub-card iq-bg-primary-hover"
                      >
                        <div className="media align-items-center d-flex">
                          <div className="rounded iq-card-icon iq-bg-primary">
                            <i className="ri-profile-line" />
                          </div>
                          <div className="media-body ms-3">
                            <h6 className="mb-0 ">Edit Profile</h6>
                            <p className="mb-0 font-size-12">
                              Modify your personal details.
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="account-setting.html"
                        className="iq-sub-card iq-bg-primary-hover"
                      >
                        <div className="media align-items-center d-flex">
                          <div className="rounded iq-card-icon iq-bg-primary">
                            <i className="ri-account-box-line" />
                          </div>
                          <div className="media-body ms-3">
                            <h6 className="mb-0 ">Account settings</h6>
                            <p className="mb-0 font-size-12">
                              Manage your account parameters.
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="privacy-setting.html"
                        className="iq-sub-card iq-bg-primary-hover"
                      >
                        <div className="media align-items-center d-flex">
                          <div className="rounded iq-card-icon iq-bg-primary">
                            <i className="ri-lock-line" />
                          </div>
                          <div className="media-body ms-3">
                            <h6 className="mb-0 ">Privacy Settings</h6>
                            <p className="mb-0 font-size-12">
                              Control your privacy parameters.
                            </p>
                          </div>
                        </div>
                      </a>
                      <div className="d-inline-block w-100 text-center p-3">
                        <a
                          className="bg-primary iq-sign-btn"
                          href="sign-in.html"
                          role="button"
                        >
                          Sign out
                          <i className="ri-login-box-line ms-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Topbar;
