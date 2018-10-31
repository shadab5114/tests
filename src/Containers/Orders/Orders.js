import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import './Orders.css'
import Order from '../../Components/Order/Order';
import * as actions from '../../Store/Actions/index';


class Orders extends Component{

    constructor(props){
        super(props);
        this.totalvalue = 0;
    }
    onSelectChange =(product,event)=>{
        //console.log("Order data",product,event.target.value);
        this.props.onQuantityChange(product,event.target.value)
        
    }
    onRemoveOrder = (product) =>{
        //console.log("Order data",product);
        this.props.onHandleRemoveFromCart(product);
    }
    backtoProducts =() =>{
        this.props.history.replace('/products');
    }
    render(){
        let OrderContent = "No products in cart";
        if(this.props.cartList.length > 0){
            let tempTotalValue = 0;
            OrderContent = this.props.cartList.map(order=>{
                tempTotalValue = order.price + tempTotalValue;
                this.totalvalue = tempTotalValue;
                return (
                    <Order  key={order.id} orderData = {order} selectChange={this.onSelectChange} removeOrder = {this.onRemoveOrder}/>
                )
            })
        }
        else{
            this.totalvalue = 0;
        }
        return(
            <div className="Orders">
               {OrderContent}
                <div className="Summary">
                    <div style={{marginBottom:'20px'}}>Total Order Value : Rs. {this.totalvalue}</div>
                    <div><Button onClick={this.backtoProducts}>Continue Shopping</Button> <Button>Checkout</Button></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        cartCount : state.products.cartCount,
        cartList  : state.products.cartList,
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onHandleAddToCart : (product) =>dispatch(actions.handleAddToCart(product)),
        onHandleRemoveFromCart : (product) =>dispatch(actions.handleRemoveFromCart(product)),
        onQuantityChange : (product,val) =>dispatch(actions.handleQuantityChange(product,val))
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Orders);