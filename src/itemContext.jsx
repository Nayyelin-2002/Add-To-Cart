import { createContext, useReducer } from "react";
import { act } from "react-dom/test-utils";

const initialState = {
  items: [],
  total: 0,
};
const ItemReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotal = state.total + action.item.price * action.item.amount;
    const existedItemsId = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    const existingItem = state.items[existedItemsId];
    let updatedItems;
    if (existingItem) {
      const toupdateItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existedItemsId] = toupdateItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      total: updatedTotal,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const existedItemsId = state.items.findIndex((item) => {
      return item.id === action.id;
    });

    const existingItem = state.items[existedItemsId];
    const updatedTotal = state.total - existingItem.price;

    let updatedremoveitems;
    if (existingItem.amount === 1) {
      updatedremoveitems = state.items.filter((items) => {
        return items.id !== action.id;
      });
    } else {
      let removeditem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedremoveitems = [...state.items];
      updatedremoveitems[existedItemsId] = removeditem;
    }
    return {
      items: updatedremoveitems,
      total: updatedTotal,
    };
  }

  return initialState;
};
export const ItemContext = createContext({
  items: [],
  total: 0,
  additem: (item) => {},
  remove: (id) => {},
});

const ItemContextProvider = (props) => {
  const [itemState, itemDispatch] = useReducer(ItemReducer, initialState);

  let addItems = (item) => {
    itemDispatch({ type: "ADD_ITEM", item });
  };
  let removeitem = (id) => {
    itemDispatch({ type: "REMOVE_ITEM", id });
  };

  const itemctx = {
    items: itemState.items,
    total: itemState.total,
    additem: addItems,
    remove: removeitem,
  };
  return (
    <ItemContext.Provider value={itemctx}>
      {props.children}
    </ItemContext.Provider>
  );
};
export default ItemContextProvider;
