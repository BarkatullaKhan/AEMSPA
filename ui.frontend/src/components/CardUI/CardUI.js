import { MapTo } from "@adobe/aem-react-editable-components";
import React, { Component } from "react";

import { Link } from "react-router-dom";

require("./CardUI.css");

export const CardUIEditConfig = {
  emptyLabel: "Card UI",
  isEmpty: function (props) {
    return !props || !props.cards || props.cards.length < 1;
  },
};

export default class CardUI extends Component {
  render() {
    if (CardUIEditConfig.isEmpty(this.props)) {
      return null;
    }
    return (
      //    <h1>Card UI {console.log(this.props)}</h1>
      <div className="row ">
        <div className=" card-ui-container justify-content-center col-sm-12 col-md-6 col-lg-4 row justify-content-center p-1 ">
            <h4 className="text-black text-center">{this.props.cardHeadline}</h4>
          {this.props.cards.map((card) => {
            return (
              <Link to={card.itemLink +"?id=123"} className="card-container col-sm-12 col-md-5 col-lg-5 row  text-center p-2 m-2">
                <img src={card.cardImg} className="col-12 card-img " />
                <small>{card.itemName}</small>
              </Link>
            );
          })}
          <Link className="text-decoration-none text-success p-2" to={this.props.cardLink}>See all offers</Link>
        </div>
      </div>
    );
  }
}

MapTo("wknd-spa-react/components/cardui")(CardUI, CardUIEditConfig);
