import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers'


import App from './component/App';


const composeEnHancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnHancers(applyMiddleware())
    )

ReactDom.render(
    <Provider store={store}>
    <App/>
    </Provider>
        
    ,
    document.querySelector('#root')
)
