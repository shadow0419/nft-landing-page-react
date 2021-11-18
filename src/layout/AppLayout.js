import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// @import style
import { WholeContent } from "./style";
const AppLayout = (props) => {
  return (
    <WholeContent>
      <div>
        <Navbar />
        {props.children}
        <Footer />
      </div>
    </WholeContent>
  );
};
export default AppLayout;
