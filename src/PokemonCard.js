import {connect} from "react-redux";
export function _PokemonCard({name, status, id, shouldDismiss, shouldCatch} ){
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    const [text, background] = status === "should_catch" ? ["Поймать", "green"]: ["Отпустить", "red"];
    function changeStatus(event){
        if(status === "should_catch"){
            shouldCatch(event.target.dataset.id);
        }
        else{
            shouldDismiss(event.target.dataset.id);
        }
    }
    return <div style={{background: background}} className="pokemon">
        <div className="name">{name}</div>
        <img src={img} alt={name}/>
        <button data-id={id} onClick={changeStatus}>{text}</button>
    </div>
}
export const PokemonCard = connect(null, null)(_PokemonCard);