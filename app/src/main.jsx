import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
//import './index.css'
//import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import NavBar from './components/NavBar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
)



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <NavBar/>,
//     children: [
//       { path: '/', element: <HomePage /> },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    {/* <AuthProvider> */}
    {/* Wrap app in router provider to render  */}
     // <RouterProvider router={router} />
    {/* </AuthProvider> */}
 // </React.StrictMode>,
//)