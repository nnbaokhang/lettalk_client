import Cookies from 'universal-cookie';
import constants from '../constants/actionType'
const cookies = new Cookies();
var initialState = {
    username:  cookies.get('name') ? cookies.get('name') : "",
    loggedIn:  !!cookies.get('name'),
    online: []
}

export default (state = initialState, action) => {

    var updated = Object.assign({}, state);

    switch(action.type) {
        case constants.USER_LOGGEDIN:
            updated['loggedIn'] = true;
            updated['username'] = action.username;
            return updated;
        case constants.USER_ONLINE:
            updated['online'] = action.online
            return updated;
        default:
            return state;
    }
}