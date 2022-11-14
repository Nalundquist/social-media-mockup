import React from "react";
import HeadPost from "./HeadPost";

function Header(){
  return(
    <React.Fragment>
      {/* <HeadHome />
      <HeadMessages />
      <HeadNotifications /> */}
      <HeadPost/>
      {/* <HeadSearch /> */}
    </React.Fragment>
  );
}

export default Header;