const initialState = {
    cart: [],
    products: [],
    user: {},
}

const UPDATE_CART = 'UPDATE_CART';
const UPDATE_USER = 'UPDATE_USER';

function reducer( state = initialState, action){
    console.log('REDUCER HIT: Action ->', action);
    switch( action.type ){
        case UPDATE_CART:
            return Object.assign({}, state, { cart: action.payload });

        case UPDATE_USER:
            return Object.assign({}, state, { user: action.payload });

            default: return state
    }
}

export function updateCart (cart){
    return {
        type: UPDATE_CART,
        payload: cart
    }
}

export function updateUser (user){
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export default reducer;