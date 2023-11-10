import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Home from './pages/Home';
import Contato from './components/Contato';
import Sobre from './pages/Sobre';
import Projeto from './pages/Projeto';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import Login from './components/Login';
import Dashboard from './components/Dashboard.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './styles/index.css'
import './scss/navbar.scss'
import './scss/footer.scss'
import './scss/blog.scss'
import './scss/contato.scss'
import './scss/notFound.scss'
import './scss/dashboard.scss'
import './scss/sobre.scss'
import './scss/projeto.scss'
import './scss/login.scss'
import './scss/home.scss'
import './scss/_global.scss'
import './scss/_colors.scss'

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    errorElement: <NotFound />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/Contato', element: <Contato /> },
      { path: '/Sobre', element: <Sobre /> },
      { path: '/Projeto', element: <Projeto /> },
      { path: '/Blog', element: <Blog /> },
      { path: '/Login', element: <Login /> },
      { path: '/Login/Dashboard', element: <Dashboard /> }
    ]

  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
