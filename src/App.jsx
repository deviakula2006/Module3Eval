import { useState } from 'react'
import {BrowseRouter,Routes,Route} from "react-router-dom"
import Login from './pages/Login'
import Admindashboard from './pages/AdminDashboard'
import CustomerDashboard from './pages/CustomerDashboard'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'



function App() {
 

  return (
    <AuthProvider>
      <BrowseRouter>
      <Routes>
        <Route path="/" element={<login/>}/>
        <Route path="/admin/dashboard" element=
          {
              <ProtectedRoute role="admin">
          <Admindashboard/>
           </ProtectedRoute>
          }/>
          <Route path="/customer/dashboard" element={
            <ProtectedRoute role="customer"><CustomerDashboard/></ProtectedRoute>}/>
         

        </Routes>
        </BrowseRouter>
    </AuthProvider>
  )
}

export default App
