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
import AuthProvider from './Providers/AuthProvider.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';
import VisaDetails from './Pages/VisaDetails.jsx';

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
        element:<PrivateRoute><AddVisa></AddVisa></PrivateRoute>
      },
      {
        path:"/all-visas",
        element: <AllVisa></AllVisa>,
        loader :() => fetch("http://localhost:3000/visas"),
      },
      {
        path:"/about",
        element:<About></About>
      },
      
      {
        path:"/my-added-visa",
        element: <PrivateRoute><MyAddedVisa></MyAddedVisa> </PrivateRoute>
      },
      {
        path:"/my-visa-application",
        element:<PrivateRoute><MyVisaApplications></MyVisaApplications></PrivateRoute>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/visas/:id",
        element:<PrivateRoute><VisaDetails></VisaDetails></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:3000/visas/${params.id}`)
      }

    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

