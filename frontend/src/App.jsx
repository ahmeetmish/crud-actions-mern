import { Routes, Route } from "react-router-dom"

import Home from "./pages/home"
import Create from './pages/create'
import Details from './pages/details'
import Edit from './pages/edit'

export default function App() {
  return (
    <Routes>
      <Route index path='/' element={ <Home /> } />
      <Route path='/books/create' element={ <Create /> } />
      <Route path='/books/details/:id' element={ <Details /> } />
      <Route path='/books/edit/:id' element={ <Edit /> } />
    </Routes>
  )
}