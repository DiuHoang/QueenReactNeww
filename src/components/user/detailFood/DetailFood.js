import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../detailFood/DetailFoodbig.css';
import '../detailFood/DetailFoodsmall.css';
import {
  Link
}
  from "react-router-dom";
import { withRouter } from 'react-router';
class DetailFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailProduct: [],
      orders: [],
      id: "",
      product_id: "",
      //cart:[]     
    }
    var id = props.match.params.id;
    this.getDetailProduct(id);
    this.postProductDetail = this.postProductDetail.bind(this);
    //  let user_id=localStorage.getItem("idp");
    //this.getDataCart(user_id);
    //this.updateUI = this.updateUI.bind(this);
    //this.onAddToCart = this.onAddToCart.bind(this); 
  }
  getDetailProduct(id) {
    fetch("http://127.0.0.1:8000/api/product/detail/" + id)
      .then(response => {
        response.json().then((data) => {
          console.log(data);
          this.setState({
            detailProduct: data
          })
        });
      });
  }
  postProductDetail(event) {
    event.preventDefault();
    var id = this.props.match.params.id;
    let orders = {
      product_id: id,
    };
    let postInJson = JSON.stringify(orders);
    fetch("http://127.0.0.1:8000/api/product/orderlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: postInJson,
    }).then(response => {
      alert('Sản phẩm đã được thêm vào giỏ hàng của bạn!');
      this.props.history.goBack()

    });
  }
  // updateUICart(data){
  //   this.setState({
  //     cart:data.cart,
  //   })
  // }
  // getDataCart(user_id){
  //   fetch("http://127.0.0.1:8000/api/cart",{
  //     headers:{
  //       'Content-Type': 'application/json',
  //       'Authorization':user_id,
  //     }
  //   })
  //   .then(response => {
  //     response.json().then((data) => {
  //         this.updateUICart(data);
  //     });
  // });
  // }
  // onAddToCart(detailp){
  //   return(event)=>{
  //     let user_id=localStorage.getItem("idp");
  //     fetch("http://127.0.0.1:8000/api/addtocart/"+detailp, {
  //       method: "post",
  //       headers: {
  //         "Content-Type": "application/json",
  //         'Authorization': user_id,
  //       },
  //       body: detailp
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       if (response.status == 200){
  //         alert("Sucessful");
  //       }
  //       else{
  //           alert("Failed");
  //       }

  //     });
  //   }
  // }
  render() {
    let detailp = this.state.detailProduct;
    return (
      <React.Fragment>
        <Header />
        <div className="detaillFood">
          <div className="flex">
            <div className="left_dm">
              <div className="danhmuc">
                <ul>
                  <li><a class="active" href="#home">Danh mục</a></li>
                  <li><a href="#news">Nhà hàng & cửa hàng</a></li>
                  <li><a href="#contact">Nhà hàng mới nhất</a></li>
                  <li><a href="#about">Nhà hàng thịnh hành</a></li>
                  <li><a href="#contact">Nhà hàng yêu thích</a></li>
                  <li><a href="#about">Nhà hàng liên quan</a></li>
                </ul>
              </div><br />
              <div className="camket">
                <ul>
                  <li><a class="active" href="#home">Cam kết bền vững</a></li>
                  <li><img src="https://www.linkpicture.com/q/camket.jpg" alt="" width="268px" height="130px" /></li>
                  <li>
                    <label>
                      <input type="checkbox" checked="checked" />&ensp;Đúng nguồn gốc
                </label><br />
                    <label>
                      <input type="checkbox" checked="checked" />&ensp;Đúng chất lượng
                </label><br />
                    <label>
                      <input type="checkbox" checked="checked" />&ensp;Đúng giá sản phẩm
                </label><br />
                    <label>
                      <input type="checkbox" checked="checked" />&ensp;Cam kết hoàn tiền 100%
                </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="detail_order">
              <h1>{detailp.name_product}</h1>
              <hr />
              <div className="flex">
                <div className="detail_order_name">
                  <div>
                    <img src={'http://127.0.0.1:8000/storage/' + detailp.picture} alt="" width="350px" height="250px" />
                  </div>
                  <div className="detail-content">
                    <p>Mô tả: {detailp.description}</p><br />
                    <p>Giá: {detailp.price}đ</p><br />
                    <p>Giảm giá: {detailp.discount}</p><br />
                    <div className="flex">
                      <i class="far fa-star"></i>&ensp;
                  <i class="far fa-star"></i>&ensp;
                  <i class="far fa-star"></i>
                    </div>


                  </div>

                </div>
              </div>
              <div className="dat">
                <button onClick={this.postProductDetail}
                  type="submit">Đặt</button>
              </div>
            </div>

          </div>
          <br />
          <br />
          <br />

        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(DetailFood);