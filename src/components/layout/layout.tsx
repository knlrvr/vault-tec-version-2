import React, { ReactNode } from 'react'

import Nav from "./nav";
import Footer from "./footer";

interface Props {
    children?: ReactNode
}

export default function Layout({ children, ...props }: Props) {
    return (
        <>
        <Nav />
        <main className="bg-blue-600">{children}</main>
        <Footer />       
        </>
    )
}