import React from 'react';
import NavItems from './NavItems/NavItems';

import  './Toolbar.css';

const toolbar = (props) => (
    <header className = "Toolbar">
        
        <div className="Logo" onClick={props.backClick}>
         Shopping Cart
        </div>
        
        <nav className="DisplayOnly">
            
           <NavItems totalItem = {props.total}/>
        </nav>

    </header>
);

export default toolbar;