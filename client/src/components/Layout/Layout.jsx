import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useMutation } from 'react-query'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { createUser } from '../../utils/api'
import UserDetailsContext from '../../context/UserDetailsContext'

const Layout = () => {
    
    const { isAuthenticated, user, getAccessTokenSilently } = useAuth0()
    const { setUserDetails } = useContext(UserDetailsContext)
    const { mutate } = useMutation({
        mutationKey: [user?.email],
        mutationFn: (token) => createUser(user?.email, token)
    })

    useEffect(() => {
        const getTokenAndRegister = async() => {
            try {
                const res = await getAccessTokenSilently({
                    authorizationParams: {
                        audience: "http://localhost:8000",
                        scope: "openid profile email",
                    }
                })
                console.log(res);
                localStorage.setItem("access_token", res);
                setUserDetails((prev) => ({ ...prev, token: res }));
                mutate(res);
            } catch (error) {
                console.log("Error while getting the token:", error);
            }
        }
      
        if (isAuthenticated) {
            getTokenAndRegister();
        }
    }, [isAuthenticated]);
      

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