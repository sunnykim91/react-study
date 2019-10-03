import React, { useRef, useEffect, memo } from 'react';
import Td from './Td';

const Tr = memo(({rowData, rowIndex, dispatch}) => {

    const ref = useRef([]);
    useEffect(() => {
        ref.current = [rowData, dispatch, rowIndex];
    }, [rowData, dispatch, rowIndex]);

    return (
        <tr>
            {Array(rowData.length).fill().map((td, i) => ( 
                <Td key={i} dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]} >{''}</Td>
            ))}
        </tr>
    );
});

export default Tr;