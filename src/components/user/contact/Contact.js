import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../contact/Contactbig.css';
import '../contact/Contactsmall.css';
class Contact extends Component{
  render() {
    return (
      <React.Fragment>
      <Header/>
      <div>
        <div className="flex-container">
          <div style={{ flexGrow: "3"}} className="left-box">
            <div style={{display: "flex" }}>
              <div>
                <i className="fas fa-address-card"></i>
              </div>
              <div className="infor">
                <h4 style={{fontWeight: "bold", color: "black"}}>Quản trị viên</h4>
                <h4>Hồ Văn Quân</h4>
                <h4>Nguyễn Thị Tiên</h4>
                <h4>Hoàng Thị Dịu</h4>
                <h4>Trần Thị Huyền Trang</h4>
              </div>
            </div>
            <div style={{display: "flex" }}>
              <div>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="infor">
                <h4 style={{fontWeight: "bold", color: "black"}}>Địa chỉ</h4>
                <h4>101 Lê Hữu Trác, Phước Mỹ, Sơn Trà, Đà Nẵng</h4>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <i className="fas fa-envelope-open-text"></i>
              </div>
              <div className="infor">
                <h4 style={{fontWeight: "bold", color: "black"}}>Email</h4>
                <h4>queenparty@gmail.com</h4>
              </div>
            </div>
            <div style={{display: "flex" }}>
              <div>
                <i className="fas fa-phone"></i>
              </div>
              <div className="infor">
                <h4 style={{fontWeight: "bold", color: "black"}}>Số điện thoại</h4>
                <h4>(+84) 657 847 676</h4>
              </div>
            </div>
            <div>
              <img src="https://lh3.googleusercontent.com/-sKun7aABQdE/YEseCQ2-jiI/AAAAAAAABZk/udrAy-3zx3stECgJoWr-FJU-Ep_Jmc5vACK8BGAsYHg/s512/a.jpg" style={{width: "290px", height: "200px"}}></img>
            </div>
          </div>
          <div style={{ flexGrow: "7" }}>
            <h3>Liên hệ</h3>
            <div className="contact-form">
              <h4>Tên của bạn</h4>
              <input placeholder="Nguyen Van A"></input>
              <h4>Email</h4>
              <input placeholder="nguyenvana@gmail.com"></input>
              <h4>Lời nhắn</h4>
              <textarea className="text-area" placeholder="Bạn có lời nhắn gì đến chúng tôi?"></textarea>
              <button className="button-contact">
                  <h4>Gửi</h4>
              </button>
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
export default Contact;