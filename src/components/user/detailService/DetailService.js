import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../detailService/DetailServicebig.css';
import '../detailService/DetailServicesmall.css';
import {withRouter} from 'react-router';
import {
  Link
}
  from "react-router-dom";
class DetailService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesdetail: [],
      description:[]
    }
    var id = props.match.params.id;
    this.getCategorydetail(id);
    
  }
  getCategorydetail(id) {
    console.log(id);
    fetch("http://127.0.0.1:8000/api/service/detail/" +id )
      .then(response => {
        response.json().then((data) => {
          this.setState({
            categoriesdetail: data.service,
            description: data.description 
          })
        });
      });
  }
  render() {
   console.log(this.state.description);
    let servicedt = this.state.categoriesdetail;
    return (
      <React.Fragment>
        <Header />
        <div>
          <marquee><div className="svdescription">{this.state.description}</div></marquee>
          <div className="disflex">
            <div className="datTiec"> 
            
            {servicedt.map((item,key) =>        
              <div>
                {console.log(item)  }
                <br/>               
                <div className="datTiecImg">
                <Link to={'/home/product/detail/' + item.id}><img src={'http://127.0.0.1:8000/storage/' + item.picture} /></Link>
                </div>
                <p className="h4">{item.name_product}</p>
              </div>     
                )}         
            </div>
          </div>
          <br/> 
          <br/>
          <br/>
        </div>
        
       
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(DetailService) ;