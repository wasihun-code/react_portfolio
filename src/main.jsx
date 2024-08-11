import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'


import App from './App.jsx'
import './index.css'
import Contact from './components/Contact.jsx'
import AllProjects from './components/AllProjects.jsx'
import ErrorPage from './pages/error-page.jsx'
import HomePage from './pages/HomePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [ 
      {
        index: true, // This will render the home page on '/'
        element: <HomePage />,
      },
      {
        path: 'home',
        element: <HomePage />, // This will render the home page on '/home'
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'projects',
        element: <AllProjects />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
