// #1 bugManual.js
// #2 bugsCreateActionReducerHelpers.js
// #3 bug.js

import { createAction, createReducer, createSlice } from "@reduxjs/toolkit"


let lastId = 0


// createSlice retorna un objeto con los Action Creators y el Reducer
const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        // actions => action handlers
        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },
        bugResolved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id)
            // Ya que estamos usando el tool kit podemos usar mutabilidad (aunque el compilador de manera automatica
            // lo hace de manera inmutable)
            bugs[index].resolved = true
        }
    }
})

// slice retorna un objeto

// slice.actions => objeto con todos los actions creators, son los action creators que creabamos manualmente, pero generados
// de manera autoamtica.

// slice.reducer, es el reducer.

// Recuerda que en el Duck pattern se debe de exportar los Action Creators y el Reducer

// Action Creators
export const { bugAdded, bugResolved } = slice.actions

// Reducer
export default slice.reducer