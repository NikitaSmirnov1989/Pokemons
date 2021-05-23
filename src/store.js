import {combineReducers, createStore} from "redux";
const initialState = [
    {
      name: "bulbasaur",
      id: "1"
    },
    {
      name: "ivysaur",
      id: "2"
    },
    {
      name: "venusaur",
      id: "3"
    },
    {
      name: "charmander",
      id: "4"
    },
    {
      name: "charmeleon",
      id: "5"
    },
    {
      name: "charizard",
      id: "6"
    },
    {
      name: "squirtle",
      id: "7"
    },
    {
      name: "wartortle",
      id: "8"
    },
    {
      name: "blastoise",
      id: "9"
    },
    {
      name: "caterpie",
      id: "10"
    },
    {
      name: "metapod",
      id: "11"
    },
    {
      name: "butterfree",
      id: "12"
    },
    {
      name: "weedle",
      id: "13"
    },
    {
      name: "kakuna",
      id: "14"
    },
    {
      name: "beedrill",
      id: "15"
    },
    {
      name: "pidgey",
      id: "16"
    },
    {
      name: "pidgeotto",
      id: "17"
    },
    {
      name: "pidgeot",
      id: "18"
    },
    {
      name: "rattata",
      id: "19"
    },
    {
      name: "raticate",
      id: "20"
    }
]
const dismissedPokemons = initialState.map(pokemon => {
  return {...pokemon, status: "should_catch"};
});
const catched_and_dismiss_pokemons = {
  allPokemons: dismissedPokemons,
  catched: [],
}
function support(status_pokemon, state, action){
  let newState = {...state};
    newState["allPokemons"].map(pokemon => {
      if(pokemon.id === action.id){
        pokemon.status = status_pokemon;
        return {...pokemon};
      }
      return pokemon
    })
    newState["catched"] = newState["allPokemons"].filter(pokemon => pokemon.status === "should_dismiss");
    return newState;
}
function reducerPokemons(state = catched_and_dismiss_pokemons, action){
  if(action.type === "should_catch"){
    return support("should_dismiss", state, action);
  }
  if(action.type === "should_dismiss"){
    return support("should_catch", state, action);
  }
  return state;
}
export const store = createStore(reducerPokemons);
store.subscribe(() => {console.log(store.getState());});