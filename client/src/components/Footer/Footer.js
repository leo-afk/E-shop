import React from 'react';
import Facebook from './icon/facebook.svg'
import Instagram from './icon/instagram.svg'


const Footer = () =>  {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <image src={Facebook}/>/Nô Vintage //add this link to icon https://www.facebook.com/tiemnovintage  
          <image src={Instagram}/> /tiemno.vintage //add this link to the icon "https://www.instagram.com/tiemno.vintage/?fbclid=IwAR00_myptha7nonrkQRmhg725j9e-ckfby5BQGxXFPfXAPf-c-GqDEqBMPg"
        </div>
        <div className="footer__content ">
          <div> Nô - Vintage </div>
          <div>***Your vintage, your way! </div>
          <div>Nô là sự dịu dàng. Thanh lịch. Năng động hoặc cá tính. Nô dành cho những cô gái yêu phong cách thời trang vintage nhưng không muốn bị bó buộc trong một khuôn khổ nhất định.</div>
          <div>Tel: +84335465828</div>
          <div>Email: thaophamt.dn@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;