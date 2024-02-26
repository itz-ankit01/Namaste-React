import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

// not using key(not acceptable) <<<< use index as key(bad practice) <<<<< use id as key (best practice)

// code splitting
// chunking
// lazy loading
// on demand loading
// dynamic import
// dynamic bundling, all are same

const Grocery = lazy(() => import("./components/Grocery"));

const Applayout = () => {
  // Authentication
  const [userName, setUserName] = useState();

  useEffect(() => {
    // Make an API Call to
    const data = {
      name: "Ankit Agnihotri",
    };
    setUserName(data.name);
  }, []);

  return (
    // Default value
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      {/* Ankit Agnihotri */}
      <div className="app">
        {/* <UserContext.Provider value={{ loggedInUser: "RM10" }}> */}
          {/* RM10 */}
          <Header />
        {/* </UserContext.Provider> */}
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
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
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
