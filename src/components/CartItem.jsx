import React, { useContext } from "react";
import { ItemContext } from "../itemContext";

function CartItem({ fruit }) {
  const { additem, remove } = useContext(ItemContext);
  const additemhandle = () => {
    additem({ ...fruit, amount: 1 });
  };
  let removeitemhandle = () => {
    remove(fruit.id);
  };
  return (
    <div className="cart card">
      <div>
        <p className="cartN">{fruit.name}</p>
        <p className="cartP">$ {fruit.price}</p>
      </div>
      <div className="right">
        <p className="cartquantity">
          x <span>{fruit.amount}</span>
        </p>
        <div className="quantityctr">
          <button className="btnp" onClick={additemhandle}>
            +
          </button>
          <button className="btnp m" onClick={removeitemhandle}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
