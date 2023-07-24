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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/AllCollages',
        element: <AllCollages></AllCollages>,
        loader: () => fetch(`http://localhost:5000/collages`)
      },
      {
        path: '/admission',
        element: <Admission></Admission>,
        loader: () => fetch(`http://localhost:5000/collages`)
      },
      {
        path:'/collages/:id',
        element: <CardDetails></CardDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/collages/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-[1350px] mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
