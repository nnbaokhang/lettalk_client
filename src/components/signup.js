import React, {Component} from "react";
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';
import Room from "./room";
import {submitRegister} from "../action/signup"
const cookies = new Cookies();

class Signup extends Component{

    constructor(props)
    {
        super(props);
        this.state = { username : "" ,input: ""};
    }
    handleChange(e) {
        this.setState({input: e.target.value})
    }

    submitHandler(e){
        const {dispatch} = this.props;
        e.preventDefault();
        let name = this.state.input
        //Make a call to back end to sign up this user
        this.setState({username:  name})
        let username = {username:name}
        dispatch(submitRegister(username))
    }


    render() {
        const userNotLoggedIn = (
            <form onSubmit={this.submitHandler.bind(this)}>
                <label>
                    Signup:
                    <input type="text" name="input" value={this.state.input}
                           onChange={this.handleChange.bind(this)}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
        const userLoggedIn = (
            <Room />
        )
        return (
            <div>
                {(this.props.loggedIn) ?  userLoggedIn : userNotLoggedIn}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn,
        username: state.auth.username
    }
}

export default connect(mapStateToProps)(Signup)