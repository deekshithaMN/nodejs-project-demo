import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Stories from './Stories.jsx'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Profile from './Profile.jsx' 
import Messages from './Messages.jsx'
import Notifications from './Notifications.jsx'
import Explore from './Explore.jsx'
import Reels from './Reels.jsx'

const router=createBrowserRouter([


    {
      path:'/',
      element:<App />
    },
    {
      path:'/story',
      element:<Stories />

    },
    {
      path:'/Profile',
      element:<Profile />
    },
    {
      path:'/Messages',
      element:<Messages />
    },
    {
      path:'/Notifications',
      element:<Notifications />
    },
    {
      path:'/Explore',
      element:<Explore />
    },
    {
      path:'/Reels',
      element:<Reels />
    }


])



createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router} />
  
)
