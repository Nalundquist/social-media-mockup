import './App.css';
import React from "react";
import Header from "./Header";
import LeftBar from "./LeftBar";
import PostBody from "./PostBody";
import RightBar from "./RightBar";

function App() {
  const bodyrow = {
    display: "flex",
    flexDirection: "row"
  };

  return (
    <React.Fragment>
      <Header />
      <div style={bodyrow}>
        <div style={{width: "30%", height: "90vh", backgroundColor: "blue"}}>
          <LeftBar />
        </div>
        <div style={{width: "40%", height: "90vh", backgroundColor: "red"}}>
          <PostBody />
        </div>
        <div style={{width: "30%", height: "90vh", backgroundColor: "yellow", color: "blue"}}>
          <RightBar />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
