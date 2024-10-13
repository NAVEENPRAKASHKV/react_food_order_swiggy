import React from "react";
import ReactDOM from "react-dom/client";
import About from "./components/About";
import Contcat from "./components/Contact";
import More from "./components/More";
import Body from "./components/Body";
import Header from "./components/Header";
import Error from "./components/Error";
import MenuCard from "./components/MenuCard"
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet/>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contcat />,
      },
      {
        path: "/more",
        element: <More />,
      },
      {
        path:"/restaurant/:resId",
        element:<MenuCard/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
