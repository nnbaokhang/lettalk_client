import React, {Component} from 'react';
import { useHistory, Route, Router, BrowserRouter, Redirect,HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux'
import './App.css';
import Signup from './components/signup'
import Room from './components/room'
import Chat from './components/chat'
import Online from './components/online'
import store from './stores/store'

class App extends Component {

    render() {
        return (
           <Provider store={store}>
               <HashRouter>
                   <div>
                       <Chat />
                       <Route path='/signup'><Signup/></Route>
                       <Route path='/room'><Room/></Route>
                       <Route path='/online'><Online /></Route>
                   </div>
                </HashRouter>
           </Provider>
        )
    }
}


export default App;
