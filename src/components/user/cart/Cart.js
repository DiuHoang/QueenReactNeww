import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../contact/Contactbig.css';
import '../contact/Contactsmall.css';
import CartItem from '../cart/CartItem';
class Cart extends Component{
  constructor(){
    super();
    this.state={
        cart:[],
        sum:[],
    }
    let user_id= localStorage.getItem('idp');
    //this.getData(user_id);
    //this.deleteItem = this.deleteItem.bind(this);
    //this.onTang = this.onTang.bind(this);
    //his.onGiam = this.onGiam.bind(this);
}
// getData(user_id) {
//     fetch("http://127.0.0.1:8000/api/cart", {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': user_id,
//       }
//     })
//       .then(response => {
//         response.json().then((data) => {
//           this.updateUI(data);
//           this.getTotal();
//         });
//       });
//   }
  updateUI(data){
    this.setState({
     cart:data.cart   
    })
    
}
  getTotal() {
    
      let user_id= localStorage.getItem('idp');
    fetch("http://127.0.0.1:8000/api/total", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': user_id,
      }
    })
      .then(response => {
        response.json().then((data) => {
          this.setState({
            sum: data.cart
          })
        });
      });
    }
  // onTang(item){
  //   return(event) =>{
  //     let id =localStorage.getItem('idp');
  //     fetch("http://127.0.0.1:8000/api/increase/" + item, {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': id,
  //       },
  //       body:item       
  //     }).then(response => {
  //       response.json().then((data) => {
  //         this.getData(id);
  //       });
  //     });
  //   }
  // }

  // onGiam(item){
  //   return(event) =>{
  //     let id =localStorage.getItem('idp');
  //     fetch("http://127.0.0.1:8000/api/reduction/" + item, {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': id,
  //       },
  //       body:item       
  //     }).then(response => {
  //       response.json().then((data) => {
  //         this.getData(id);
  //       });
  //     });
  //   }
  // }
  onOrder(item){
    return(event)=>{
      let user_id=localStorage.getItem("idp");
      fetch("http://127.0.0.1:8000/api/addtocart/"+item, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          'Authorization': user_id,
        },
        body: item
      })
      .then((response) => {
        console.log(response);
        if (response.status == 200){
          alert("Sucessful");
        }
        else{
            alert("Failed");
        }

      });
    }
  }
  
  // deleteItem(item) {
  //   return (event) => {
  //     let id =localStorage.getItem('idp');
  //     fetch("http://127.0.0.1:8000/api/cart/" + item, {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': id,
  //       }
  //     }).then(response => {
  //       response.json().then((data) => {
  //         this.getData(id);
  //       });
  //     });
  //   }
  // }
 
render(){
    return(
      <React.Fragment>
          <Header/>
        <div>
            <table className="cart">
                <tr>
                    <th>No</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
               
                {this.state.cart.map((item, key) => <CartItem  
                key={key} 
                item={item}
                onTang={this.onTang(item.id)}
                onGiam={this.onGiam(item.id)}
                deleteItem={this.deleteItem(item.id)}/>)}
                
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><b>Total:</b></td>
                    <td>{this.state.sum}</td>
                    <td></td>
                </tr>
            </table>
            
        </div>
        <Footer/> 
        </React.Fragment>
    );
}
}
export default Cart;