import React from 'react';

function useLocalStorge(itemName, initalValue) {
    const [item, setItem] = React.useState(initalValue);
    const [sincronizedItem, setSincronizedItem] = React.useState(true);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem = localStorageItem ? JSON.parse(localStorageItem) : initalValue;
                setLoading(false);
                setItem(parsedItem);
                setSincronizedItem(true);
            } catch (error) {
                setLoading(false);
                setError(true)
            }
        }, 700)
    }, [sincronizedItem]);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    const sincronizeItem = () => {
        setLoading(true);
        setSincronizedItem(false)
    }

    return {
        item,
        saveItem,
        loading,
        error,
        sincronizeItem
    };
}

export { useLocalStorge }