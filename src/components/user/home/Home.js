import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../home/Homebig.css';
import '../home/Homesmall.css';
import {get} from '../../services/api.service';
import Search from '../search/Search';
import { 
  Link 
} 
from "react-router-dom";
class Home extends Component {
  constructor() {
    super();
    this.state = {
        vendor: [],
        purpose: [],
        service: [],
        newVendor: [],
        topVendor: []
    }
    this.getVendor();
    this.getPurpose();
    this.getService();
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

  // getNewVendor(){
  //   get('newVendor').then((data) => {
  //     this.setState({
  //       newVendor: data
  //     })
  //   })
  //   }
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

  getPurpose(){
    fetch("http://127.0.0.1:8000/api/purpose")
    .then(response => {
            response.json().then((data) =>  {
                console.log(data);
                this.setState({
                    purpose: data
                })
            });
    });
    }

    getService(){
      fetch("http://127.0.0.1:8000/api/service")
      .then(response => {
              response.json().then((data) =>  {
                  console.log(data);
                  this.setState({
                    service: data
                  })
              });
      });
      }
      handleSearch = (search) => {
        var vendorpro = [];
        let oldVendor = JSON.parse(localStorage.getItem("vendor"));
        if (!oldVendor) {
          oldVendor = [];
        }
        if (search.length <= 0 || search === '') {
            this.setState({
                vendor: oldVendor,
                valueSearch: search               
            })
            
        
        } else {
            let searchValue = search.toLowerCase();
            console.log('searchValue');
            console.log(searchValue);
            for (var i = 0; i < oldVendor.length; i++) {
                if (oldVendor[i].fullname.toLowerCase().indexOf(searchValue)!= -1) {
                    vendorpro.push(oldVendor[i]);
                    console.log(vendorpro);
                }
            }
            this.setState({
                vendor: vendorpro,
                valueSearch: search
            })
        }
    }
    render() {
        return (
          <React.Fragment>
          <Header/>
          
          <div >
            <img src="./img/main4.PNG" width="100%" height="auto" alt=""/>
            <div className="container">
              <div>
                <h1 className="queenparty">Queen Party</h1>
                {/* <center><h2><b>Website đặt tiệc tại nhà</b></h2></center> */}
                <div className="search">
                   <h2><b>Website đặt tiệc tại nhà</b></h2>&emsp;&emsp;&emsp;&emsp;
                   <Search search={this.handleSearch}/>
                </div>
                <p className="gioithieu">Là trang web hàng đầu tại Việt Nam tích hợp nhiều cửa hàng & nhà hàng cung cấp dịch vụ nấu nướng và phục vụ tiệc như sinh nhật, tân gia, ngày kỷ niệm... tại gia.Khách hàng có thể đặt các món ăn và dịch vụ có sẵn trong cửa hàng hoặc tự tạo kế hoạch cho mình, sau đó gửi yêu cầu đến các nhà hàng, cửa hàng.                                                  </p>
              </div><br/>
              
              <div className="disflex" >
              <div className="vendor">
              {this.state.vendor.map((item)=>
                  <div className="img-container">
                    <Link to ={'/home/vendor/detail/'+item.id}> <img src={'http://127.0.0.1:8000/storage/'+ item.avatar} /></Link>   
                        {this.state.valueSearch&&<h2 className="name_vendor">{item.fullname}</h2>}
                  </div>
              )}
              </div>    
              </div>
            </div><br/>
            <hr className="hr"/>
            <div className="container">
            <div>
              <center><h2>ĐẶT TIỆC NGAY</h2></center><br/>
              <div className="disflex">
                <div className="datTiec">
                  {this.state.purpose.map((order)=>
                    <div>
                      <div className="datTiecImg">
                        <Link to ={'/home/restaurant'}> <img src={'http://127.0.0.1:8000/storage/'+ order.avatar} /></Link>
                      </div>
                      <p className="h4">{order.title}</p>                           
                    </div>
                  )}
                </div>
              </div>

            </div>
            </div><br/>
            <hr className="hr"/>
            <div className="container">
            <div>
              <center><h2>DỊCH VỤ</h2></center><br/>
              <div className="disflex">
                <div className="datTiec">
                {this.state.service.map((service)=>
                    <div >                      
                      <div className="datTiecImg">
                      <Link to={'/home/servicedetail/' + service.id}><img src={'http://127.0.0.1:8000/storage/'+ service.avatar }/></Link>
                      </div>
                      <p className="h4">{service.name_category}</p>                           
                    </div>
                  )}
                </div>
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
                        <Link to ={'/home/vendor/detail/'+item1.id}> <img src={'http://127.0.0.1:8000/storage/'+ item1.avatar} /></Link> 
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
                      <Link to ={'/home/vendor/detail/'+item2.id}> <img src={'http://127.0.0.1:8000/storage/'+ item2.avatar} /></Link> 
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

export default Home;