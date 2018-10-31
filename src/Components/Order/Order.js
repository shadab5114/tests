import React from 'react';
import {Media} from 'react-bootstrap';


const order = (props) =>{
    return(
        <Media>
                <Media.Left>
                    <div className="image">
                        <img src={props.orderData.image_url} alt="img1"/>
                    </div>
                
                </Media.Left>
                <Media.Body>
                <Media.Heading>{props.orderData.name}</Media.Heading>
                <div>
                    <div>Total price :  Rs {props.orderData.price}</div>
                   
                    <div style={{float:'right'}}> Quantity : 
                        <select onChange={(e)=>props.selectChange(props.orderData,e)} value={props.orderData.quantity}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className="remove" onClick={()=>props.removeOrder(props.orderData)}>Remove</div>
                </div>
                </Media.Body>
            </Media>
    )
}
export default order;