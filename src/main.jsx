import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import{ createBrowserRouter, RouterProvider }from"react-router-dom";

//PAGES IMPORTS
import HomePage from './pages/HomePage/HomePage';
import AdminHome from './pages/Admin/AdminHome';
import AdminLogin from './pages/Admin/AdminLogin';
import ApplicationDetails from './pages/Admin/ApplicationDetails';
import Applications from './pages/Admin/Applications';
import CreateUser from './pages/Admin/CreateUser';
import NewProgram from './pages/Admin/NewProgram';
import ProgramDetails from './pages/Admin/ProgramDetails';
import Programs from './pages/Admin/Programs';
import Apply from './pages/Aplicant/ApplicationPage';
import ThanksForApplying from './pages/Aplicant/ThanksForApplying';
import { AuthProvider } from './components/AuthProvider/AuthProvider';
import ProgramOpenPage from './pages/Aplicant/ProgramOpenPage';

//COMPONENTS IMPORTS 
import NavBar from './components/NavBar/NavBar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar/>,
    children: [

      { path: "/adminHome", element: <AdminHome /> },
      { path: "/login", element: <AdminLogin /> },
      { path: "/application/:id/:programId", element: <ApplicationDetails /> },
      { path: "/application", element: <Applications /> },
      { path: "/user", element: <CreateUser /> },
      { path: "/newProgram", element: <NewProgram /> },
      { path: "/program/:id", element: <ProgramDetails /> }, ///Changing to hardcoded 1 to test scholarship component. will need to change to /program/:id
      { path: "/programs", element: <Programs /> },
      //For applicants
      { path: "/", element: <HomePage /> },
      { path: "/programOpen", element: <ProgramOpenPage /> },
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
