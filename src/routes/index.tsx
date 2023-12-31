import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '~/layouts'
import { HomePage } from '~/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'home',
        element: <HomePage />
      }
    ]
  }
])
