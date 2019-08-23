import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './js/store/index';

import './scss/index.scss';

// Router
import Router from './routes/Router';

class App extends Component{
    render(){
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        )
    }
}

export default App;