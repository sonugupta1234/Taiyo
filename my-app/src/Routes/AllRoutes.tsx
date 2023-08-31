import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ContactPage from '../Pages/ContactPage'
import { ChartsMaps } from '../Pages/ChartsMaps'


export const AllRoutes = () => {
  return (
    <>
    <Routes>
       <Route path="/" element={<ContactPage />} />
       <Route path="/charts" element={<ChartsMaps />} />
    </Routes>
    </>
  )
}
