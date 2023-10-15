import React from 'react'

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false);
        React.useEffect(() => {
            const onChange = (change) => {
                if(change.key === 'TODOS_V1'){
                    console.log("Hubo cambios en TODOS_V1");
                    setStorageChange(true);
                }
            };
            console.log("agregando el eventListener");
            window.addEventListener('storage', onChange);

            return () => {
                console.log('desmontando el componente y quitanto el eventListener');
                window.removeEventListener('storage', onChange);
            }; 
        },[]);

        const toggleShow = () => {
            props.sincronize();
            setStorageChange(false);
        }
        return <WrappedComponent
            show={storageChange}
            toggleShow={toggleShow}
            {...props}
        />
    }
}

export { withStorageListener }