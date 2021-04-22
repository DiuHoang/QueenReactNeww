import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../plan/Planbig.css';
import '../plan/Plansmall.css';
import {withRouter} from 'react-router';

class Plan extends Component {
  constructor(props) {
      super(props);
      this.state = { 
        detailPlan: [],
        categories21: [],
        categories11: [],
        categories51: [],
        categories31: []  
    }
    var id = props.match.params.id; 
    this.getDetailPlan(id);
    this.getCategory21();
    this.getCategory11();
    this.getCategory51();
    this.getCategory31();
  }
  getDetailPlan(id){
    fetch("http://127.0.0.1:8000/api/vendor/detail/plan/" + id)
    .then(response => {
        response.json().then((data) =>  {
            console.log(data);
            this.setState({
                detailPlan: data
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
  render() {
    let detailPlan = this.state.detailPlan;
    return (
      <React.Fragment>
      <Header/>
      <div>
        <div className="vendorplan">
            <img src={'http://127.0.0.1:8000/storage/' + detailPlan.avatar} alt="" width="450px" height="250px"/>
            <h4>{detailPlan.fullname}</h4>
        </div>
        <div className="grid-container">    
          <div class="item2">
            <div className="khungPlan">
                <textarea  className="form-input-plan" placeholder="Viết kế hoạch cho bữa tiệc của bạn và gửi đến chúng tôi.."/>
            </div>
          </div>
          <div className="food">
            <div>
                <button className="btn-Food">Đồ ăn </button><br></br>
                {this.state.categories21.map((item)=>
                <div className="flex-item">
                    <img className="img-plan" src={'http://127.0.0.1:8000/storage/' + item.picture} />
                    <label for="">{item.name_product}</label><br></br>
                    <input type="checkbox" id="" name="" value="Bike" />
                </div>
                )}
            </div>
          </div>
          <div className="speaker">
            <div>
                <button className="btn-Speaker">Loa máy </button><br></br>
                {this.state.categories11.map((loa)=>
                <div className="flex-item">
                    <img className="img-plan" src={'http://127.0.0.1:8000/storage/' + loa.picture} />
                    <label for="">{loa.name_product}</label><br></br>
                    <input type="checkbox" id="" name="" value="Bike" />
                </div>
                )}
            </div>
          </div>
          <div className="cake">
            <div>
                <button className="btn-Cake">Bánh kem </button><br></br>
                {this.state.categories51.map((kem)=>
                <div className="flex-item"> 
                    <img className="img-plan" src={'http://127.0.0.1:8000/storage/' + kem.picture} /> 
                    <label for="">{kem.name_product}</label><br></br>
                    <input type="checkbox" id="" name="" value="Bike" />
                </div>
                )}
            </div>
          </div>
          <div className="deco">
            <div>
                <button className="btn-Deco">Trang trí</button><br></br>
                {this.state.categories31.map((tri)=>
                <div className="flex-item">
                    <img className="img-plan" src={'http://127.0.0.1:8000/storage/' + tri.picture} /> 
                    <label for="">{tri.name_product}</label><br></br>
                    <input type="checkbox" id="" name="" value="Bike" />
                </div>
                )}
            </div><button className="btn-Plan">Đặt</button>
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
export default withRouter(Plan) ;