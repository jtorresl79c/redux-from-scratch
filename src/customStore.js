import reducer from './reducer';

function createStore(reducer){
    let state;
    let listeners = [];

    // return {
    //     state
    // }

    function subscribe(listener){
        listeners.push(listener)
    }

    function dispatch(action){
        state = reducer(state,action);

        listeners.forEach(listener => {
            listener()
        });
    }

    function getState(){
        return state;
    }

    return {
        subscribe,
        dispatch,
        getState
    };
}

export default createStore(reducer)