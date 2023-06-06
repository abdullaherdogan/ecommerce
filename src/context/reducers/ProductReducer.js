const setProducts = (state,products) => {
    return { ...state, productList: products };
}
const addProduct = (state, product) => {

    return { ...state, productList: [...state.todoList, product] };
};

const removeProduct = (state, productId) => {
    const newProductList = state.productList.filter(todo => todo.id !== productId);

    return { ...state, productList: newProductList }
};


export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return setProducts(state, action.products);
        case 'ADD_PRODUCT':
            return addProduct(state, action.product);
        case 'REMOVE_PRODUCT':
            return removeProduct(state, action.productId);
        default:
            return state;
    }
};