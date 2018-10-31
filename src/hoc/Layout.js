import React, {Component,Fragment} from 'react';
import {connect} from 'react-redux';
import Toolbar from '../Components/Toolbar/Toolbar';
import './Layout.css';

class Layout extends Component{

    backToProducts =()=>{
        //this.props.history.replace('/products');
    }
    render(){
        const totalCart = this.props.cartList.length;
        
        return(
            <Fragment>
                <Toolbar total={totalCart}  backClick = {this.backToProducts}/>
                <main className="Content">
                        {this.props.children}
                </main>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return{
        //cartCount : state.products.cartCount,
        cartList  : state.products.cartList,
    }
}
export default connect(mapStateToProps)(Layout);