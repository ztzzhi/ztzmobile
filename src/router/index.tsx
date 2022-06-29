import React from 'react'
import { useRoutes, Navigate} from 'react-router-dom'

// 公共路由
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import NotPermission from '../pages/NotPermission'

// 页面路由


export default function AppRouter() {
  const routers = useRoutes([
    { path: '/', element: <Navigate to='/login' /> },
    { path: 'login', element: <Login />},
    { path: '404', element: <NotFound />},
    { path: '401', element: <NotPermission />},
    { path: '*', element: <NotFound />},
  ])
  return routers
}
