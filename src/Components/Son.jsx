import React from "react";

const Son = ({ numero, increment }) => {
    console.log('again reloaded...');

    return (
        <button
            className='btn btn-primary mr-3'
            onClick={() => { increment(numero) }}
        >
            {numero}
        </button>
    )
}

export default React.memo(Son);