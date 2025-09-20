import { createBrowserRouter } from "react-router-dom";

import App from "./App"; //------ < Pagina importada
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Sobre from "./pages/Sobre";
import PaginaErro from "./pages/PaginaErro";
import RotasProtegidas from "./pages/RotasProtegidas";
import ResetarSenha from "./pages/ResetarSenha";

const router = createBrowserRouter([

  {
    path: "/",
    element: <App/>,
    errorElement: <PaginaErro/>,
    children: [
      {
          path: "/login",
          element: <Login />,
      },
      {
        path: "resetar",
        element: <ResetarSenha/>
      }

    ]

  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/",
    element: <RotasProtegidas />,
    errorElement: <PaginaErro />,
    children: [
      ,
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cadastro",
        element: <Cadastro />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
    ],
  },
]);

export default router;
