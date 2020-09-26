import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header/Header';
import StreamCreate from './streams/StreamCreate/StreamCreate';
import StreamDelete from './streams/StreamDelete/StreamDelete';
import StreamEdit from './streams/StreamEdit/StreamEdit';
import StreamList from './streams/StreamList/StreamList';
import StreamShow from './streams/StreamShow/StreamShow';

const App = () => {
    return (
        <BrowserRouter>
            <div className='ui container'>

                <Header />

                <Route path='/' exact component={StreamList} />
                <Route path='/stream/new' exact component={StreamCreate} />
                <Route path='/stream/edit' exact component={StreamEdit} />
                <Route path='/stream/delete' exact component={StreamDelete} />
                <Route path='/stream/show' exact component={StreamShow} />


            </div>


        </BrowserRouter>
    );
}

export default App;