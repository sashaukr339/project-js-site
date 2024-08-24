import React, { useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";

export default function Header() {
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
