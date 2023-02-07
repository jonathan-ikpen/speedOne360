import { React, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";
import Container from "./components/Container/index.jsx";
import Home from "./pages/Home/home.jsx";
import Register from "./pages/Register/";

const Layout = () => {
  // const [showLogin, setshowLogin] = useState(true);
  return (
    <>
      <Header showLogin={true} />
      <Outlet />
      <Footer />
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
    ],
  },
  {
    path: "/Register",
    element: <Registerlayout />,
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
