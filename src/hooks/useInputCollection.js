import { useReducer } from 'react';


const ACTION_TYPES = {
    'UPDATE_INPUT_VALUE': 'UPDATE_INPUT_VALUE',
    'RESET_INPUT_VALUE': 'RESET_INPUT_VALUE',
    'RESET_INPUT_VALUES': 'RESET_INPUT_VALUES'
}

function reducer(inputValues, action) {
    switch(action.type) {
        case ACTION_TYPES.UPDATE_INPUT_VALUE:
            return { 
                ...inputValues,
                [action.payload.key]: action.payload.value
            };
        case ACTION_TYPES.RESET_INPUT_VALUE:
            return {
                ...inputValues,
                [action.payload.key]: ''
            }
        case ACTION_TYPES.RESET_INPUT_VALUES:
            return {
                ...action.payload
            };
        default:
             return null;
    }
}

// example initial_state that must get passed (this is REQUIRED)
// => match object keys to the name's of the input's
// const INITIAL_STATE = {
//     email: '',
//     username: '',
//     password: ''
// }

const useInputCollection = (initial_state) => {
    const [inputValues, dispatch] = useReducer(reducer, initial_state);

    const actions = {
        updateInputValue: (e) => {
            dispatch({ 
                type: ACTION_TYPES.UPDATE_INPUT_VALUE,
                payload: {key: e.target.name, value: e.target.value}
            })
        },
        resetInputValue: (name) => {
            dispatch({ 
                type: ACTION_TYPES.RESET_INPUT_VALUE,
                payload: {key: name}
            })
        },
        resetInputValues: () => {
            dispatch({
                type: ACTION_TYPES.RESET_INPUT_VALUES,
                payload: initial_state
            })
        } 
    }

    return [inputValues, actions];
}

export default useInputCollection;