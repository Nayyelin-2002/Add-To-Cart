import { useState } from "react";
import Backdrop from "../components/Backdrop";
import Body from "./Body";
import Header from "./Header";
function Main() {
  let [showcartt, setShowcartt] = useState(false);

  let showcardhandle = () => {
    setShowcartt(true);
  };
  let hidecardhandle = () => {
    setShowcartt(false);
  };
  return (
    <>
      <Header showcardhandle={showcardhandle} />
      <Body />
      <Backdrop showcartt={showcartt} hidecardhandle={hidecardhandle} />
    </>
  );
}

export default Main;
