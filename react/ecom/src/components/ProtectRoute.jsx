
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectRoute = ({ children }) => {
    let ctx = useSelector((state) => state.auth)

    if (!ctx.isLoggedIn) {
        return <Navigate to="/login" replace />
    } else {
        return children
    }
}

export default ProtectRoute
