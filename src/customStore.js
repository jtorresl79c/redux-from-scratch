import reducer from './reducer';

function createStore(reducer){
    let state;
    let listeners = [];

    // Al inicio pone esto como ejemplo de una propiedad que no es privada, y que facilmente podriamos mutar,
    // se debe de evitar que si quiera exista la posibilidad de mutar nuestro state, en JS realmente no hay 
    // manera de declarar una variable privada, pero podemos simular el comportamiento de una variable privada
    // haciendo que la propiedad no pueda ser mutadada aunque quisieramos. #1
    // return {
    //     state
    // }

    // In Javascript we can declare a function inside another function because functions are first class
    // citizen theres no difference between declaring a variable and a function.
    function subscribe(listener){
        listeners.push(listener)
    }

    function dispatch(action){
        state = reducer(state,action);

        listeners.forEach(listener => {
            listener()
        });
    }
    
    // Aqui retornamos el state local de este metodo, por lo que cuando instenciamos el objeto que retorna customStore.js
    // e intentemos hacer algo como este: new customStore().getState().a = 1, nos va a dar un error, de igual forma si se intenta
    // hacer algo como new customStore().state = 1 no dara error, pero esa propiedad state no se referira a la propiedad state de
    // customStore.js, sino a la propiedad del objeto que retorna customStore.js. De esta forma es como si la propiedad state
    // fuera privada #2
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