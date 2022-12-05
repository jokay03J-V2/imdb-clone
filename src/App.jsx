import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from './pages/Home'
import ErrorPage from './pages/Error'
import { Provider } from 'react-redux'
import { store } from "./store"
function App() {

  const routes = createBrowserRouter([{ path: "", element: <HomePage></HomePage>}, { path: "*", element: <ErrorPage></ErrorPage>}])

  return <div className='h-screen w-screen'><RouterProvider router={routes}></RouterProvider></div>
}

export default App
