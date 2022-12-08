import Image from 'next/image'
import styles from '../styles/Home.module.css'

import pokeball from '../public/images/pokeball.png'

import { Card } from '../components/Card'

export async function getStaticProps() {
  const maxPokemons = process.env.maxPokemons
  const api = 'https://pokeapi.co/api/v2/pokemon'

  const res = await fetch(`${api}?limit=${maxPokemons}`)
  const data = await res.json()

  data.results.forEach((pokemon, index) => pokemon.id = index + 1)

  return {
    props: {
      pokemons: data.results
    }
  }


}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image src={pokeball} width="50" height="50" alt="PokeNext" />
      </div>
      <div className={styles.pokemonContainer}>
        {pokemons.map((pokemon, index) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>

  )
}
