const initialState = {
    cart: 0,
    user: {},
    product: []
}

const UPDATE_CART = 'UPDATE_CART';
const UPDATE_USER = 'UPDATE_USER';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

function reducer( state = initialState, action){
    console.log('REDUCER HIT: Action ->', action);
    switch( action.type ){
        case UPDATE_CART:
            return Object.assign({}, state, { cart: action.payload });

        case UPDATE_USER:
            return Object.assign({}, state, { user: action.payload });
            
        case UPDATE_PRODUCT:
            return Object.assign({}, state, { product: action.payload });

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

export function updateProduct (product){
    return {
        type: UPDATE_PRODUCT,
        payload: product
    }
}

export default reducer;