import React from "react";
import personImage from "../img/person2.png";

function UserControl() {
	const topbox = {
		backgroundColor: "lightBlue",
		height: "15vh"
	}

	const imgbox = {
		border: "2px solid white",
		borderRadius: "4px",
		float: "left",
		marginLeft: "7px",
		zIndex: "5",
		position: "relative",
		bottom: "35px",
		backgroundColor:"white",
		width: "80px",
		height: "80px",
		marginRight: "20px",
		marginBottom: "-35px"
	}

	const cpRow = {
		display: "flex",
		flexDirection: "row",
		float: "left",
		position: "relative",
		bottom: "15px"
	}
	
	return (
		<React.Fragment>
			<div style={topbox}></div>
			<div style={imgbox}>
				<img src={personImage} width="100%" alt="it's you"></img>
			</div>
				<p><strong>Silly Sally</strong></p>
				<br></br>
			<div style={cpRow}>
				<div style={{margin: "5px"}}>
					<p>Post</p>
				</div>
				<div style={{margin: "5px"}}>
					<p>Following</p>
				</div>
				<div style={{margin: "5px"}}>
					<p>Folololowers</p>
				</div>
			</div>
		</React.Fragment>
	)
}

export default UserControl;