import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history'
import Header from './header/Header';
import StreamCreate from './streams/StreamCreate/StreamCreate';
import StreamDelete from './streams/StreamDelete/StreamDelete';
import StreamEdit from './streams/StreamEdit/StreamEdit';
import StreamList from './streams/StreamList/StreamList';
import StreamShow from './streams/StreamShow/StreamShow';

const App = () => {
    return (

        //for custom history use router no browserouter
        <Router history={history}>
            <div className='ui container'>

                <Header />

                <Route path='/' exact component={StreamList} />
                <Route path='/stream/new' exact component={StreamCreate} />
                <Route path='/stream/edit/:id' exact component={StreamEdit} />
                <Route path='/stream/delete/:id' exact component={StreamDelete} />
                <Route path='/stream/show/:id' exact component={StreamShow} />


            </div>


        </Router>
    );
}

export default App;