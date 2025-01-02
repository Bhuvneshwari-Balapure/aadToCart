import WebFooter from "../components/website/WebFooter";
import WebHeader from "../components/website/WebHeader";
import { Outlet } from "react-router-dom";
const Website = () => {
  return (
    <>
        <WebHeader />
        <hr size="1" color="black" />
            <Outlet />
        <hr size="1" color="black" />
        <WebFooter/>
     
    </>
  );
};
export default Website;
