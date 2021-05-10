import './App.css';
import {PokemonCard} from "./PokemonCard";
import {connect} from "react-redux";
export function _App({pokemonsArray, shouldCatch, shouldDismiss}) {
  const countPokemons = pokemonsArray.allPokemons.length;
  const countCatched = pokemonsArray.catched.length;
  return (
    <div className="App">
      <div className="App-wrapper">
        <h1>Поймано покемонов</h1>
        <h2 className="count_pokemons">{countCatched} / {countPokemons}</h2>
        <div className="pokemons_block">
          {pokemonsArray["allPokemons"].map(pokemon => {
            return <PokemonCard shouldCatch={shouldCatch} shouldDismiss={shouldDismiss} key={pokemon.id} id={pokemon.id} name={pokemon.name} status={pokemon.status}/>
          })}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    pokemonsArray: state,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    shouldCatch: (id) => {dispatch({type: "should_catch", id})},
    shouldDismiss: (id) => {dispatch({type: "should_dismiss", id})},
  }
}
export const App = connect(mapStateToProps, mapDispatchToProps)(_App);
function test(callback){
  return callback();
}
function f(){
  return 1;
}
console.log(test(f));
