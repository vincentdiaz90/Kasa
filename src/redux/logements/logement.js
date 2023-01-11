const INITIAL_STATE = {
    logement: []
}

function logementReducer(state = INITIAL_STATE, action){

    switch(action.type){

        case "LOADLOGEMENT": {
            return {
                ...state,
                logement: action.payload
            }
        }
    }

    return state;
}
export default logementReducer;

export const getLogements = () => dispatch => {

    fetch("")
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: 'LOADLOGEMENT',
            payload: data
        })
    })
}