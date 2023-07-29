import { Outlet } from 'react-router-dom'

import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = () => {
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