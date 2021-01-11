import React, { useReducer } from 'react';

function reducer(inputValues, { key, value }) {
    return {
        ...inputValues,
        [key]: value
    }
}

// example initial_inputValues that must get passed (this is REQUIRED)
// const INITIAL_inputValues = {
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