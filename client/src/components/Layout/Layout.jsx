import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useMutation } from 'react-query'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { createUser } from '../../utils/api'
import UserDetailsContext from '../../context/UserDetailsContext'

const Layout = () => {
    
    const { isAuthenticated, user } = useAuth0()
    const { setUserDetails } = useContext(UserDetailsContext)
    const { mutate } = useMutation({
        mutationKey: [user?.email],
        mutationFn: () => createUser(user?.email)
    })

    useEffect (() => {
        isAuthenticated && mutate()
    }, [isAuthenticated])

    return (
        <>
            <div style={{ background: "var(--black)" }}>
                <Header />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout