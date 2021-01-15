import React, { useReducer } from 'react';

function reducer(inputValues, { key, value }) {
    return {
        ...inputValues,
        [key]: value
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

    const updateInputValue = (e) => {
        dispatch({ key: e.target.name, value: e.target.value })
    }

    return [inputValues, updateInputValue];
}

export default useInputCollection;