import actionTypes from '../constants/actionType';

function userLoggedIn(username){
    return {
        type: actionTypes.USER_LOGGEDIN,
        username: username
    }
}

export function submitLogin(data){
    return dispatch => {
        dispatch(userLoggedIn(data.username));
    }
}

export function submitRegister(data){
    //const env = runtimeEnv();
    return dispatch => {
        return fetch(`${process.env.REACT_APP_API_URL}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'cors'})
            .then( (response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then( (res) => {
                dispatch(submitLogin(data));
            })
            .catch( (e) => console.log(e) );
    }
}