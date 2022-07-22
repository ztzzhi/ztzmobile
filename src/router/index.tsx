import { useRoutes } from "react-router-dom"

// 公共路由
import Login from "../pages/Login"
import Index from "@/containers/layout/index"
import Home from "@/pages/Home/index"
import Shop from "@/pages/Shop/index"
import Notice from "@/pages/Notice/index"
import Mine from "@/pages/Mine/index"
import Chat from "@/pages/Chat/index"
import NotFound from "../pages/NotFound"
import NotPermission from "../pages/NotPermission"

// 页面路由

export default function AppRouter() {
  const routers = useRoutes([
    {
      path: "/",
      element: <Index />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "shop",
          element: <Shop />
        },
        {
          path: "notice",
          element: <Notice />
        },
        {
          path: "mine",
          element: <Mine />
        }
      ]
    },

    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/chat:id",
      element: <Chat />
    },
    { path: "/404", element: <NotFound /> },
    { path: "/401", element: <NotPermission /> },
    { path: "*", element: <NotFound /> }
  ])
  return routers
}
