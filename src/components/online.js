import React, {Component} from "react";
import { connect } from 'react-redux'
import {online} from "../action/online"

const ListItem = ({ value}) => (
    <li>{value}</li>
);

const List = ({ items }) => (
    <ul>
        {items.map((item,i) => <ListItem key={i} value={item} /> )}
    </ul>
);

class Online extends Component {
    constructor(props) {
        super(props);
        this.state = {online: []}
    }

    handleAction(){
        const {dispatch} = this.props;
            //Dispatch to get a list of online user
        dispatch(online())
    }

    render() {
        const showOnline = (
            //If state msg is changed then do this
            <div>
                Welcome to a list of online user, click on the button to see who are online
                <List  items={this.props.online} />
            </div>
        )
        return (
            <div>
                <button onClick={this.handleAction.bind(this)}>Show online</button>
                {showOnline}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        online: state.auth.online
    }
}

export default connect(mapStateToProps)(Online)