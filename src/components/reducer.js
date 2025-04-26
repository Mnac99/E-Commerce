

const reducer = (state, action) => {


    switch (action.type) {
        case 'ADD_ITEM':
            const productItem = action.payload;
            const checker = state.some((item) => item.id === productItem.id);
            if(!checker) {
                localStorage.setItem("products", JSON.stringify([...state, productItem]));
                return ([...state, productItem]);
            } else {
                return state;
            }
        case 'REMOVE_ITEM':
            localStorage.setItem("products",JSON.stringify(state.filter(item =>item.id !== action.payload)));
            return state.filter(item =>item.id !== action.payload);

        default: return state;
    }
}
export default reducer;