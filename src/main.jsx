import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home/Home';
import CardDetails from './Components/CardDetails';
import AllCollages from './Pages/AllCollages/AllCollages';
import Admission from './Pages/Admission/Admission';
import AuthProvider from './Provider/AuthProvider';
import Login from './Login/Login';
import Register from './Register/Register';
import ErrorPage from './Pages/Error/ErrorPage';



const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/AllCollages',
        element: <AllCollages></AllCollages>,
        loader: () => fetch(`https://collage-facilities-server.vercel.app/collages`)
      },
      {
        path: '/admission',
        element: <Admission></Admission>,
        loader: () => fetch(`https://collage-facilities-server.vercel.app/collages`)
      },
      {
        path: '/collages/:id',
        element: <CardDetails></CardDetails>,
        loader: ({ params }) => fetch(`https://collage-facilities-server.vercel.app/collages/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='max-w-[1350px] mx-auto'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
