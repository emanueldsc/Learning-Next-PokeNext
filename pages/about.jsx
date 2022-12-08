import Image from 'next/image'
import styles from '../styles/About.module.css'
import pokemons from '../public/images/pokemons.png'
function About() {
    return (
        <div className={styles.about}>
            <h1>sobre nosso projeto</h1>
            <p>
                Pokedex criado com NextJS
            </p>
            <Image src={pokemons} width="300" height="300" alt="pokemons" />
        </div>
    )
}

export default About