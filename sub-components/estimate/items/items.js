// import React from "react";
// import './items.css';

// const Items = (props) => {
//     return (
//         <li>
//             <div className="expense-item__description">
//                 <h2>{props.title}</h2>
//                 <div className="expense-item__price">{props.company}</div>
//                 <div className="expense-item__price">{props.phone}</div>
//                 <div className="expense-item__price">{props.projectName}</div>
//                 <div className="expense-item__price">{props.storing_quantity}</div>
//                 <div className="expense-item__price">{props.classification}</div>
//                 <div className="expense-item__price">{props.pallet_quantity}</div>
//                 <div className="expense-item__price">{props.pallet_size}</div>

//             </div>
            
//         </li>
//     ); 
// }

// export default Items;
import React from "react";
import './items.css';

const Items = (props) => {
    
    return (
        <li>
            <div className="expense-item__description">
                <div className="expense-item__price">{props.company}</div>
                <div className="expense-item__price">{props.phone}</div>
                <div className="expense-item__price">{props.productName}</div>
                <div className="expense-item__price">{props.storing_quantity}</div>
                <div className="expense-item__price">{props.classification}</div>
                <div className="expense-item__price">{props.pallet_quantity}</div>
                <div className="expense-item__price">{props.pallet_size}</div>
                
                

            </div>
            
        </li>
    ); 
}

export default Items;