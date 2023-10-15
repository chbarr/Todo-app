import React from 'react';

function useLocalStorge(itemName, initialValue) {
    const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
    const {
        item,
        loading,
        sincronizedItem,
        error
    } = state;

    //ACTION CREATORS:
    const onError = (error) => {
        dispatch({ type: actionTypes.error, payload: error });
    }

    const onSuccess = (parsedItem) => {
        dispatch({ type: actionTypes.success, payload: parsedItem });
    }

    const onSincronize = () => {
        dispatch({ type: actionTypes.sicronize });
    }

    const onSave = (newItem) => {
        dispatch({ type: actionTypes.save, payload: newItem });
    }

    React.useEffect(() => {
        console.log("ejectuando el efecto de todo App")
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem = localStorageItem ? JSON.parse(localStorageItem) : initialValue;
                onSuccess(parsedItem);
            } catch (error) {
                onError(error);
            }
        }, 700)
    }, [sincronizedItem]);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        onSave(newItem);
    }

    const sincronizeItem = () => {
        onSincronize();
    }

    return {
        item,
        saveItem,
        loading,
        error,
        sincronizeItem
    };
}

const initialState = ({ initialValue }) => ({
    item: initialValue,
    sincronizedItem: true,
    loading: true,
    error: false
});

const actionTypes = {
    success: 'SUCCESS',
    error: 'ERROR',
    sicronize: 'SINCRONIZE',
    save: 'SAVE'
}

const reducerObject = (state, payload) => ({
    [actionTypes.success]: {
        ...state,
        loading: false,
        item: payload,
        sincronizedItem: true
    },
    [actionTypes.error]: {
        ...state,
        loading: false,
        error: true
    },
    [actionTypes.sicronize]: {
        ...state,
        loading: true,
        sincronizedItem: false
    }
    ,
    [actionTypes.save]: {
        ...state,
        item: payload
    }
});

const reducer = (state, action) => reducerObject(state, action.payload)[action.type];

export { useLocalStorge }