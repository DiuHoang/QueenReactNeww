import React, { Component } from 'react';
import "./Payment.css";
import { withRouter } from 'react-router';
class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userOrder: [],
            totalPrice: [],
        }
        this.getUserOrder();
        this.getTotalPrice();
        this.onPaymentAlert = this.onPaymentAlert.bind(this);
    }
    getUserOrder() {
        fetch("http://127.0.0.1:8000/api/product/getOrder")
            .then(response => {
                response.json().then((data) => {
                    console.log(data);
                    this.setState({
                        userOrder: data
                    })
                });
            });
    }
    // componentDidMount() {
    //     this.setState({ userOrder: this.props.userorder });
    // }
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
    onPaymentAlert() {
        alert("Đang chờ admin phê duyệt");
        this.props.history.push('/');
    }
    render() {
        let userorder = this.state.userOrder;
        return (
            <div>
                <div className="contain">
                    <div className="flex-PM">
                        <div>Giá trị đơn hàng </div>
                        <div>Phí giao dịch </div>
                        <div>Thành tiền </div>
                    </div>
                    <hr className="gach" />
                    {/*  */}
                    <div className="flex-PM">
                        <div >{this.state.totalPrice.map((total, index) =>
                            <strong>
                                <b>
                                    {total.sumPrice} <span>VNĐ</span>
                                </b>
                            </strong>)}
                        </div>
                        <div>Miễn phí</div>
                        <div >{this.state.totalPrice.map((total, index) =>
                            <strong>
                                <b>
                                    {total.sumPrice} <span>VNĐ</span>
                                </b>
                            </strong>)}
                        </div>
                    </div>
                    {/*  */}

                    <div className="enter">
                        <div className="flex">
                            <div>
                                <img className="banner" src="./image/shippinh.png" />
                                <br />
                                <i className="queen-payment">Queen Party</i>
                                <p className="moTa">
                                    ✳️ Giao hàng nhanh chóng <br />
              ✳️ Dịch vụ đa dạng nhất <br /> ✳️ Đồng hành cùng bạn{" "}
                                </p>
                                <br />
                            </div>
                            <div className="khungPayment">
                                <div className="flexKhung1">
                                    <div>
                                        <div className="margin">Tên của bạn</div>
                                        <div className="margin">Địa chỉ</div>
                                        <div className="margin">Số điện thoại</div>
                                        <div className="margin">Thời gian giao</div>
                                        <div className="margin">Ghi chú</div>
                                    </div>
                                    <div>
                                        <b>
                                            <div className="margin">{userorder.username}</div>
                                            <div className="margin">{userorder.address}</div>
                                            <div className="margin">{userorder.phone_number}</div>
                                            <div className="margin">{userorder.order_time}</div>
                                            <div className="margin">{userorder.note}</div>
                                        </b>
                                    </div>
                                </div>
                            </div>
                            <div className="payment1">
                                <p className="flex-img">
                                    <img
                                        src="https://i.imgur.com/28akQFX.jpg"
                                        width="200px"
                                        height="100px"
                                    />
                                    <img
                                        src="https://i.imgur.com/5QFsx7K.jpg"
                                        width="200px"
                                        height="100px"
                                    />
                                </p>
                                <p className="ma">
                                    <b>Phương thức thanh toán</b>
                                </p>
                                <p className="flexRadio">
                                    <input
                                        type="radio"
                                        id="huey"
                                        name="drone"
                                        value="tructiep"
                                        checked
                                    />{" "}
              Thanh toán trực tiếp
              <br />
                                </p>
                                <p className="flexRadio">
                                    <input
                                        type="radio"
                                        id="huey"
                                        name="drone"
                                        value="tindung"
                                        checked
                                    />
              Thanh toán thẻ tín dụng
              <br />
                                </p>
                            </div>
                        </div>
                        <form onSubmit={this.onPaymentAlert} action="">
                            <button type="submit" className="btn-payment" ><b>
                                Tiếp tục
        </b></button>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(Payment);