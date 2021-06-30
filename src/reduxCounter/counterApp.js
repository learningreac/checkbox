import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store'
import { Counter } from './features/counter/counter';


export default function CounterApp(){
    return (
    <Provider store={store}>
    <Counter/>
    </Provider>
    )
}