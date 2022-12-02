import { MapTo } from "@adobe/aem-react-editable-components";
import React, { Component } from "react";
import CardItem from "../CardItem/CardItem";

export const CardItemsEditConfig = {
  emptyLabel: "CardItems",
  isEmpty: function (props) {
    return !props;
  },
};

export default class CartItems extends Component {
  state = {
    cart: JSON.parse(localStorage.getItem("cart")),
    cartUpdated: false,
  };
  cartUpdateHandler = () => {
    this.setState({ cart: JSON.parse(localStorage.getItem("cart")) });
  };

  render() {
    if (CardItemsEditConfig.isEmpty(this.state.cart)) {
      return <h1>null</h1>;
    }
    let a = 0;
    return (
      <div>
        <div>
          <h2>Shoping Cart</h2>
        </div>
        {this.state.cart.c.map((p) => {
          a += p.item.productPrice * p.count;
          return (
            <div>
              <CardItem item={p} cartUpdate={this.cartUpdateHandler} />
            </div>
          );
        })}

        <h3 style={{width:"80%",textAlign:"right",padding:"10px"}}>Subtotal  :INR  {a}</h3>
      </div>
    );
  }
}

MapTo("wknd-spa-react/components/cartitems")(CartItems, CardItemsEditConfig);
