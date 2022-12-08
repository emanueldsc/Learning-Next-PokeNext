import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Navbar.module.css'

import pokeball from '../public/images/pokeball.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src={pokeball} width="30" height="30" alt='Pokeball' />
                <h1>PokeNext</h1>
            </div>
            <ul className={styles.linkItems}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">Sobre</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar