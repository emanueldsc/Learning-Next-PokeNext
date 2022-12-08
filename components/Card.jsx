import Image from "next/image"
import Link from "next/link"

import styles from "../styles/Card.module.css"

function Card({ pokemon }){
    return (
        <div className={styles.card}>
            <Image 
                src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                width="100"
                height="100"
            />
            <p className={styles.id}>#{pokemon.id}</p>
            <h3 className={styles.title}>{pokemon.name}</h3>
            <Link className={styles.btn} href={`/pokemon/${pokemon.id}`}>
                Detalhes
            </Link>
        </div>
    )
}

export { Card }