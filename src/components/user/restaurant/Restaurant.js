import React, { Component } from 'react';
import '../restaurant/Restaurantbig.css';
import '../restaurant/Restaurantsmall.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { 
  Link 
} 
from "react-router-dom";
import {withRouter} from 'react-router';
class Restaurant extends Component {
    constructor() {
        super();
        this.state = {
          vendor: [],
          newVendor: [],
          topVendor: []
            
        }
        this.getVendor();
        this.getNewVendor();
        this.getTopVendor();
        
    }
    getVendor(){
      fetch("http://127.0.0.1:8000/api/index")
      .then(response => {
              response.json().then((data) =>  {
                  console.log(data);
                  this.setState({
                      vendor: data
                  })
              });
      });
      } 
      getNewVendor(){
        fetch("http://127.0.0.1:8000/api/newVendor")
        .then(response => {
                response.json().then((data) =>  {
                    console.log(data);
                    this.setState({
                      newVendor: data
                    })
                });
        });
        } 
        getTopVendor(){
          fetch("http://127.0.0.1:8000/api/topVendor")
          .then(response => {
                  response.json().then((data) =>  {
                      console.log(data);
                      this.setState({
                        topVendor: data
                      })
                  });
          });
          }
   
    render() {
        return (
          <React.Fragment>
          <Header/>
          <br/>
          <div >
            <div className="restaurantpage">
            <div className="flex">
                  <div className="menudm">
                  <div className="danhmuc">
                    <ul>
                      <li><a class="active" href="#home">Danh mục</a></li>
                      <li><a href="#news">Nhà hàng & cửa hàng</a></li>
                      <li><a href="#contact">Nhà hàng mới nhất</a></li>
                      <li><a href="#about">Nhà hàng thịnh hành</a></li>
                      <li><a href="#contact">Nhà hàng yêu thích</a></li>
                      <li><a href="#about">Nhà hàng liên quan</a></li>
                    </ul>
                  </div><br/>
                  <div className="camket">
                    <ul>
                      <li><a class="active" href="#home">Cam kết bền vững</a></li>
                      <li><img src="https://www.linkpicture.com/q/camket.jpg" alt="" width="268px" height="130px"/></li>
                      <li>
                      <label>
                      <input type="checkbox" checked="checked"/>&ensp;Đúng nguồn gốc
                      </label><br/>
                      <label>
                      <input type="checkbox" checked="checked"/>&ensp;Đúng chất lượng
                      </label><br/>
                      <label>
                      <input type="checkbox" checked="checked"/>&ensp;Đúng giá sản phẩm
                      </label><br/>
                      <label>
                      <input type="checkbox" checked="checked"/>&ensp;Cam kết hoàn tiền 100%
                      </label>
                      </li>
                    </ul>
                  </div><br/>
                  <div className="giatri">
                    <ul>
                      <li><a class="active" href="#home">Giá trị bền vững</a></li>
                      <li><img src="https://i.imgur.com/dsPRDTv.jpg" alt="" width="268px" height="130px"/></li>
                      <li><i class="fas fa-tags">&ensp;Ưu đãi tốt nhất</i></li>
                      <li><i class="fas fa-truck">&ensp;Đáp ứng mọi yêu cầu</i></li>
                      <li><i class="fas fa-home">&ensp;Phục vụ tận nhà</i></li>
                      <li><i class="far fa-money-bill-alt">&ensp;Giá cả hợp lí</i></li>
                    </ul>
                  </div>
                  </div>
                <div>
                {this.state.vendor.map((item)=>
                  <div className="restaurant">
                    <div className="flex">
                      <div>
                      <Link to ={'/home/vendor/detail/'+item.id}><img src={'http://127.0.0.1:8000/storage/'+ item.avatar }/> </Link>
                      </div>
                      <div className="nameRestaurant"> 
                        <h3>{item.fullname}</h3>
                        <div className="flex">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        </div>
                        <p>{item.description}</p>
                      </div>
                      <div className="freeship">
                      <i class="fas fa-truck">&ensp;Miễn phí vận chuyển</i><br/>
                      <Link to ={'/home/vendor/detail/'+item.id}><button >Xem chi tiết & đặt tiệc</button></Link><br/>
                      <Link to ={'/home/vendor/detail/'+item.id}><button className="danhgia">Đánh giá</button></Link>
                      </div>                           
                    </div>
                    
                  </div>
                )}
                </div>
          </div>
          </div><br/>
          <hr className="hr"/>
            <div className="container">
            <div>
              <center><h2>TOP NHÀ HÀNG MỚI NHẤT</h2></center><br/>
              <div className="disflex">
                <div className="datTiec">
                {this.state.newVendor.map((item1)=>
                    <div>
                      <div className="datTiecImg">
                      <Link to ={'/home/vendor/detail/'+item1.id}><img src={'http://127.0.0.1:8000/storage/'+ item1.avatar }/> </Link>
                      </div>
                      <p className="h4">{item1.fullname}</p>                           
                    </div>
                  )}
                </div>
              </div>

            </div>
            </div><br/>
            <hr className="hr"/>
            <div className="container">
            <div>
              <center><h2>TOP NHÀ HÀNG THỊNH HÀNH</h2></center><br/>
              <div className="disflex">
                <div className="datTiec">
                {this.state.topVendor.map((item2)=>
                    <div>
                      <div className="datTiecImg">
                      <Link to ={'/home/vendor/detail/'+item2.id}><img src={'http://127.0.0.1:8000/storage/'+ item2.avatar }/> </Link>
                      </div>
                      <p className="h4">{item2.fullname}</p>                           
                    </div>
                  )}
                </div>
              </div>

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

export default withRouter(Restaurant) ;