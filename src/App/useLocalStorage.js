import React from 'react';

function useLocalStorge(itemName, initalValue) {
    const [item, setItem] = React.useState(initalValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem = localStorageItem ? JSON.parse(localStorageItem) : initalValue;
                setLoading(false);
                setItem(parsedItem);
            } catch (error) {
                setLoading(false);
                setError(true)
            }
        }, 700)
    }, [itemName, initalValue]);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    return {
        item,
        saveItem,
        loading,
        error
    };
}

export { useLocalStorge }