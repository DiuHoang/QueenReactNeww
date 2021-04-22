import React, {Component} from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
class CartItem extends Component{
render(){
    const {item,deleteItem,onTang,onGiam}=this.props;
    // const {item,onTang}=this.props;

    return(
        
            <React.Fragment>
            <Header/> 
       
            <tr>
                <td>{item.id}</td>
                <td><img src={"http://127.0.0.1:8000" + item.products[0].image} width={100} height={100} /></td>
                <td>{item.products[0].price}</td>
                <td><button onClick={onGiam}>-</button>&ensp;{item.quantity}&ensp;<button onClick={onTang}>+</button></td>
                <td>{item.products[0].price*item.quantity}</td>
                <td><button className="delete"  onClick={deleteItem}>Delete</button></td>
               
            </tr>
            
            
            <Footer/> 
            </React.Fragment>       
        
    )
}
 
}
export default CartItem;