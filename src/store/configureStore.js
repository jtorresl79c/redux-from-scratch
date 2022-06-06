// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import reducer from './bugs'

export default function(){
    // Esto retorna el store, es como si fuera el store = createStore(reducer)
    
    // Para usar el Redux Devtools (la extension del navegador) y que funcione, se hacia una 
    // configuracion algo grande al momento de mandar a llamar al createStore, pero al usar
    // el configureStore en vez del createStore esa configuracion extra ya no se hace.
    return configureStore({reducer})
}