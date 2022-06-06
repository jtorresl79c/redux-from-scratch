import configureStore from "./store/configureStore"
import * as actions from './store/bugs'

const store = configureStore()

store.subscribe( () => {
    console.log('Store changed!')
});

store.dispatch(actions.bugAdded( { description: "Bug 1" } ))

console.log(store.getState());