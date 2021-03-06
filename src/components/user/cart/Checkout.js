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
                alert('X??c nh???n ????n h??ng');
                this.props.history.push('/home/payment');

            });
        // .then(response => {
        //     console.log(order);
        //     // window.location.reload();
        //     alert('X??c nh???n ????n h??ng');
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
                                            <b>????n h??ng</b>
                                        </h3>
                                    </div>
                                    <h4 className="strong-titleCheck"><b> Danh s??ch d???ch v??? </b></h4>
                                    <hr className="hr-payment" />
                                    {this.state.carts.map((cart, index) =>
                                        <div>
                                            <div class="product-flex">
                                                <div>
                                                    <img className="imageCheck" src={'http://127.0.0.1:8000/storage/' + cart.picture} />
                                                </div>
                                                <div>{cart.name_product}</div>
                                                <div>
                                                    {cart.price} <span>VN??</span>
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
                  <h2>T???m t??nh: { total.sumPrice}</h2>
                )}
                 */}
                                    <div class="product-flex">
                                        <div>
                                            <strong>S??? ????n h??ng</strong>
                                        </div>
                                        <div>
                                            <strong>
                                                <b>
                                                    {totals} <span>????n</span>
                                                </b>
                                            </strong>
                                        </div>
                                    </div><br />
                                    <div class="product-flex">
                                        <div>
                                            <strong>T???ng ????n h??ng</strong>
                                        </div>
                                        <div>{this.state.totalPrice.map((total, index) =>
                                            <strong>
                                                <b>
                                                    {total.sumPrice} <span>VN??</span>
                                                </b>
                                            </strong>)}
                                        </div>
                                    </div>

                                </div>

                            </div>
                            {/* ?????a ch??? giao h??ng */}
                            <div className="khungInfo">
                                <div className="panel-info">
                                    <div className="panel-heading1">
                                        <h3 className="title-Checkout">
                                            <b>?????a ch???</b>
                                        </h3>
                                    </div>
                                    <h4 className="strong-titleCheck"> <b>?????a ch??? giao h??ng </b></h4>
                                    <div className="panel-body">
                                        <form method="POST" onSubmit={this.onOrderSubmit} action="">
                                            <div>
                                                <div>
                                                    <strong className="strong-titleCheck">T??n c???a b???n <span className="required">(*)</span></strong>
                                                </div>
                                                <div>
                                                    <input
                                                        className="form-input-checkout" id="username" type="text" name="username"
                                                        placeholder="T??n c???a b???n.." required
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <strong className="strong-titleCheck">S??? ??i???n tho???i <span className="required">(*)</span></strong>
                                                </div>
                                                <div>
                                                    <input
                                                        className="form-input-checkout" id="phone_number" name="phone_number" type="number"
                                                        placeholder="S??? ??i???n tho???i c???a b???n.." required type="number"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <strong className="strong-titleCheck">?????a ch???  <span className="required">(*)</span></strong>
                                                </div>
                                                <div>
                                                    <input
                                                        className="form-input-checkout" id="address" name="address" type="text"
                                                        placeholder="?????a ch??? c???a b???n.." required
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <strong className="strong-titleCheck">Th???i gian giao h??ng  <span className="required">(*)</span></strong>
                                                </div>
                                                <div>
                                                    <input className="form-input-checkout" type="date" id="order_time" name="order_time" required />
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <strong className="strong-titleCheck">S??? m??m  <span className="required">(*)</span></strong>
                                                </div>
                                                <div>
                                                    <input
                                                        className="form-input-checkout" id="quantity_mam" name="quantity_mam"
                                                        type="number"
                                                        placeholder="S??? m??m.." required
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <strong className="strong-titleCheck">Ghi ch??</strong>
                                                </div>
                                                <div>
                                                    <textarea
                                                        className="form-input-checkout" id="note" name="note" type="text"
                                                        placeholder="Ghi ch??.."
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <button className="btn-Checkout" type="submit"><b>Ti???p t???c </b></button>
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