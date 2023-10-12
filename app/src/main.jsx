// Import Modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
//import './index.css'



// Import Components
// Import Pages
// import WelcomePage from "";
// import LoginPage from "";
// import AdminHomePage from "";
// import NewUserPage from "";
  import NotFound404Page from "./pages/NotFound404"
  import ProgramsPage from "./pages/Admin/ProgramsPage/ProgramsPage.jsx";
  import NewProgramPage from "./pages/Admin/NewProgramPage/NewProgramPage.jsx";
  import ProgramPage from "./pages/Admin/ProgramPage/ProgramPage.jsx";
// import ProgramUpdatePage from "";
// import ApplicationListPage from "";
// import ApplicantInfoPage from "";
// import ScholarshipPage from "";
// import ApplicantHomePage from "";
// import ApplicationPage from "";

const router = createBrowserRouter([
  {
    path: "/",
    //element: <NavBar />,
    children: [
      //{ path: "/", element: <WelcomePage /> },
      // Admin Pages
      //{ path: "/login", element: <LoginPage /> },
      //{ path: "/admin-home", element: <AdminHomePage /> },
      // { path: "/create-account", element: <NewUserPage />},
      { path: "/program", element: <ProgramsPage /> },
      { path: "/new-program", element: <NewProgramPage />},
      { path: "/program/:id", element: <ProgramPage /> },
      // { path: "/program-open", element: </> },
      // { path: "/user", element: < />},
      //{ path: "/applicant", element: <ApplicationListPage />},
     // { path: "/applicant/1", element: <ApplicantInfoPage />},
     // { path: "/scholarship", element: <ScholarshipPage />},
      // Applicant Pages
      //{ path: "/home", element: <ApplicantHomePage/> },
      //{ path: "/apply", element: <ApplicationPage />},
      
      { path: "*", element: <NotFound404Page />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
