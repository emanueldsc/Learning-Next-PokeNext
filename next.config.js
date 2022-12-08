/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.traction.one",
      "pokeapi.co",
      "https://pokeapi.co/api/v2"
    ]
  },
  env: {
    maxPokemons: 905
  }
}

module.exports = nextConfig
