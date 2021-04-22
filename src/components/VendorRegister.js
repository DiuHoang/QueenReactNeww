import React, { Component } from 'react';
import "./VendorRegister.css";
class VendorRegister extends Component {
    render() {
        return (
          <div className="container">
              <div className="vendorregister-form">
                  <form action="" method="post">
                      <center><h1>Đăng kí</h1></center>
                      <div className="input-box">
                          <input type="text" placeholder="Tên của bạn"></input>
                      </div>
                      <div className="input-box">
                          <input type="email" placeholder="Email"></input>
                      </div>
                      <div className="input-box">
                          <input type="text" placeholder="Số điện thoại"></input>
                      </div>
                      <div className="input-box">
                          <input type="password" placeholder="Mật khẩu"></input>
                      </div>
                      <div className="input-box">
                          <input type="password_confirm" placeholder="Xác nhận mật khẩu"></input>
                      </div>
                      <div className="btn-box">
                          <button type="submit">
                              Đăng kí
                          </button>
                      </div>
                      <center><p>Bạn đã có tài khoản? Đăng nhập ngay</p></center>
                  </form>
              </div>
          </div>
        );
    }
}

export default VendorRegister;