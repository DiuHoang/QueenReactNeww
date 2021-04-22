import React, { Component } from 'react';
import "./Checkout.css";
import axios from 'axios';
import { withRouter } from 'react-router';
class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carts: [],
            total: [],
            totalPrice: [],
            order: [],
        }
        var id = props.match.params.id;
        this.getAllProducts();
        this.getTotalPrice();
        this.getTotalProduct();
        this.onOrderSubmit = this.onOrderSubmit.bind(this);

    }
    getAllProducts() {
        fetch("http://127.0.0.1:8000/api/cart")
            .then(response => {
                response.json().then((data) => {
                    console.log(data);
                    this.setState({
                        carts: data
                    })
                });
            });
    }
    getTotalPrice() {
        fetch("http://127.0.0.1:8000/api/totalPrice")
            .then(response => {
                response.json().then((data) => {
                    console.log(data);
                    this.setState({
                        totalPrice: data
                    })
                });
            });
    }
    getTotalProduct() {
        fetch("http://127.0.0.1:8000/api/totalProduct")
            .then(response => {
                response.json().then((data) => {
                    console.log(data);
                    this.setState({
                        total: data
                    })
                });
            });
    }
    onOrderSubmit(event) {
        event.preventDefault();
        let user_id = localStorage.getItem("user_id");
        var id = this.props.match.params.id;

        let username = event.target["username"].value;
        let phone_number = event.target["phone_number"].value;
        let address = event.target["address"].value;
        let order_time = event.target["order_time"].value;
        let quantiy_mam = event.target["quantity_mam"].value;
        let note = event.target["note"].value;

        let order = {
            user_id: user_id,
            vendor_id: id,
            username: username,
            phone_number: phone_number,
            address: address,
            order_time: order_time,
            quantiy_mam: quantiy_mam,
            note: note,
        }
        let postInJson = JSON.stringify(order);
        fetch("http://127.0.0.1:8000/api/product/order", {
            mode: 'no-cors',
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Max-Age": "1800",
                "Access-Control-Allow-Headers": "content-type",
                "Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, PATCH, OPTIONS",
                "Content-Type": "application/json",
                'Authorization': user_id,
            },
            body: postInJson
        })
            .then(response => {
                console.log(order);
                // window.location.reload();
                alert('Xác nhận đơn hàng');
                this.props.history.push('/home/payment');

            });
        // .then(response => {
        //     console.log(order);
        //     // window.location.reload();
        //     alert('Xác nhận đơn hàng');
        //     this.props.history.push('/home/payment');

        // });
    }

    render() {
        let totalProduct = this.state.total;
        let totals = totalProduct.length;
        let totalPrice = this.state.totalPrice;
        return (
            <div>
                <div className="wrapper">
                    <div classNameName="container">
                        <div className="flexKhung">
                            <div className="khungInfo">
                                <div class="panel-info">
                                    <div className="panel-heading1">
                                        <h3 className="title-Checkout">
                                            <b>Đơn hàng</b>
                                        </h3>
                                    </div>
                                    <h4 className="strong-titleCheck"><b> Danh sách dịch vụ </b></h4>
                                    <hr className="hr-payment" />
                                    {this.state.carts.map((cart, index) =>
                                        <div>
                                            <div class="product-flex">
                                                <div>
                                                    <img className="imageCheck" src={'http://127.0.0.1:8000/storage/' + cart.picture} />
                                                </div>
                                                <div>{cart.name_product}</div>
                                                <div>
                                                    {cart.price} <span>VNĐ</span>
                                                </div>
                                                <div>
                                                    <button className="button-delete"><i class="fa fa-trash" aria-hidden="true"></i></button>
                                                </div>

                                            </div>
                                            <hr className="hr-payment" />
                                        </div>
                                    )}
                                    {/* 
                 {this.state.totalPrice.map((total, index) =>
                  <h2>Tạm tính: { total.sumPrice}</h2>
                )}
                 */}
                                    <div class="product-flex">
                                        <div>
                                            <strong>Số đơn hàng</strong>
                                        </div>
                                        <div>
                                            <strong>
                                                <b>
                                                    {totals} <span>Đơn</span>
                                                </b>
                                            </strong>
                                        </div>
                                    </div><br />
                                    <div class="product-flex">
                                        <div>
                                            <strong>Tổng đơn hàng</strong>
                                        </div>
                                        <div>{this.state.totalPrice.map((total, index) =>
                                            <strong>
                                                <b>
                                                    {total.sumPrice} <span>VNĐ</span>
                                                </b>
                                            </strong>)}
                                        </div>
                                    </div>

                                </div>

                            </div>
                            {/* Địa chỉ giao hàng */}
                            <div className="khungInfo">
                                <div className="panel-info">
                                    <div className="panel-heading1">
                                        <h3 className="title-Checkout">
                                            <b>Địa chỉ</b>
                                        </h3>
                                    </div>
                                    <h4 className="strong-titleCheck"> <b>Địa chỉ giao hàng </b></h4>
                                    <div className="panel-body">
                                        <form method="POST" onSubmit={this.onOrderSubmit} action="">
                                            <div>
                                                <div>
                                                    <strong className="strong-titleCheck">Tên của bạn <span className="required">(*)</span></strong>
                                                </div>
                                                <div>
                                                    <input
                                                        className="form-input-checkout" id="username" type="text" name="username"
                                                        placeholder="Tên của bạn.." required
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <strong className="strong-titleCheck">Số điện thoại <span className="required">(*)</span></strong>
                                                </div>
                                                <div>
                                                    <input
                                                        className="form-input-checkout" id="phone_number" name="phone_number" type="number"
                                                        placeholder="Số điện thoại của bạn.." required type="number"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <strong className="strong-titleCheck">Địa chỉ  <span className="required">(*)</span></strong>
                                                </div>
                                                <div>
                                                    <input
                                                        className="form-input-checkout" id="address" name="address" type="text"
                                                        placeholder="Địa chỉ của bạn.." required
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <strong className="strong-titleCheck">Thời gian giao hàng  <span className="required">(*)</span></strong>
                                                </div>
                                                <div>
                                                    <input className="form-input-checkout" type="date" id="order_time" name="order_time" required />
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <strong className="strong-titleCheck">Số mâm  <span className="required">(*)</span></strong>
                                                </div>
                                                <div>
                                                    <input
                                                        className="form-input-checkout" id="quantity_mam" name="quantity_mam"
                                                        type="number"
                                                        placeholder="Số mâm.." required
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <strong className="strong-titleCheck">Ghi chú</strong>
                                                </div>
                                                <div>
                                                    <textarea
                                                        className="form-input-checkout" id="note" name="note" type="text"
                                                        placeholder="Ghi chú.."
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <button className="btn-Checkout" type="submit"><b>Tiếp tục </b></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(Checkout);