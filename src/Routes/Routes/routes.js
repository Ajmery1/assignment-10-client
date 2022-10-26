import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Sidebar from "../../Pages/common/Sidebar/Sidebar";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/home/Home";
import Login from '../../Login/Login';
import FAQ from "../../FAQ/FAQ";

export const routes = createBrowserRouter([
   {
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element:<Home></Home> 
        },
        {
            path:'/category/:id',
            element: <Courses></Courses>
        },
        {
            path:'/Login',
            element: <Login></Login>
        },
        {
            path:'/FAQ',
            element: <FAQ></FAQ>
        }
        
    ]
    
   } 
  
])