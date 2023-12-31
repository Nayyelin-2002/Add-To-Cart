import { ItemContext } from "../itemContext";
import { useState, useContext } from "react";

function Card({ fruit }) {
  const { additem } = useContext(ItemContext);
  const [currentAmount, setCurrentAmount] = useState(1);
  const number = +currentAmount;

  const addtocart = () => {
    if (number < 1 || number > 5) {
      alert("Input valid amount");

      return;
    }
    additem({
      id: fruit.id,
      amount: number,
      price: fruit.price,
      name: fruit.name,
    });
    console.log(number);
  };
  return (
    <div className="cart">
      <div>
        <p className="cartN">{fruit.name}</p>
        <p className="cartD">{fruit.describe}</p>
        <p className="cartP">{fruit.price}</p>
      </div>
      <div className="right">
        <input
          type="number"
          className="cartI"
          name=""
          id=""
          min={1}
          max={5}
          value={number}
          onChange={(e) => {
            setCurrentAmount(e.target.value);
            // console.log(number);
          }}
        />
        <button className="cartB" onClick={addtocart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
export default Card;
