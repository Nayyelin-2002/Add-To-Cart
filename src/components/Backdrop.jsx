import React from "react";
import Cart from "./Cart";
function Backdrop(props) {
  return (
    <>
      {props.showcartt && (
        <>
          <section className="backdrop" />
          <Cart hidecardhandle={props.hidecardhandle} />
        </>
      )}
    </>
  );
}

export default Backdrop;
