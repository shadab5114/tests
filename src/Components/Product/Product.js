import React from 'react';
import {Button} from 'react-bootstrap'


const product = (props) =>{

    return(
        <div className="Product">
                                <div className="image">
                                <img src={props.productData.image_url} alt="img1"/>
                                </div>
                                <div className="title">
                                    {props.productData.name}
                                </div>
                                <div className="price">
                                Rs. {props.productData.price}
                                </div>
                                <div>
                                    <Button onClick={()=>props.clicked(props.productData)}>Add to Cart</Button>
                                </div>

        </div>
    )
}

export default product;