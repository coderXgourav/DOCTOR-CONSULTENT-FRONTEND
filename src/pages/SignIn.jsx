import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div id="loading">
        <div id="loading-center"></div>
      </div>
      <section className="sign-in-page">
        <div className="container sign-in-page-bg mt-5 mb-md-5 mb-0 p-0">
          <div className="row no-gutters">
            <div className="col-md-6 text-center">
              <div className="sign-in-detail text-white">
                <a className="sign-in-logo mb-5" href="index.html">
                  <img
                    src="images/logo-white.png"
                    className="img-fluid"
                    alt="logo"
                  />
                </a>
                <div
                  className="owl-carousel"
                  data-autoplay="true"
                  data-loop="true"
                  data-nav="false"
                  data-dots="true"
                  data-items={1}
                  data-items-laptop={1}
                  data-items-tab={1}
                  data-items-mobile={1}
                  data-items-mobile-sm={1}
                  data-margin={0}
                >
                  <div className="item">
                    <img
                      src="images/login/1.png"
                      className="img-fluid mb-4"
                      alt="logo"
                    />
                    <h4 className="mb-1 text-white">Manage your orders</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>
                  </div>
                  <div className="item">
                    <img
                      src="images/login/2.png"
                      className="img-fluid mb-4"
                      alt="logo"
                    />
                    <h4 className="mb-1 text-white">Manage your orders</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>
                  </div>
                  <div className="item">
                    <img
                      src="images/login/3.png"
                      className="img-fluid mb-4"
                      alt="logo"
                    />
                    <h4 className="mb-1 text-white">Manage your orders</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 position-relative">
              <div className="sign-in-from">
                <h1 className="mb-0">Sign in</h1>
                <p>
                  Enter your email address and password to access admin panel.
                </p>
                <form className="mt-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="mb-2">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control mb-0"
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="d-flex justify-content-between my-2">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <Link to="/admin/dashboard" className="float-end">
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    type="password"
                    className="form-control mb-0"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                  <div className="d-flex w-100 justify-content-between  align-items-center mt-3 w-100">
                    <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        Remember Me
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary float-end">
                      Sign in
                    </button>
                  </div>
                  <div className="sign-info">
                    <span className="dark-color d-inline-block line-height-2">
                      Do not have an account? <a href="sign-up.html">Sign up</a>
                    </span>
                    <ul className="iq-social-media">
                      <li>
                        <a href="#">
                          <i className="ri-facebook-box-line" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-twitter-line" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-instagram-line" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SignIn;
