import React, { useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import Order from "./Order";


export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">Compx-Staff</span>
        <ul className="nav">
          <li>
            <FaBasketShopping
              onClick={() => setCartOpen((cartOpen = !cartOpen))}
              className={`shop-cart-button ${cartOpen && "active"}`}
            />

            {cartOpen && (
            <div className="shop-cart">
              {props.orders.map(el => (
                <Order key = {el.id} item = {el} />
              ))}
            </div>
              )}

          </li>
          <li>Про нас</li>
          <li>Наші Контакти</li>
          <li>Кабінет</li>
        </ul>
      </div>
      <div className="presentation"></div>
    </header>
  );
}

