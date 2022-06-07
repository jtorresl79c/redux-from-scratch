// Action types
const BUG_ADDED = "bugAdded"
const BUG_REMOVED = "bugRemoved"
const BUG_RESOLVED = "bugResolved"


// Actions creators - #2 En el Ducks pattern - Es obligatorio exportar indivudalmente cada uno de los actions creators
export const bugAdded = description => ({
    type: BUG_ADDED,
    payload: {
        description
    }
})

export const bugRemoved = id => ({
    type: BUG_REMOVED,
    payload: {
        id
    }
})

export const bugResolved = id => ({
    type: BUG_RESOLVED,
    payload: {
        id
    }
})



// Reducer - #1 En el Ducks pattern - El reducer a fuerzas debe de ser el export default
let lastId = 0

export default function reducer(state = [], action){

    switch(action.type){
        case bugAdded.type: // bugAdded es una funcion, pero tiene en su interior la propiedad type el cual es un string, es por lo mismo que no necesitamos llamar a BUG_ADDED (aparte que esta comentado)
        // porque dentro de bugAddded se encuentra el string que se necesita    
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ]
        case bugRemoved.type:
            return state.filter( bug => bug.id !== action.payload.id )
        case bugResolved.type:
            return state.map( bug => (bug.id === action.payload.id) ? { ...bug, resolved: true } : bug)
        default:
            return state
    }


}