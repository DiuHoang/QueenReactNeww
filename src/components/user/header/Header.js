import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
import '../header/Headerbig.css';
import '../header/Headersmall.css';
class Header extends Component {
  // 1.1
  constructor(props) {
    super(props);
    this.state = {
      account: props.userData,
      isLoggedIn: props.userIsLoggedIn,
    };
    this.logOut = this.logOut.bind(this);
  }
  // 1.2
  logOut() {
    let appState = {
      isLoggedIn: false,
      account: {}
    };
    localStorage["appState"] = JSON.stringify(appState);
    this.setState(appState);
    this.props.history.push('/home/login');
  }
  // 1.3
  render() {
    const aStyle = {
      cursor: 'pointer'
    };
    return (
      <div>
        <header className="header">
          <ul className="nameWeb">
            <li><a href="#"><i class="fa fa-phone" aria-hidden="true">07045228766</i></a></li>
            <li><a href="#"><i class="fas fa-envelope">QueenParty@gmail.com</i></a></li>
          </ul>
          <div className="right_contain">
            <div className="icon">
              <i class="fab fa-facebook-square"></i>&ensp;
                    <i class="fab fa-skype"></i>&ensp;
                    <i class="fab fa-pinterest-square"></i>
            </div>
            {/* <div className="user">
                <Link to="/cart"><i class="fa fa-shopping-cart" aria-hidden="true" ></i></Link>&ensp;                   
                <Link to="/home/login"><a>Đăng nhập</a></Link>
                </div> */}

            {
              this.state.login ? (<div className="user">
                <Link to="/" onClick={this.logOut}>Logout</Link>
              </div>) : (<div className="user">
                <Link to="/home/checkout"><i class="fa fa-shopping-cart" aria-hidden="true" ></i></Link>&ensp;
                {/* <Link to="/home/login"><a>Đăng nhập</a></Link> */}
                {!this.state.isLoggedIn ?
                  // <Link to="/home/login"><a>Đăng nhập</a></Link> 
                  <Link to="/home/register"> <a>Đăng Ky</a></Link> : ""}
              </div>)
            }

            {/* {this.state.checkLogin ==="on"?
                <Link to="/" onClick={this.logOut}>Logout</Link>:<div><Link to="/cart"><i class="fa fa-shopping-cart" aria-hidden="true" ></i></Link>&ensp;<Link to="/home/login" className="dnhap" >Đăng nhập</Link></div>                 
                } */}

          </div>
        </header>

        <div className="navi" >
          <div className="small">
            <Link to="/"><img src="https://www.linkpicture.com/q/logo2_6.png" alt="" /></Link>
            <div className="flex2">
              <div className="dn">
                <div ><i class="fa fa-home">&ensp;Đà Nẵng</i></div>&ensp;&ensp;
              <div><i class="fa fa-truck" aria-hidden="true">&ensp;24/24</i></div>&ensp;
              </div>
              <div className="flex">
               {/* ------------------------------------------ */}
                {/* <form onSubmit={this.onchange}>
                  <input className="input-Search" id="inputsearch" name='txtSearch' type='text' placeholder='Nhập từ khóa...'></input>
                  {this.state.sear === true ? (<a className='link' href='/image'>X</a>) : ''}
                  <Link to="/search"><button id="icon" onClick={this.search} ><i class="fas fa-search"></i></button></Link>
                </form> */}
              </div>

            </div>
          </div>
          <ul>
            <li><Link to="/">Giới thiệu</Link></li>
            <li><Link to="/home/restaurant" >Nhà hàng & Cửa hàng</Link></li>
            <li><Link to="/home/service">Dịch vụ</Link></li>
            <li><Link to="/home/contact">Liên hệ</Link></li>
          </ul>
        </div>

      </div>


    );
  }
}
export default Header;