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
                    <a href="add-doctor.html">
                      <i className="ri-user-add-fill" /> Add Doctor
                    </a>
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
              <li className="iq-menu-title">
                <i className="ri-subtract-line" />
                <span>Components</span>
              </li>
              <li>
                <a href="javascript:void(0);" className="iq-waves-effect">
                  <i className="ri-apps-fill" />
                  <span>UI Elements</span>
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
                    <a href="ui-alerts.html">
                      <i className="ri-alert-fill" />
                      Alerts
                    </a>
                  </li>
                  <li>
                    <a href="ui-badges.html">
                      <i className="ri-building-3-fill" />
                      Badges
                    </a>
                  </li>
                  <li>
                    <a href="ui-breadcrumb.html">
                      <i className="ri-guide-fill" />
                      Breadcrumb
                    </a>
                  </li>
                  <li>
                    <a href="ui-buttons.html">
                      <i className="ri-checkbox-blank-fill" />
                      Buttons
                    </a>
                  </li>
                  <li>
                    <a href="ui-cards.html">
                      <i className="ri-bank-card-fill" />
                      Cards
                    </a>
                  </li>
                  <li>
                    <a href="ui-carousel.html">
                      <i className="ri-slideshow-4-fill" />
                      Carousel
                    </a>
                  </li>
                  <li>
                    <a href="ui-embed-video.html">
                      <i className="ri-movie-fill" />
                      Video
                    </a>
                  </li>
                  <li>
                    <a href="ui-grid.html">
                      <i className="ri-grid-fill" />
                      Grid
                    </a>
                  </li>
                  <li>
                    <a href="ui-/public/images.html">
                      <i className="ri-image-fill" />
                      /public/images
                    </a>
                  </li>
                  <li>
                    <a href="ui-list-group.html">
                      <i className="ri-file-list-fill" />
                      list Group
                    </a>
                  </li>
                  <li>
                    <a href="ui-modal.html">
                      <i className="ri-checkbox-blank-fill" />
                      Modal
                    </a>
                  </li>
                  <li>
                    <a href="ui-notifications.html">
                      <i className="ri-notification-3-fill" />
                      Notifications
                    </a>
                  </li>
                  <li>
                    <a href="ui-pagination.html">
                      <i className="ri-more-fill" />
                      Pagination
                    </a>
                  </li>
                  <li>
                    <a href="ui-popovers.html">
                      <i className="ri-folder-shield-fill" />
                      Popovers
                    </a>
                  </li>
                  <li>
                    <a href="ui-progressbars.html">
                      <i className="ri-battery-low-fill" />
                      Progressbars
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
                  <i className="ri-device-fill" />
                  <span>Forms</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right" />
                </a>
                <ul className="iq-submenu">
                  <li>
                    <a href="form-layout.html">
                      <i className="ri-tablet-fill" />
                      Form Elements
                    </a>
                  </li>
                  <li>
                    <a href="form-validation.html">
                      <i className="ri-device-fill" />
                      Form Validation
                    </a>
                  </li>
                  <li>
                    <a href="form-switch.html">
                      <i className="ri-toggle-fill" />
                      Form Switch
                    </a>
                  </li>
                  <li>
                    <a href="form-chechbox.html">
                      <i className="ri-chat-check-fill" />
                      Form Checkbox
                    </a>
                  </li>
                  <li>
                    <a href="form-radio.html">
                      <i className="ri-radio-button-fill" />
                      Form Radio
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0);" className="iq-waves-effect">
                  <i className="ri-file-word-fill" />
                  <span>Forms Wizard</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right" />
                </a>
                <ul className="iq-submenu">
                  <li>
                    <a href="form-wizard.html">
                      <i className="ri-anticlockwise-fill" />
                      Simple Wizard
                    </a>
                  </li>
                  <li>
                    <a href="form-wizard-validate.html">
                      <i className="ri-anticlockwise-2-fill" />
                      Validate Wizard
                    </a>
                  </li>
                  <li>
                    <a href="form-wizard-vertical.html">
                      <i className="ri-clockwise-fill" />
                      Vertical Wizard
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0);" className="iq-waves-effect">
                  <i className="ri-table-fill" />
                  <span>Table</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right" />
                </a>
                <ul className="iq-submenu">
                  <li>
                    <a href="tables-basic.html">
                      <i className="ri-table-fill" />
                      Basic Tables
                    </a>
                  </li>
                  <li>
                    <a href="data-table.html">
                      <i className="ri-table-2" />
                      Data Table
                    </a>
                  </li>
                  <li>
                    <a href="table-editable.html">
                      <i className="ri-archive-drawer-fill" />
                      Editable Table
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0);" className="iq-waves-effect">
                  <i className="ri-bar-chart-2-fill" />
                  <span>Charts</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right" />
                </a>
                <ul className="iq-submenu">
                  <li>
                    <a href="charts.html">
                      <i className="ri-file-chart-fill" />
                      Chart Page
                    </a>
                  </li>
                  <li>
                    <a href="echart.html">
                      <i className="ri-bar-chart-fill" />
                      ECharts
                    </a>
                  </li>
                  <li>
                    <a href="chart-am.html">
                      <i className="ri-bar-chart-box-fill" />
                      Am Charts
                    </a>
                  </li>
                  <li>
                    <a href="chart-apex.html">
                      <i className="ri-pie-chart-box-fill" />
                      Apex Chart
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0);" className="iq-waves-effect">
                  <i className="ri-copper-coin-fill" />
                  <span>Icons</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right" />
                </a>
                <ul className="iq-submenu">
                  <li>
                    <a href="icon-dripicons.html">
                      <i className="ri-stack-fill" />
                      Dripicons
                    </a>
                  </li>
                  <li>
                    <a href="icon-fontawesome-5.html">
                      <i className="ri-facebook-fill" />
                      Font Awesome 5
                    </a>
                  </li>
                  <li>
                    <a href="icon-lineawesome.html">
                      <i className="ri-keynote-fill" />
                      line Awesome
                    </a>
                  </li>
                  <li>
                    <a href="icon-remixicon.html">
                      <i className="ri-remixicon-fill" />
                      Remixicon
                    </a>
                  </li>
                  <li>
                    <a href="icon-unicons.html">
                      <i className="ri-underline" />
                      unicons
                    </a>
                  </li>
                </ul>
              </li>
              <li className="iq-menu-title">
                <i className="ri-subtract-line" />
                <span>Pages</span>
              </li>
              <li>
                <a href="javascript:void(0);" className="iq-waves-effect">
                  <i className="ri-server-fill" />
                  <span>Authentication</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right" />
                </a>
                <ul className="iq-submenu">
                  <li>
                    <a href="sign-in.html">
                      <i className="ri-login-box-fill" />
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="sign-up.html">
                      <i className="ri-logout-box-fill" />
                      Register
                    </a>
                  </li>
                  <li>
                    <a href="pages-recoverpw.html">
                      <i className="ri-record-mail-fill" />
                      Recover Password
                    </a>
                  </li>
                  <li>
                    <a href="pages-confirm-mail.html">
                      <i className="ri-chat-check-fill" />
                      Confirm Mail
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
              <li>
                <a href="javascript:void(0);" className="iq-waves-effect">
                  <i className="ri-map-pin-2-fill" />
                  <span>Maps</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right" />
                </a>
                <ul className="iq-submenu">
                  <li>
                    <a href="pages-map.html">
                      <i className="ri-google-fill" />
                      Google Map
                    </a>
                  </li>
                  <li>
                    <a href="vector.html">
                      <i className="ri-map-pin-range-line" />
                      Vector Map
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0);" className="iq-waves-effect">
                  <i className="ri-folders-fill" />
                  <span>Extra Pages</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right" />
                </a>
                <ul className="iq-submenu">
                  <li>
                    <a href="pages-timeline.html">
                      <i className="ri-map-pin-time-fill" />
                      Timeline
                    </a>
                  </li>
                  <li>
                    <a href="pages-invoice.html">
                      <i className="ri-question-answer-fill" />
                      Invoice
                    </a>
                  </li>
                  <li>
                    <a href="blank-page.html">
                      <i className="ri-checkbox-blank-fill" />
                      Blank Page
                    </a>
                  </li>
                  <li>
                    <a href="pages-error.html">
                      <i className="ri-error-warning-fill" />
                      Error 404
                    </a>
                  </li>
                  <li>
                    <a href="pages-error-500.html">
                      <i className="ri-error-warning-fill" />
                      Error 500
                    </a>
                  </li>
                  <li>
                    <a href="pages-pricing.html">
                      <i className="ri-price-tag-3-fill" />
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="pages-pricing-one.html">
                      <i className="ri-price-tag-2-fill" />
                      Pricing 1
                    </a>
                  </li>
                  <li>
                    <a href="pages-maintenance.html">
                      <i className="ri-git-repository-commits-fill" />
                      Maintenance
                    </a>
                  </li>
                  <li>
                    <a href="pages-comingsoon.html">
                      <i className="ri-run-fill" />
                      Coming Soon
                    </a>
                  </li>
                  <li>
                    <a href="pages-faq.html">
                      <i className="ri-compasses-2-fill" />
                      Faq
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
