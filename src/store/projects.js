import { createAction, createReducer, createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: 'projects',
    initialState: [],
    reducers: {
        // actions => action handlers
        projectAdded: (projects, action) => {
            projects.push({
                id: action.payload.id,
                name: action.payload.name
            })
        }
    }
})

export const { projectAdded } = slice.actions

export default slice.reducer