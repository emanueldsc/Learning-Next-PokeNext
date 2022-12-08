import Footer from "./Footer"
import Navbar from "./Navbar"

import Head from "next/head"

function Layout({ children }) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/x-icon" href="../public/images/favicon.ico" />
                <title>PokeNext</title>
            </Head>
            <Navbar />
            <main className="mainContainer">{children}</main>
            <Footer />
        </>
    )
}

export default Layout