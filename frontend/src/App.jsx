import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Arrivals from "./assets/pages/Arrivals";
import Catalog from "./assets/pages/Catalog";
import Shop from "./assets/pages/Shop";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import Layout from "./assets/components/Layout";
import Admin from "./assets/pages/Admin/Admin";
import ErrorPage from "./assets/pages/ErrorPage";
import Basket from "./assets/pages/Basket";
import Home from "./assets/pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/arrivals",
          element: <Arrivals />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/catalog",
          element: <Catalog />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/basket",
          element: <Basket />,
        },
        {
          path: "/*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
