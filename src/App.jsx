
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Components/Layouts/LayoutOne'
import Home from './Pages/Home'
import LayoutTwo from './Components/Layouts/LayoutTwo'
import Register from './Components/Register/Register'
import app from './firebase.config'
import { ToastContainer } from 'react-toastify'
import LogIn from './Components/Register/LogIn/LogIn'

function App() {
  const myPath = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* ============ LayoutOne ==================== */}
        <Route path='/' element={<LayoutOne/>}>
          <Route index element={<Home/>}/>
        </Route>
        {/* ============ LayoutTwo ==================== */}
        <Route path='/LayoutTwo' element={<LayoutTwo/>} />
          <Route index element={<Register/>} />
          <Route path='/LayoutTwo/LogIn' element={<LogIn/>} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={myPath}/>
      <ToastContainer />
    </>
  )
}

export default App
