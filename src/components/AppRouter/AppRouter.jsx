import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {HomePage} from '../../Pages/HomePage/HomePage';
import {ProductPage} from "../../Pages/ProductPage/ProductPage";
import{ CheckoutPage } from "../../Pages/CheckoutPage/CheckoutPage";
import {LoginPage} from "../../Pages/LoginPage/LoginPage";
import { NotFoundPage } from "../../Pages/NotFoundPage/NotFoundPage";




export const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<HomePage/>}></Route>
        <Route path='products' element={<ProductPage/>}></Route>
        <Route path='checkout' element={<CheckoutPage/>}></Route>
        <Route path='login' element={<LoginPage/>}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  )
}
