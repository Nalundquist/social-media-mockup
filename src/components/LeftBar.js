import React from "react";
import UserControl from "./UserControl";
import ProfileSummary from "./ProfileSummary";

function LeftBar() {
	const userControlStyle= {
		height: "30vh",
		margin: "5px",
		border: "2px solid grey",
		padding: "5px"
	}
	const profileSummaryStyle= {
		height: "40vh",
		margin: "5px",
		border: "2px solid grey",
		padding: "10px"
	}
	return (
		<React.Fragment>
			<div style={userControlStyle}>
				<UserControl />
			</div>
			<div style={profileSummaryStyle}>
				<ProfileSummary />
			</div>
		</React.Fragment>
	);
}

export default LeftBar;