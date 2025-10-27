import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import About from './routes/About.jsx'
import Counter from './routes/projects/counter.jsx'
import ToDo from './routes/projects/todo.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {path:'/reactDemo', element:<App/>},
  {path:'/about', element:<About/>},
  {path:'/projects/counter', element:<Counter/>},
  {path:'/projects/todo', element:<ToDo/>}

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
