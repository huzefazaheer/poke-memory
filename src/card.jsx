export default function Card({pokemon}){

    return(
        <div className="card">
            <img src={pokemon.sprites.other["official-artwork"].front_default}></img>
            <p>{pokemon.name}</p>
        </div>
    )
}