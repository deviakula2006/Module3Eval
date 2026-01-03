import { useState } from 'react'
import {BrowseRouter,Routes,Route} from "react-router-dom"
import Login from './pages/Login'
import AdmindashBoard from './pages/AdminDashboard'
import CustomerDashboard from './pages/CustomerDashboard'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'



function App() {
 

  return (
    <AuthProvider>
      <BrowseRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/admin/dashboard" element=
          {
              <ProtectedRoute role="admin">
          <AdmindashBoard/>
           </ProtectedRoute>
          }/>
          <Route path="/customers/dashboard" element={
            <ProtectedRoute role="customer"><CustomerDashboard/></ProtectedRoute>}/>
         

        </Routes>
        </BrowseRouter>
    </AuthProvider>
  )
}

export default App
