export const addProduct = (product, dispatch) => {
    dispatch({
        type: 'ADD_PRODUCT',
        product,
    })
};

export const removeProduct = (productId, dispatch) => {
    dispatch({
        type: 'REMOVE_PRODUCT',
        productId,
    })
};

export const setProducts = (products, dispatch) => {
    dispatch({
        type: 'SET_PRODUCTS',
        products
    })
};