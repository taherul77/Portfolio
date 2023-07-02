import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Page/About";
import Portfolio from "../Page/Portfolio";
import Contact from "../Page/Contact";
import Home from "../Page/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/projects",
          element: <Portfolio></Portfolio>,
        },
      
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
      
      ],
    },

  ]);