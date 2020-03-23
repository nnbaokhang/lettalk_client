import actionTypes from "../constants/actionType";

function userOnline(db){
    return {
        type: actionTypes.USER_ONLINE,
        online: db
    }
}

export function online(){
    //const env = runtimeEnv();
    return dispatch => {
        return fetch(`${process.env.REACT_APP_API_URL}/online`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors'})
            .then( (response) => {
                if (!response.ok) {
                    throw Error(response.statusText);

                }
                return response.json();
            })
            .then( (res) => {
                dispatch(userOnline(res.online));
            })
            .catch( (e) => console.log(e) );
    }
}