// import { BUG_ADDED, BUG_REMOVED } from './actionTypes'
import * as actions from './actionTypes'
let lastId = 0

export default function reducer(state = [], action){
    // if(action.type === 'bugAdded'){
    //     return [
    //         ...state,
    //         {
    //             id: ++lastId,
    //             description: action.payload.description,
    //             resolved: false
    //         }
    //     ]
    // }else if(action.type === 'bugRemoved'){
    //     return state.filter( bug => bug.id !== action.payload.id )
    // }
    // return state

    switch(action.type){
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ]
        case actions.BUG_REMOVED:
            return state.filter( bug => bug.id !== action.payload.id )
        case actions.BUG_RESOLVED:
            return state.map( bug => (bug.id === action.payload.id) ? { ...bug, resolved: true } : bug)
        default:
            return state
    }


}