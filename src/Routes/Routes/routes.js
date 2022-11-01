import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Sidebar from "../../Pages/common/Sidebar/Sidebar";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/home/Home";
import Login from '../../Login/Login';
import FAQ from "../../FAQ/FAQ";
import Error from "../../Error/Error";

export const routes = createBrowserRouter([
   {
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element:<Home></Home>,
           loader: () => fetch('http://localhost:5000/Coursedetails')     
        },
        {
            path:'/category/:id',
            element: <Courses></Courses>,
            loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
        },
       
        ]
    },
   
    {
        path:'/Login',
        element: <Login></Login>
    },
    {
        path:'/FAQ',
        element: <FAQ></FAQ>
    },
    
   {
    path:'*',
    element: <Error></Error>
   }
  
])
