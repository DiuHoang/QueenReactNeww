import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../detailRestaurant/DetailRestaurantbig.css';
import '../detailRestaurant/DetailRestaurantsmall.css';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';

class DetailRestaurant extends Component {
  constructor(props) {
    super(props);
    let user = localStorage.getItem("user_id");
    this.state = {
      detail: [],
      categories21: [],
      categories11: [],
      categories31: [],
      categories51: [],
      categories41: [],
      getdataComment: [],
      btnComment: false
    }
    var id = props.match.params.id;
    localStorage.setItem("id_vendor", id);
    this.getDetail(id);
    this.getCategory21();
    this.getCategory11();
    this.getCategory31();
    this.getCategory41();
    this.getCategory51();
    this.getAllComment(id);
    this.onAddComment = this.onAddComment.bind(this);
    this.buttonComment = this.buttonComment.bind(this);

  }
  getDetail(id) {
    fetch("http://127.0.0.1:8000/api/vendor/detail/" + id)
      .then(response => {
        response.json().then((data) => {
          console.log(data);
          this.setState({
            detail: data
          })
        });
      });
  }
  getCategory21() {
    fetch("http://127.0.0.1:8000/api/product21")
      .then(response => {
        response.json().then((data) => {
          console.log(data);
          this.setState({
            categories21: data
          })
        });
      });
  }
  getCategory11() {
    fetch("http://127.0.0.1:8000/api/product11")
      .then(response => {
        response.json().then((data) => {
          console.log(data);
          this.setState({
            categories11: data
          })
        });
      });
  }
  getCategory31() {
    fetch("http://127.0.0.1:8000/api/product31")
      .then(response => {
        response.json().then((data) => {
          console.log(data);
          this.setState({
            categories31: data
          })
        });
      });
  };
  getCategory41() {
    fetch("http://127.0.0.1:8000/api/product41")
      .then(response => {
        response.json().then((data) => {
          console.log(data);
          this.setState({
            categories41: data
          })
        });
      });
  };
  getCategory51() {
    fetch("http://127.0.0.1:8000/api/product51")
      .then(response => {
        response.json().then((data) => {
          console.log(data);
          this.setState({
            categories51: data
          })
        });
      });
  };
  getAllComment(id) {
    fetch('http://127.0.0.1:8000/api/totalComment/' + id)
      .then(response => {
        response.json().then((data) => {
          console.log(data);
          this.setState({
            getdataComment: data
          })
        });
      });
  }
  onAddComment(event) {

    event.preventDefault();
    let content = event.target['comment'].value;
    let vendor_id = localStorage.getItem('id_vendor');
    // let user_id = event.target['user_id'].value;
    //let user_id = localStorage.getItem('user_id');
    var id = this.props.match.params.id;
    console.log(id);
    let comment = {
      user_id: 2,
      content: content
    }

    let postInJson = JSON.stringify(comment);
    console.log(vendor_id);
    fetch("http://127.0.0.1:8000/api/addComment/" + vendor_id, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: postInJson
    })
      .then((response) => {
        console.log(response);
        window.location.reload();
      });
  }
  myFunction(e) {
    e.preventDefault();
    var x = document.getElementById("myDIV").style;
    if (x.display === "block") {
      x.display = "none";
    } else {
      x.display = "block";
    }

  }
  buttonComment() {
    this.setState({
      btnComment: true
    })
  }
  render() {
    let detail = this.state.detail;
    return (
      <React.Fragment>
        <Header />
        <div>
          <div >

            <div className="detailRestaurant">
              <div>
                <img src={'http://127.0.0.1:8000/storage/' + detail.avatar} alt="" width="450px" height="250px" />
              </div>
              <div className="detail-content">
                <h1>{detail.fullname}</h1><br />
                <p>{detail.phonenumber}</p>
                <p>{detail.address}</p>
                <p>{detail.email}</p>
                <p>{detail.open_time}</p>
                <p>{detail.description}</p><br />
                <div className="detail-button">
                  <button onClick={this.myFunction}><i class="far fa-comment-dots">Viết đánh giá</i></button>
                  <Link to={'/home/vendor/detail/plan/' + detail.id}><button className="keHoach"><i class="far fa-edit">Tạo kế hoạch</i></button></Link>
                </div>
                <div id="myDIV">
                  <form onSubmit={this.onAddComment}>
                    <input placeholder="Viết đánh giá..." name="comment"></input>

                    <button type="submit" >Đăng</button>
                  </form>
                </div>
              </div>
            </div>
            <hr className="hr" />
            <div className="container">
              <div>
                <center><h2>DANH SÁCH ĐỒ ĂN</h2></center><br />
                <div className="disflex">
                  <div className="datTiec">
                    {this.state.categories51.map((item) =>
                      <div>
                        <div className="datTiecImg">
                          <Link to={'/home/product/detail/' + item.id}><img src={'http://127.0.0.1:8000/storage/' + item.picture} /></Link>
                        </div>
                        <p className="h4">{item.name_product}</p>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
            <hr className="hr" />
            <div className="container">
              <div>
                <center><h2>DANH SÁCH DỊCH VỤ LOA MÁY</h2></center><br />
                <div className="disflex">
                  <div className="datTiec">

                    {this.state.categories11.map((loa) =>
                      <div>
                        <div className="datTiecImg">
                          <Link to={'/home/product/detail/' + loa.id}><img src={'http://127.0.0.1:8000/storage/' + loa.picture} /></Link>
                        </div>
                        <p className="h4">{loa.name_product}</p>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
            <hr className="hr" />
            <div className="container">
              <div>
                <center><h2>DANH SÁCH DỊCH VỤ TRANG TRÍ</h2></center><br />
                <div className="disflex">
                  <div className="datTiec">

                    {this.state.categories41.map((tri) =>
                      <div>
                        <div className="datTiecImg">
                          <Link to={'/home/product/detail/' + tri.id}><img src={'http://127.0.0.1:8000/storage/' + tri.picture} /></Link>
                        </div>
                        <p className="h4">{tri.name_product}</p>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
            <hr style={{ border: "1px solid black", width: "100%" }} />
            <div>
              <div>
                <h1 style={{ textAlign: "center" }}>Đánh giá</h1>
              </div>

              <div className="danhGia">
                {this.state.getdataComment.map((comment) =>
                  <div>
                    <h4>{comment.name}</h4>
                    <p>{comment.content}</p>
                  </div>
                )}
                <br />
                <div className="flex">
                  <form onSubmit={this.onAddComment}>
                    <input placeholder="Viết đánh giá..." name="comment"></input>
                    <button type="submit" >Đăng</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />

        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(DetailRestaurant);
