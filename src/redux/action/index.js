//Add Item to Cart
export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

//Remove Item from Cart
export const removeCart = (product) => {
    return{
        type : "REMITEM",
        payload : product
    }
}