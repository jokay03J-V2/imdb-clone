import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from './pages/Home'
import ErrorPage from './pages/Error'
import SearchPage from './pages/Search'
function App() {

  const routes = createBrowserRouter([{ path: "/imdb-clone/", element: <HomePage></HomePage>}, { path: "/imdb-clone/search", element: <SearchPage></SearchPage>}, { path: "*", element: <ErrorPage></ErrorPage>}])

  return <div className='h-screen w-screen'><RouterProvider router={routes}></RouterProvider></div>
}

export default App
