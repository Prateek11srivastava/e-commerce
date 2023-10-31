import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionboc-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitate the buying
          and selling of product or services over the internet . It serves as a
          virtual marketplace where business and individualcan showcase thier
          products, interact with coustomers, and conduct transactions without
          the need for a physical presence.E-commerce websites have gained
          immense popularity due to their convenience accessibility,and the
          global reach they offer
        </p>
        <p>
          E-commerce websites typically display product or services along with
          detailed description,image,price or any avilabe variation(e.g
          sizes,color) Each product usually has it own dedicated page with
          relevent information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
