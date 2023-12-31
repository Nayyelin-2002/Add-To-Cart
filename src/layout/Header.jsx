import Nav from "../components/Nav";
import Summary from "../components/Summary";
function Header(props) {
  return (
    <div>
      <Nav showcardhandle={props.showcardhandle} />
      <Summary />
    </div>
  );
}

export default Header;
