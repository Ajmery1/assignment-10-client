import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/home/Home";

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
            path:'/'
        }
        

    ]
   } 
])