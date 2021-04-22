import React, { Component } from 'react';
import "./Register.css";
class Register extends Component {
    render() {
        return (
          
            <div className="container">
            <div className="register-form">
                <form action="" method="post">
                    <h1>Đăng kí</h1>
                    <div class="form-check">
                        <h6>Bạn là?</h6>
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Người sử dụng dịch vụ
                        </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Người cung cấp dịch vụ
                        </label>
                    </div>

                    <div className="btn-box">
                        <button type="submit">
                            Tiếp tục
                        </button>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

export default Register;