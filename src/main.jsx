import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import{ createBrowserRouter, RouterProvider }from"react-router-dom";

//PAGES IMPORTS
import HomePage from './pages/HomePage/HomePage';
import AdminHome from './pages/Admin/AdminHome';
import AdminLogin from './pages/Admin/AdminLogin';
import ApplicationDetails from './pages/Admin/ApplicationDetails';
import CreateUser from './pages/Admin/CreateUser';
import NewProgram from './pages/Admin/NewProgram';
import ProgramDetails from './pages/Admin/ProgramDetails';
import Programs from './pages/Admin/Programs';
import Applicants from './pages/Admin/Applicants';
import Scholarships from './pages/Admin/Scholarships';
import Apply from './pages/Aplicant/ApplicationPage';
import ThanksForApplying from './pages/Aplicant/ThanksForApplying';
import { AuthProvider } from './components/AuthProvider/AuthProvider';
import ProgramOpenPage from './pages/Aplicant/ProgramOpenPage';
import ProgramOpenDetails from './pages/Aplicant/ProgramOpenDetailsPage';

//COMPONENTS IMPORTS
import NavBarResponsive from './components/NavBar/NavBarResponsive.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBarResponsive />,
    children: [

      { path: "/adminHome", element: <AdminHome /> },
      { path: "/login", element: <AdminLogin /> },
      { path: "/application/:id/:programId", element: <ApplicationDetails /> },
      { path: "/user", element: <CreateUser /> },
      { path: "/newProgram", element: <NewProgram /> },
      { path: "/program/:id", element: <ProgramDetails /> }, 
      { path: "/programs", element: <Programs /> },
      { path: "/applicants", element: <Applicants /> },
      { path: "/scholarships", element: <Scholarships /> },
      { path: "/", element: <HomePage /> },
      { path: "/programOpen", element: <ProgramOpenPage /> },
      { path: "/programOpen/:id", element: <ProgramOpenDetails /> },
      { path: "/apply", element: <Apply /> },
      { path: "/thanks", element: <ThanksForApplying /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
);
