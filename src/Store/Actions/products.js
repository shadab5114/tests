import * as actionTypes from './actionTypes';
import Axios from '../../axios';

export const productsFetchStart = (params) =>{
    return {
        type: actionTypes.FETCH_PRODUCTS_START,
        productParams : params
    }
}

export const productsFetchSuccess = (resultData) =>{
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        products : resultData
    }
}

export const initProducts = (requestData) => {
    return dispatch =>{
        dispatch(productsFetchStart(requestData));
        Axios.get('products.json?orderBy="$key"&startAt="'+requestData.start_at+'"&limitToFirst='+requestData.limit_value)
        .then(response =>{
            console.log(response.data);
            //console.log(Object.keys(response.data).length);
            const ArrayRes = [];
            if(Object.keys(response.data).length > 0){
                for(let objKey in response.data){
                    const newJson = {
                        id : objKey,
                        name : response.data[objKey].name,
                        desc : response.data[objKey].description,
                        price : response.data[objKey].price,
                        image_url : response.data[objKey].image_url
                    }
                    ArrayRes.push(newJson);
                }
               
            }
            dispatch(productsFetchSuccess(ArrayRes));
        })
        .catch(error => {
            //dispatch(failedLoadingIngs());
        })
    }
}

export const handleAddToCart = (cartData) =>{
    return {
        type: actionTypes.ADD_PRODUCT_TO_CART,
        product : cartData
    }
}


export const handleRemoveFromCart = (cartData) =>{
    return {
        type: actionTypes.REMOVE_PRODUCT_FROM_CART,
        product : cartData
    }
}
export const handleQuantityChange = (cartData,value) =>{
    return {
        type: actionTypes.MANAGE_ORDER_EDIT,
        product : cartData,
        value : value
    }
}

export const createProducts = (requestData) => {
    return dispatch =>{
        Axios.post('products.json',requestData)
        .then(response =>{
            console.log(response);
            //dispatch(setIngredients(response.data));
        })
        .catch(error => {
            //dispatch(failedLoadingIngs());
        })
    }
}