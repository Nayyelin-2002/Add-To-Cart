import CartItem from "./CartItem";
import { ItemContext } from "../itemContext";
import { useContext } from "react";
function Cart(props) {
  const { items, total } = useContext(ItemContext);

  const totalprice = `$${total.toFixed(2)}`;
  return (
    <section className="cartbox">
      <h2>Your cart items are here!!</h2>
      <section className="cartctr">
        {items.length < 1 ? (
          <h1>No items in your cart</h1>
        ) : (
          <>
            {items.map((fruit) => {
              return <CartItem key={fruit.id} fruit={fruit} />;
            })}
          </>
        )}
      </section>

      <hr />
      <div className="cart1">
        <h3>Total price</h3>
        <p> {totalprice}</p>
      </div>
      <div className="btns">
        <button className="btnclose" onClick={props.hidecardhandle}>
          Close
        </button>

        {items.length < 1 ? (
          <></>
        ) : (
          <>
            <button className="btnorder">Order</button>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;
