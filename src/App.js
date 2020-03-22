import React, {Component} from 'react';
import { useHistory, Route, Router, BrowserRouter, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import Box from '@material-ui/core/Box';
import { Button } from 'reactstrap';
import { browserHistory } from 'react-router';
import './App.css';
class App extends Component {
    state = {
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
          //this.props.history.push("/room");
            return <Redirect to='/room' />
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <form>
                        <label>
                            Name:
                            <input type="text" name="name"/>
                        </label>
                        <Route>
                        {this.renderRedirect()}
                        </Route>
                        <button type="button" onClick={this.setRedirect.bind()}>
                        Submit
                    </button>
                    </form>
                </div>
            </BrowserRouter>
        )
    }
}


export default App;
