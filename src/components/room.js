import React , {Component} from "react";
import {} from 'react-bootstrap';
import io from 'socket.io-client';
import Cookies from 'universal-cookie';
import {connect} from "react-redux";
const socket = io('http://localhost:5000');

const ListItem = ({ value}) => (
    <li>{value}</li>
);

const List = ({ items }) => (
    <ul>
        {items.map((item,i) => <ListItem key={i} value={item} /> )}
    </ul>
);

class Room extends Component {
    constructor()
    {
        super();
        this.state = { message: "", msg: []};

    }
    handleMessage(e){
        this.setState({message:e.target.value})
    }


    submitMessage(e){
        //dispatch to action
        e.preventDefault();
        if(this.state.message !== "") {
            //Act as reducers here
            let prevState = Object.assign({}, this.state)
            prevState.message =this.props.username + ": " +  prevState.message
            //prevState.msg = prevState.msg.concat(prevState.message)
            //socket.emit('connect','Hello world')
            socket.emit('chat message', prevState.message)
            prevState.message = ""
            this.setState({message:prevState.message})
        }
    }

    componentDidMount() {
        socket.on("chat message", data =>
        {
            let newState = Object.assign({}, this.state)
            newState.msg = newState.msg.concat(data)
            this.setState({ msg: newState.msg })}
        );
    }
    componentWillUnmount(){

    }
    render()
    {
        const chatRoom = (
            <div>
            <form onSubmit={this.submitMessage.bind(this)}>
                <label>
                    Signup:
                    <input type="text" name="input" value={this.state.message}
                           onChange={this.handleMessage.bind(this)}/>
                </label>
                <input type="submit" value="Message"/>
            </form>
            </div>

        )
        const showMessage = (
            //If state msg is changed then do this
            <div>
                <List  items={this.state.msg} />
            </div>
        )
        return (
            <div>
               <h1>Room</h1>
                {showMessage}
                {chatRoom}
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

export default connect(mapStateToProps)(Room)