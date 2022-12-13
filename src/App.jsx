import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from './pages/Home'
import ErrorPage from './pages/NotFound'
import SearchPage from './pages/Search'
import ErrorBoundary from './pages/ErrorBoundary'
function App() {

  const routes = createBrowserRouter([
    { path: "/imdb-clone/", element: <HomePage></HomePage>, errorElement: <ErrorBoundary></ErrorBoundary> },
    { path: "/imdb-clone/search", element: <SearchPage></SearchPage>, errorElement: <ErrorBoundary></ErrorBoundary> },
    { path: "*", element: <ErrorPage></ErrorPage>, errorElement: <ErrorBoundary></ErrorBoundary> }
  ]);

  return <div className='h-screen w-full'><RouterProvider router={routes}></RouterProvider></div>
}

export default App
