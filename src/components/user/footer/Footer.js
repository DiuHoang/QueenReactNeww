import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
import '../footer/Footerbig.css';
import '../footer/Footersmall.css';
class Footer extends Component {

  render (){
    return (
      <Router>
        
        <div className="footer">
           
           <div>
             <img src="https://www.linkpicture.com/q/logo2_6.png" alt="" width="150px" height="150px"/>
             <div>
             <p>QueenParty</p>
             <p>Ứng dụng đặt tiệc tại nhà</p>
             </div>
           </div>
           <div></div>
           <div>
           <div>
             <i class="fas fa-home">&ensp;Địa chỉ</i>
             <p>101B Lê Hữu Trác</p>
             <p>Thành phố Đà Nẵng</p>
             <p>Việt Nam</p>
           </div><br/>
           <div>
             <i class="fas fa-phone">&ensp;Liên hệ</i>
             <p>Email:[queenpartycom.vn]</p>
             <p>Phone:(+84)090567432</p>
             <p>Fax:(+84)077684219</p>
           </div>
           </div>
           <div>
           <div>
             <i class="fas fa-calculator">&ensp;Hệ thống</i>
             <p className="p">Giao hàng tận nhà</p>
             <p className="p">Nhanh chóng& an toàn</p>
             <p className="p">Đáp ứng mọi yêu cầu</p>
           </div><br/>
           <div>
             <i class="far fa-comment-dots">&ensp;Phản hồi</i>
             <p>Xin vui lòng gửi chúng tôi ý tưởng của bạn,<br/>báo cáo lỗi,đề xuất!Bất kì thông tin phản hồi<br/> sẽ được đánh giá cao.</p>
           </div>
           </div>
           <div>
             <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7668.41304705934!2d108.23924267454373!3d16.054769305559233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1615276754112!5m2!1svi!2s" width="440" height="240"></iframe>
           </div>
         
         </div>
         
       
      </Router>
    );
  }
}
 


export default Footer;