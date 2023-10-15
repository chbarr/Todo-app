import React from 'react'
import { withStorageListener } from './withStorageListener';

function StorageChangeAlert(props) {
    if (props.show) {
        return (
            <div>
                <span>Hubo cambios</span>
                <button
                    onClick={
                        () => props.toggleShow()
                    }
                >Actualizar
                </button>
            </div>
        )
    } else {
        return null;
    }
}

const StorageChangeAlertWithListener = withStorageListener(StorageChangeAlert);

export { StorageChangeAlertWithListener };