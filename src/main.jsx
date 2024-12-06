import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ErrorPage from './Pages/ErrorPage.jsx';
import Login from './Pages/Login.jsx'
import Home from './Pages/Home.jsx'
import AddVisa from './Pages/AddVisa.jsx'
import AllVisa from './Pages/AllVisa.jsx';
import MyAddedVisa from './Pages/MyAddedVisa.jsx'
import MyVisaApplications from './Pages/MyVisaApplications.jsx'
import Register from './Pages/Register.jsx'
import About from './Pages/About.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/add-visa",
        element:<AddVisa></AddVisa>
      },
      {
        path:"/all-visas",
        element:<AllVisa></AllVisa>
      },
      {
        path:"/about",
        element:<About></About>
      },
      
      {
        path:"/my-added-visa",
        element:<MyAddedVisa></MyAddedVisa>
      },
      {
        path:"/my-visa-application",
        element:<MyVisaApplications></MyVisaApplications>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      },

    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
