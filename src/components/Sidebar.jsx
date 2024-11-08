import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="iq-sidebar">
        <div className="iq-sidebar-logo d-flex justify-content-between">
          <a href="index.html">
            <img src="/public/images/logo.png" className="img-fluid" alt />
            <span>XRay</span>
          </a>
          <div className="iq-menu-bt-sidebar">
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
          </div>
        </div>
        <div id="sidebar-scrollbar">
          <nav className="iq-sidebar-menu">
            <ul className="iq-menu">
              <li className="iq-menu-title">
                <i className="ri-subtract-line" />
                {/* <span>Home</span> */}
              </li>
              <li>
                <Link to="/admin/dashboard" className="iq-waves-effect">
                  <i className="ri-hospital-fill" />
                  <span> Dashboard</span>
                </Link>
              </li>

              {/* <li className="iq-menu-title">
                <i className="ri-subtract-line" />
                <span>Apps</span>
              </li> */}

              <li>
                <a href="javascript:void(0);" className="iq-waves-effect">
                  <i className="ri-user-3-fill" />
                  <span>Doctors</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right" />
                </a>
                <ul className="iq-submenu">
                  <li>
                    <Link to="/admin/view-doctors">
                      <i className="ri-file-list-fill" />
                      All Doctors
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/add-doctor">
                      <i className="ri-user-add-fill" /> Add Doctor
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0);" className="iq-waves-effect">
                  <i className="ri-user-3-fill" />
                  <span>Patient</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right" />
                </a>
                <ul className="iq-submenu">
                  <li>
                    <a href="doctor-list.html">
                      <i className="ri-file-list-fill" />
                      All Patient
                    </a>
                  </li>
                  <li>
                    <a href="add-doctor.html">
                      <i className="ri-user-add-fill" /> Add Patient
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0);" className="iq-waves-effect">
                  <i className="ri-apps-fill" />
                  <span>Appointments </span>
                  <i className="ri-arrow-right-s-line iq-arrow-right" />
                </a>
                <ul className="iq-submenu">
                  <li>
                    <a href="ui-colors.html">
                      <i className="ri-font-color" />
                      colors
                    </a>
                  </li>
                  <li>
                    <a href="ui-typography.html">
                      <i className="ri-text" />
                      Typography
                    </a>
                  </li>

                  <li>
                    <a href="ui-tabs.html">
                      <i className="ri-database-fill" />
                      Tabs
                    </a>
                  </li>
                  <li>
                    <a href="ui-tooltips.html">
                      <i className="ri-record-mail-fill" />
                      Tooltips
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0);" className="iq-waves-effect">
                  <i className="ri-mail-open-fill" />
                  <span>Email</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right" />
                </a>
                <ul className="iq-submenu">
                  <li>
                    <a href="app/index.html">
                      <i className="ri-inbox-fill" />
                      Inbox
                    </a>
                  </li>
                  <li>
                    <a href="app/email-compose.html">
                      <i className="ri-edit-2-fill" />
                      Email Compose
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="calendar.html" className="iq-waves-effect">
                  <i className="ri-calendar-event-fill" />
                  <span>Calendar</span>
                </a>
              </li>
              <li>
                <a href="chat.html" className="iq-waves-effect">
                  <i className="ri-message-fill" />
                  <span>Chat</span>
                </a>
              </li>

              <li>
                <a href="javascript:void(0);" className="iq-waves-effect">
                  <i className="ri-server-fill" />
                  <span>Authentication</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right" />
                </a>
                <ul className="iq-submenu">
                  <li>
                    <a href="pages-recoverpw.html">
                      <i className="ri-record-mail-fill" />
                      Change Password
                    </a>
                  </li>
                  <li>
                    <a href="pages-lock-screen.html">
                      <i className="ri-file-lock-fill" />
                      Lock Screen
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="p-3" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
