// import React, {Component} from 'react';
// import Home from './components/user/home/Home';
// import Restaurant from './components/user/restaurant/Restaurant';
// import Service from './components/user/service/Service';
// import Contact from './components/user/contact/Contact';

// import './App.css';
// import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
// import routes from './components/routes';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import DetailRestaurant from './components/user/detailRestaurant/DetailRestaurant';
// import DetailFood from './components/user/detailFood/DetailFood';
// import Plan from './components/user/plan/Plan';
// import Cart from './components/user/cart/Cart';
// import DetailService from './components/user/detailService/DetailService';
// import Search from './components/user/search/Search';
// class App extends Component {
//   render(){
//   return (
//     <Router>
//       <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" ></link>
//     <ToastContainer />
//       <Switch>  
//         <Route path="/" component={Home} exact />
//         <Route path="/restaurant" component={Restaurant} exact />
//         <Route path="/service" component={Service} exact />
//         <Route path="/contact" component={Contact} exact />
//         <Route path="/vendor/detail/:id" component={DetailRestaurant} exact/>
//         <Route path="/product/detail/:id" component={DetailFood} exact/>
//         <Route path="/servicedetail/:id" component={DetailService} exact/>
//         <Route path="/vendor/detail/plan/:id" component={Plan} exact />
//         <Route path="/cart" component={Cart} exact />
//         <Route path="/search" component={Search} exact />
//       </Switch>    
//     </Router>  
//     );

//   }
  

// }

// export default App;

import React, { Component } from 'react';
import dotenv from  'dotenv'
import { BrowserRouter as Router , Route , Switch} from "react-router-dom"; 
import Routes from './components/routes';

class App extends Component {
  loadRoute(){
    var reusult=Routes.map((route,id)=>{
      return <Route
        id={id}
        exact={route.exact}
        path={route.path}
        component={route.main}
        params={route.params}
      ></Route>
    })
    return reusult;
  }

  render() {
    console.log(process.env.API_URL)
    return (
      <div>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" ></link>
        <Router>
          {/* <Head />
          <Slider /> */}
          <Switch>
            {this.loadRoute()}
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;