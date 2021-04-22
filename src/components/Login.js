import React, { Component } from 'react';
import "./Login.css";
import { Redirect } from 'react-router';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        if (nam === "img") {
            val = "image/" + event.target.files[0].name;
        }
        this.setState({ [nam]: val });
    }

    submit = (event) => {
        event.preventDefault();

        event.target.reset();

        let user = {
            email: this.state.email,
            password: this.state.password
        }

        let userLogin = JSON.stringify(user);

        console.warn(userLogin);

        fetch("http://127.0.0.1:8000/api/login/", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: userLogin
        })
            .then(response => {
                response.json().then((data) => {
                    if (response.status === 200) {
                        // <Redirect push to="/home/restaurant/"/>
                        localStorage.setItem("user", data.id);
                        this.props.history.push("/home/restaurant");

                    }
                    else {
                        alert("Login failed.");
                        //Lap lai trang
                    }
                });
            });
    }
    render() {
        return (
            <form className="khungLogin" onSubmit={this.submit}>
                <h1 className="title-Login"> Đăng nhập </h1>
                <hr className="hr-Login" />
                <img className="img-logo" src="https://www.linkpicture.com/q/logo2_6.png" />
                <h5 className="queen"><i>Queen Party</i> </h5>
                <div className="contentLogin">
                    <div>
                        <div>
                            <strong className="strong-title-Login">
                                Email <span className="required">(*)</span>
                            </strong>
                        </div>
                        <div>
                            <input
                                className="form-inputLogin"
                                placeholder="Nhập email.."
                                required
                                name="email" value={this.props.email} onChange={(e) => this.onChangeHandler(e)}
                            />
                        </div>
                    </div>
                    <br />
                    <div>
                        <div>
                            <strong className="strong-title-Login">
                                Mật khẩu<span className="required">(*)</span>
                            </strong>
                        </div>
                        <div>
                            <input
                                className="form-inputLogin"
                                placeholder="Nhập mật khẩu.."
                                required type="password"
                                name="password" value={this.props.password} onChange={(e) => this.onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>
                <br />
                <button className="btn-Login"><b>Đăng nhập</b></button>
                <br />
                <p className="description-Login">
                    <b>Bạn chưa có tài khoản? Đăng kí ngay</b>{" "}
                </p>
            </form>
        );
    }
}

export default Login;