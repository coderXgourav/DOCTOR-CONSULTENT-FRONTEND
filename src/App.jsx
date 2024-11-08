import SignIn from "./pages/SignIn";
import Dashboard from "./pages/dashboard/Dashboard";
import ViewDoctors from "./pages/dashboard/doctor/ViewDoctors";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
function App() {
  return (
    <>
      <Helmet>
        <script src="/js/jquery.min.js" type="text/javascript" />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/admin" element={<SignIn />}></Route>
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin/view-doctors" element={<ViewDoctors />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
