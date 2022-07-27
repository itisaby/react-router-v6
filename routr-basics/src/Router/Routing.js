import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Navbar from '../Components/Navbar'
import About from '../Pages/About'
import Dashboard from '../Pages/Dashboard'
import Error from '../Pages/Error'
import Hero from '../Pages/Hero'
import Login from '../Pages/Login'
import Products from '../Pages/Products'
import SharedLayout from '../Pages/SharedLayout'
import SharedProductLayout from '../Pages/SharedProductLayout'
import SingleProduct from '../Pages/SingleProduct'
import ProtectedRoute from './ProtectedRoute'

function Routing() {
    const [user, setUser] = useState(null)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route path="product" element={<SharedProductLayout />}>
                        <Route index element={<Products />} />
                        <Route path=":productId" element={<SingleProduct />} />
                    </Route>
                    <Route index element={<Hero />} />
                    <Route path="login" element={<Login setUser={setUser}></Login>} />
                    <Route path="dashboard" element={
                        <ProtectedRoute user={user}>
                            <Dashboard user={user} />
                        </ProtectedRoute>
                    } />
                    <Route path="about" element={<ProtectedRoute user={user}>
                        <About />
                    </ProtectedRoute>} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default Routing