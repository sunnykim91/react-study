import React, { useCallback, useEffect, useRef, memo } from 'react';
import { CLICK_CELL } from './tictactoe';

const Td = memo( ({ rowIndex, cellIndex, dispatch, cellData}) => {

    const ref = useRef([]);
    useEffect(()=> {
        ref.current = [rowIndex, cellIndex, dispatch, cellData];
    }, [rowIndex, cellIndex, dispatch, cellData]);

    const onClickTd = useCallback( () => {
        console.log(rowIndex, cellIndex);
        if(cellData) {
            return;
        }
        dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
    }, [cellData]);

    return (
        <td onClick={onClickTd}>{cellData}</td>
    )
});

export default Td;