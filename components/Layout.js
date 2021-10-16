import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="max-w-7xl mx-auto min-h-screen">
                { children }
            </main>
            <Footer />
        </>
    )
}
