import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './main.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/Homepage';
import NavBar from './components/NavBar/NavBar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
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
//   <React.StrictMode>
    {/* <AuthProvider> */}
    {/* Wrap app in router provider to render  */}
      {/* <RouterProvider router={router} /> */}
    {/* </AuthProvider> */}
  {/* </React.StrictMode> */}
{/* ) */}