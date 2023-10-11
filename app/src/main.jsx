// Import Modules
import React from 'react'
import ReactDOM from 'react-dom/client'
// Import Components
// Import Pages
import WelcomePage from "";
import LoginPage from "";
import AdminHome from "AdminHome.jsx";
import NewUserPage from "";
import ProgramsPage from "";
import NewProgramPage from "";
import ProgramPage from "";
import ProgramUpdatePage from "";
import ApplicationListPage from "";
import ApplicantInfoPage from "";
import ScholarshipPage from "";
import ApplicantHome from "ApplicantHome.jsx";
import ApplicationPage from "";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/", element: <WelcomePage /> },
      // Admin Pages
      { path: "/login", element: <LoginPage /> },
      { path: "/admin-home", element: <AdminHomePage /> },
      { path: "/create-account", element: <NewUserPage />},
      { path: "/program", element: <ProgramsPage /> },
      { path: "/new-program", element: <NewProgramPage />},
      { path: "/program/:id", element: <ProgramPage /> },
      // { path: "/program-open", element: </> },
      // { path: "/user", element: < />},
      { path: "/applicant", element: <ApplicationListPage />},
      { path: "/applicant/1", element: <ApplicantInfoPage />},
      { path: "/scholarship", element: <ScholarshipPage />},
      // Applicant Pages
      { path: "/home", element: <ApplicantHomePage/> },
      { path: "/apply", element: <ApplicationPage />},
      
      { path: "*", element: <NotFound404Page />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
