import React, {Component} from 'react';
//import {Grid ,Row,Col,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import './Products.css';
import Product from '../../Components/Product/Product';
import * as actions from '../../Store/Actions/index';

class Products extends Component{

    constructor(props){
        super(props);
        this.state = {
            limitValue : 6
        }

        //this.scrollDivRef = React.createRef();
    }
    componentDidMount(){
       /*  const Jsondata = {
            name:  "Product 118",
            description : "desc",
            price : 1800,
            image_url : "https://picsum.photos/200/300?image=63"
        } */
        const reqJson = {
            start_at : "",
            limit_value : this.state.limitValue
        }
        this.props.onFetchProducts(reqJson);
        //this.props.onCreateProds(Jsondata);
        this.refs.iScroll.addEventListener("scroll", () => {
            if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >= this.refs.iScroll.scrollHeight) {
                if(this.props.lastRecordId !== "" && this.props.recordCount === this.state.limitValue  ){
                   reqJson.start_at = this.props.lastRecordId;
                   //console.log("recursive",reqJson);
                    this.props.onFetchProducts(reqJson);
                }
                
            }
          });
    }
    onAddToCart = (productDetails) =>{
        
        productDetails.quantity = 1;
        //console.log("Product deatals" ,productDetails);
        this.props.onHandleAddToCart(productDetails);
    }

    render(){
        let ProductContent = "Loading Products ...";
        if(this.props.productList.length > 0){
            ProductContent = this.props.productList.map(product =>{
                return <Product key={product.id} productData = {product} clicked={this.onAddToCart}/>
            })
        }
        return(
            <div className="Products" ref="iScroll">
                {ProductContent}
                            
               
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        loadProducts : state.products.loadingProduct,
        productList : state.products.productsList,
        cartCount : state.products.cartCount,
        lastRecordId : state.products.lastRecordId,
        recordCount : state.products.recordCount,
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onCreateProds : (requestData) => dispatch(actions.createProducts(requestData)),
        onFetchProducts : (requestData)=> dispatch(actions.initProducts(requestData)),
        onHandleAddToCart : (product) =>dispatch(actions.handleAddToCart(product))

        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Products);