import { ItemContext } from "../itemContext";
import { useContext } from "react";
function Nav(props) {
  let { items } = useContext(ItemContext);
  let totalcart = items.reduce((currentvalue, item) => {
    return currentvalue + item.amount;
  }, 0);
  return (
    <nav className="nav">
      <h2>Shopee</h2>
      <button onClick={props.showcardhandle}>
        Cart <span>{totalcart}</span>
      </button>
    </nav>
  );
}

export default Nav;
