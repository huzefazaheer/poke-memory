export default function Card({pokemon, onClick}){

    return(
        <div className="card" onClick={onClick}>
            <img src={pokemon.sprites.other["official-artwork"].front_default}></img>
            <p>{pokemon.name}</p>
        </div>
    )
}