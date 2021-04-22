import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../service/Servicebig.css';
import '../service/Servicesmall.css';
import { 
    Link } 
  from "react-router-dom";
class Service extends Component{
  constructor(){
    super();
    this.state = {
      categories1: [],
      categories2: [],
      categories3: [],
      categories4: [],
      categories5: []
    }     
    this.getCategory1();
    this.getCategory2();
    this.getCategory3();
    this.getCategory4(); 
    this.getCategory5();
    }
    getCategory1(){
      fetch("http://127.0.0.1:8000/api/product1")
      .then(response => {
              response.json().then((data) =>{
                  console.log(data);
                  this.setState({
                      categories1: data 
                  })
              });
        });
  }
  getCategory2() {
    fetch("http://127.0.0.1:8000/api/product2")
      .then(response => {
        response.json().then((data) => {
          console.log(data);
          this.setState({
            categories2: data
          })
        });
      });
  }
      getCategory3(){
      fetch("http://127.0.0.1:8000/api/product3")
      .then(response => {
              response.json().then((data) =>{
                  console.log(data);
                  this.setState({
                      categories3: data 
                  })
              });
        });
                    }
      getCategory4(){
      fetch("http://127.0.0.1:8000/api/product4")
      .then(response => {
              response.json().then((data) =>{
                  console.log(data);
                  this.setState({
                      categories4: data 
                  })
              });
        });
      } 
      getCategory5(){
        fetch("http://127.0.0.1:8000/api/product5")
        .then(response => {
                response.json().then((data) =>{
                    console.log(data);
                    this.setState({
                        categories5: data 
                    })
                });
          });
        }                
  render(){
    return(
      <React.Fragment>
      <Header/>
      <div>
        <h2 className="title-service">Queen Party - Cung cấp hệ thống dịch vụ cao cấp</h2>
        <div className="intro">
          
              <div className="col-lg-3">
                  <div className="container_cart_content" style={{width: "360px", height:"300px"}}>
                      <a><img className="imageShow" src="../img/food_content/comchien.jpg" alt=""/></a><br/>
                      <i>Đơn hàng của bạn sẽ được bảo quản như thế nào?
                      Queen Party sẽ bảo quản đơn của bạn bằng túi & thùng để chống nắng mưa, 
                      giữ nhiệt... trên đường đi một cách tốt nhất</i>
                  </div>
              </div>
              <div className="col-lg-3">
                  <div className="container_cart_content" style={{width: "360px", height:"300px"}}>
                    <a><img src="../img/Speaker/loa2.jpg" alt="" className="imageShow"/></a><br/>
                    <i>Loa vi tính, loa có dây đa dạng mẫu mã đến từ các thương hiệu nổi tiếng,
                          âm thanh chất lượng cao. Giao hàng tận nơi</i>
                  </div>
              </div>
              <div className="col-lg-3">
                  <div className="container_cart_content" style={{width: "360px", height:"300px"}}>
                    <a><img src="../img/Table/ban1.jpeg" alt="" className="imageShow"/></a><br/>
                    <i>Đồ trang trí nội thất trong nhà, shop bán đồ trang trí decor 
                    phòng khách, phòng ngủ, giá rẻ nhất thị trường, sản phẩm đa dạng độc đáo</i>
                  </div>
              </div>
              <div className="col-lg-3">
                  <div className="container_cart_content" style={{width: "360px", height:"300px"}}>
                    <a><img src="../img/Cake/cake4.jpg" alt="" className="imageShow"/></a><br/>
                    <i>Tổng hợp loại bánh làm bằng bột mì hay bột gạo có hương vị ngọt, mặn, béo...có thể hấp, nướng, chiên</i>
                  </div>
              </div>
       
        </div><br></br>
        {/* Line1 */}
        <div className="title-line">
          <h2>Dịch vụ đồ ăn</h2>
        </div>
        <div >
          <div className="doan">
            {this.state.categories2.map((cates,index)=>
              <div >
                <div>
                  <Link to ={cates.id}><img className="imageShow" src={'http://127.0.0.1:8000/storage/' + cates.picture} controls></img></Link>
                  <h4 style={{paddingLeft: "70px", paddingBottom: "40px"}}>{cates.name_product}</h4>
                </div>
              </div>
            )}   
          </div>
        </div>
        {/* Line2 */}
        <div className="title-line">
          <h2>Dịch vụ loa máy</h2>
        </div>
        <div >
          <div className="doan">
            {this.state.categories1.map((cate1,index)=>
              <div >
                <div>
                  <Link to ={cate1.id}><img className="imageShow" src={'http://127.0.0.1:8000/storage/' +cate1.picture} controls></img></Link>
                  <h4 style={{paddingLeft: "70px", paddingBottom: "40px"}}>{cate1.name_product}</h4>
                </div>
              </div>
            )}   
          </div>
            </div>
          {/* Line3 */}
          <div className="title-line">
          <h2>Dịch vụ trang trí</h2>
        </div>
        <div >
          <div className="doan">
            {this.state.categories3.map((cate3,index)=>
              <div >
                <div>
                  <Link to ={cate3.id}><img className="imageShow" src={'http://127.0.0.1:8000/storage/' + cate3.picture} controls></img></Link>
                  <h4 style={{paddingLeft: "70px", paddingBottom: "40px"}}>{cate3.name_product}</h4>
                </div>
              </div>
            )}   
          </div>
          </div>
          {/* line4 */}
          <div className="title-line">
          <h2>Dịch vụ bánh kem</h2>
        </div>
        <div >
          <div className="doan">
            {this.state.categories5.map((cate5,index)=>
              <div >
                <div>
                  <Link to ={cate5.id}><img className="imageShow" src={'http://127.0.0.1:8000/storage/' + cate5.picture} controls></img></Link>
                  <h4 style={{paddingLeft: "70px", paddingBottom: "40px"}}>{cate5.name_product}</h4>
                </div>
              </div>
            )}   
            </div>
            </div>
            <br/> 
            <br/>
            <br/>
      </div>
      <Footer/> 
      </React.Fragment>
    );
  }
}
export default Service;