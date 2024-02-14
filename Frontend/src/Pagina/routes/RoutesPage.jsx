import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'

const RoutesPage = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/*' element={<Navigate to="/" />} />
        </Routes >
    )
}

export default RoutesPage
