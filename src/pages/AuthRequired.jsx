import React from 'react'
import {Outlet, Navigate, useLocation} from 'react-router-dom'

export default function AuthRequired() {
    const auth = {token: "123"}
    const location = useLocation()
    const isLoggedIn = localStorage.getItem("loggedin")

    if(!isLoggedIn) {
        return <Navigate to='/login' state={{message: 'You must log in first', from: location.pathname}} replace />
    }

    return <Outlet/>
}