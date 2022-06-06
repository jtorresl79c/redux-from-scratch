import { createAction, createReducer } from "@reduxjs/toolkit"

// Action types
// const BUG_ADDED = "bugAdded"
// const BUG_REMOVED = "bugRemoved"
// const BUG_RESOLVED = "bugResolved"



// export const bugAdded = description => ({
//     type: BUG_ADDED,
//     payload: {
//         description
//     }
// })

// export const bugRemoved = id => ({
//     type: BUG_REMOVED,
//     payload: {
//         id
//     }
// })

// export const bugResolved = id => ({
//     type: BUG_RESOLVED,
//     payload: {
//         id
//     }
// })

// Actions creators - #2 En el Ducks pattern - Es obligatorio exportar indivudalmente cada uno de los actions creators

// Function Action Creator -- In JS functions are objects, so they have properties just like normal objects.
// let action = createAction("bugUpdated") // Retonarna una funcion
// console.log(action({ description: "Bug Updated!" })) // Retorna un objeto: { type: "bugUpdated", payload: { description: "Bug Updated!" } }
// console.log(action(1)) // Retorna un objeto: { type: 'bugUpdated', payload: 1 }

// Como se dijo arribita, una funcion es un objeto, por lo tanto, puede tener propiedades.
// la funcion que retorna createAction tiene una propiedad llamada type, que es el nombre de la accion.

// 
export const bugAdded = createAction("bugAdded") //  { type: "bugAdded", ... }

export const bugRemoved = createAction("bugRemoved") //  { type: "bugRemoved", ... }

export const bugResolved = createAction("bugResolved") //  { type: "bugResolved", ... }




















// Reducer - #1 En el Ducks pattern - El reducer a fuerzas debe de ser el export default
let lastId = 0

// export default function reducer(state = [], action){

//     switch(action.type){
//         case bugAdded.type: // bugAdded es una funcion, pero tiene en su interior la propiedad type el cual es un string, es por lo mismo que no necesitamos llamar a BUG_ADDED (aparte que esta comentado)
//         // porque dentro de bugAddded se encuentra el string que se necesita    
//             return [
//                 ...state,
//                 {
//                     id: ++lastId,
//                     description: action.payload.description,
//                     resolved: false
//                 }
//             ]
//         case bugRemoved.type:
//             return state.filter( bug => bug.id !== action.payload.id )
//         case bugResolved.type:
//             return state.map( bug => (bug.id === action.payload.id) ? { ...bug, resolved: true } : bug)
//         default:
//             return state
//     }


// }

export default createReducer( [], {
    // bugAdded: (state, action) => {
    [bugAdded.type]: (state, action) => {
        // En react la norma es la inmutabilidad, pero al usar reduxjs/toolkit podemos usar la funcion
        // createReducer el cual usa ImmerJS, el cual nos ayuda a poder escribir codigo mutable PERO este
        // de manera automatica se pasa a un esquema de inmutabilidad, casteando el codigo.
        state.push({
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        })
    },
    // bugResolved: (bugs,action) => {
    [bugResolved.type]: (bugs,action) => {
        const index = bugs.findIndex( bug => bug.id === action.payload.id )
        // Ya que estamos usando el tool kit podemos usar mutabilidad (aunque el compilador de manera automatica
        // lo hace de manera inmutable)
        bugs[index].resolved = true
    }
} )