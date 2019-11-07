const { createStore } = require('redux');

const reducer = (prevState, action) => {
    switch(action.type) {
        case 'CHANGE_COMP_A':
            return {
                compA: action.data,
                compB: 12,
                compC: null,
            };
    };
};

const initilaState = {
    compA: 'a',
    compB: 12,
    compC: null,
};

const store = createStore(reducer, initilaState)

console.log(store.getState());

const chagngeCompA = (data) => {
    return {
        type: 'CHANGE_COMP_A',
        data,
    }
};

store.dispatch({
    type: 'CHANGE_COMP_A',
    data: 'b',
});

store.dispatch(ChannelMergerNode(b));

