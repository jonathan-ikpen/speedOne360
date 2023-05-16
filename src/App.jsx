import { React, useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";
import Container from "./components/Container/index.jsx";
import Home from "./pages/home.jsx";
import Faq from "./pages/faq.jsx";
import Register from "./pages/register.jsx";
import Service from "./service.jsx";
import SpeedTest from "./pages/speed.jsx";

const Layout = () => {
  // const [showLogin, setshowLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <SpeedTest targetSpeed={100} />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Header showLogin={true} />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

const Registerlayout = () => {
  return (
    <>
      <Header showLogin={false} />
      <Register />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, //Use this for pages that will contains both header and footer
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "services",
        element: <Service />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
  {
    path: "/register",
    element: <Registerlayout />,
  },
  {
    path: "/speed",
    element: <SpeedTest />,
  },

  // {
  //   path: "/register",
  //   element: <Register />,
  // },
]);

function App() {
  return (
    <div className="App">
      <Container>
        <RouterProvider router={router} />
      </Container>
    </div>
  );
}

export default App;
