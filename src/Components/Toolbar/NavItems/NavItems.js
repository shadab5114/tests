import React from 'react';
import {NavLink} from 'react-router-dom';
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
import './NavItems.css';
const navItems = (props) => (
   
    <ul className="NavigationItems">
         <li className="NavigationItem">
            <NavLink   activeClassName="active" exact
            to ="/cart"> Cart </NavLink>
            <NotificationBadge  count={props.totalItem} effect={Effect.SCALE}
                    style={{ top: '5px', left: '-5px', right: '',fontSize:'14px',fontWeight:'300',padding:'5px'}}
                    />
        </li>
       
        
        
    </ul>
     
 
);
export default navItems;