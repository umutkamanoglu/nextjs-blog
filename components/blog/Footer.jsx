import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-sidebar h-12 px-[10%] flex items-center justify-center text-sm">
            © {new Date().getFullYear()} Blog Name, All rights reserved.
        </footer>
    )
}

export default Footer