import Image from "next/image"

import styles from "../../styles/Pokemon.module.css"

// gera as páginas estáticas. Especificamente as url das páginas estáticas
export const getStaticPaths = async () => {
    const maxPokemons = process.env.maxPokemons
    const api = "https://pokeapi.co/api/v2/pokemon"

    const res = await fetch(`${api}/?limit=${maxPokemons}`)
    const data = await res.json()

    const paths = data.results.map((pokemon, index) => {
        return {
            params: { pokemonid: `${index + 1}` }//(index + 1).toString() }
        }
    })
    console.log(paths)
    return { paths, fallback: false }
}

// gera os parametros que iram compor as páginas estáticas
export async function getStaticProps(context) {
    const id = context.params.pokemonid
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
    return {
        props: { pokemon: data }
    }
}

function PokemonId({ pokemon }) {
    return (
        <div className={styles.pokemonContainer}>
            <h1 className={styles.pokemonTitle}>{pokemon.name}</h1>
            <Image
                src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                width="200"
                height="200"
                alt={pokemon.name} />
            <div>
                <h3>Número: </h3>
                <p>#{pokemon.id}</p>
            </div>
            <div>
                <h3>Tipo: </h3>
                <div className={styles.typesContainer}>
                    {pokemon.types.map((item, index) => (
                        <span key={index} className={`${styles.type} ${styles['type' + item.type.name[0].toUpperCase() + item.type.name.substring(1)]}`}>{item.type.name}</span>
                    ))}
                </div>
            </div>
            <div className={styles.dataContainer}>
                <div className={styles.dataHeight}>
                    <h4>Altura:</h4>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div className={styles.dataWeight}>
                    <h4>Peso:</h4>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
            </div>
        </div>
    )
}

export default PokemonId