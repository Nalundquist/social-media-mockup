import React from "react";
import HeadPost from "./HeadPost";
import HeadHome from "./HeadHome";
import HeadMessages from "./HeadMessages";
import HeadSearch from "./HeadSearch";
import HeadNotifications from "./HeadNotifications";


function Header(){
  const headstyle = {
    marginTop: "0px",
    borderBottom: "2px solid grey",
    marginBottom: "5px",
    paddingTop: "15px",
    paddingBottom: "35px",
    paddingLeft: "5px",
    paddingRight: "5px"
  };
  return(
    <React.Fragment>
      <div style={headstyle}>
        <div style={{float: "left"}}>
          <HeadHome />
          <HeadNotifications />
          <HeadMessages />
        </div>
        <div style={{float: "right"}}>
          <HeadSearch />
          <HeadPost/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;