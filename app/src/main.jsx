import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import{ createBrowserRouter, RouterProvider }from"react-router-dom";

//PAGES IMPORTS
import HomePage from './pages/HomePage/Homepage';
import AdminHome from './pages/Admin/AdminHome';
import AdminLogin from './pages/Admin/AdminLogin';
import ApplicationDetails from './pages/Admin/ApplicationDetails';
import Applications from './pages/Admin/Applications';
import CreateScholarship from './pages/Admin/CreateScholarship';
import AddUser from './pages/Admin/CreateUser';
import NewProgram from './pages/Admin/NewProgram';
import ProgramDetails from './pages/Admin/ProgramDetails';
import Programs from './pages/Admin/Programs';
import Apply from './pages/Aplicant/ApplicationPage';
import FemaleFounders from './pages/Aplicant/FemaleFounders';
import Flash from './pages/Aplicant/Flash';
import Plus from './pages/Aplicant/Plus';
import ThanksForApplying from './pages/Aplicant/ThanksForApplying';
import Workshops from './pages/Aplicant/Workshops';

//COMPONENTS IMPORTS 
import NavBar from './components/NavBar/NavBar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar/>,
    children: [

      { path: "/adminHome", element: <AdminHome /> },
      { path: "/login", element: <AdminLogin /> },
      { path: "/application/:id", element: <ApplicationDetails /> },
      { path: "/application", element: <Applications /> },
      { path: "/scholarship", element: <CreateScholarship /> },
      { path: "/user", element: <AddUser /> },
      { path: "/newProgram", element: <NewProgram /> },
      { path: "/program/:id", element: <ProgramDetails /> },
      { path: "/programs", element: <Programs /> },
      //For applicants
      { path: "/", element: <HomePage /> },
      { path: "/apply", element: <Apply /> },
      { path: "/femaleFounders", element: <FemaleFounders /> },
      { path: "/flash", element: <Flash /> },
      { path: "/plus", element: <Plus /> },
      { path: "/thanks", element: <ThanksForApplying /> },
      { path: "/workshops", element: <Workshops /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);
