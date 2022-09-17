import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Account from '../components/pages/accounts/Account'
import Profile from '../components/pages/accounts/Profile'
import AddEditRole from '../components/pages/accounts/roles/AddEditRole'
import Role from '../components/pages/accounts/roles/Role'
import Home from '../components/pages/Home'
import Login from '../components/pages/Login'
import Register from '../components/pages/Register'
import User from '../components/pages/accounts/users/User'
import AddEditUser from '../components/pages/accounts/users/AddEditUser'
import AddEditProduct from '../components/pages/accounts/products/AddEditProduct'
import Product from '../components/pages/accounts/products/Product'

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/accounts' element={<Account />}>
            <Route path="profile" element={<Profile />} />

            <Route path="users" element={<User />} />
            <Route path="add-user" element={<AddEditUser />} />
            <Route path="edit-user/:id" element={<AddEditUser />} />
            
            <Route path="roles" element={<Role />} />
            <Route path="add-role" element={<AddEditRole />} />
            <Route path="edit-role/:id" element={<AddEditRole />} />

            <Route path="products" element={<Product/>} />
            <Route path="add-product" element={<AddEditProduct />} />
            <Route path="edit-product/:id" element={<AddEditProduct />} />           

        </Route>
    </Routes>
  )
}

export default Router