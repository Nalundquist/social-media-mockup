import React from "react";

function Post(props){
	const imgbox = {
		border: "2px solid white",
		borderRadius: "4px",
		float: "left",
		marginLeft: "7px",
		zIndex: "5",
		backgroundColor:"white",
		width: "80px",
		height: "80px",
		marginRight: "20px"
	}
	return (
		<React.Fragment>
			<div style={imgbox}>
				<p>{props.image}</p>
			</div>
			<h4>{props.name}</h4>
			<p>{props.text}</p>
		</React.Fragment>
	)
}

export default Post;