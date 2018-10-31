import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    loadingProduct: false,
    productsList : [],
    cartCount : 0,
    lastRecordId : "",
    recordCount : 0,
    error: false,
    totalValue : 0,
    cartList : []
} ;


const reducer = (state =initialState , action) => {
    switch(action.type){
        case actionTypes.FETCH_PRODUCTS_START:
            if(action.productParams.start_at === ""){
                return{
                    ...state,
                    loadingProduct : true,
                    productsList : [],
                    recordCount : 0,
                    lastRecordId : ""
                };
            }
            else{
                return{
                    ...state,
                    loadingProduct : true,
                    
                };
            }
            
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            const tempProdList  = [...state.productsList];
            const recordLength = action.products.length;
            let incomingArray = action.products;
            let newProdArray = [];
            let lastRecordId = state.lastRecordId;
            if(lastRecordId !== ""){
                incomingArray.splice(0,1);
                console.log("incomingArray",incomingArray);
                newProdArray = tempProdList.concat(incomingArray);
                lastRecordId = incomingArray.slice(-1)[0].id;
            }
            else{
                newProdArray = tempProdList.concat(incomingArray);
                lastRecordId = incomingArray.slice(-1)[0].id;
            }
            return{
                ...state,
                productsList : newProdArray,
                loadingProduct: false,
                lastRecordId : lastRecordId,
                recordCount : recordLength
            };
        case actionTypes.ADD_PRODUCT_TO_CART:
            let  tempCartList = [ ...state.cartList ];
            const indexP = tempCartList.findIndex(x => x.id === action.product.id);
            
            if(indexP > -1){
                //console.log("index",state.cartList[indexP]);
                tempCartList[indexP].quantity = state.cartList[indexP].quantity + 1;
                tempCartList[indexP].price = (state.cartList[indexP].quantity + 1) * state.cartList[indexP].price;
                
            }
            else{
                tempCartList = tempCartList.concat(action.product);
            }
            return{
                ...state,
                cartList : tempCartList
            };
        case actionTypes.REMOVE_PRODUCT_FROM_CART:
            let  tempRCartList = [ ...state.cartList ];
            //console.log("Array",action.product);
            const indexR = tempRCartList.findIndex(x => x.id === action.product.id);
            //console.log("Array",indexR);
            if(indexR > -1){
                //console.log("index",state.cartList[indexR]);
                tempRCartList.splice(indexR ,1);
                
               
                
            }
            
            return{
                ...state,
                cartList : tempRCartList
            };
        case actionTypes.MANAGE_ORDER_EDIT:
            let  tempMCartList = [ ...state.cartList ];
            const indexM = tempMCartList.findIndex(x => x.id === action.product.id);
            if(indexM > -1){
                tempMCartList[indexM].price = state.cartList[indexM].price * action.value;
                tempMCartList[indexM].quantity = action.value 
               
                
            }
            
            return{
                ...state,
                cartList : tempMCartList
            };
        
        default:
            return state;

    }
    return state;
}

export default reducer;
