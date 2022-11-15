import React from "react";
import Post from "./Post";
import profilepic1 from "../img/person1.jpg";
import profilepic2 from "../img/goldengirl1.jpg";
import profilepic3 from "../img/doctor.jpg";

const posts = [
  {
    image: <img src={profilepic1} alt="I don't know how to use the computer" width="100%" />,
    name: 'Enthusiastic Esther',
    text: 'Good Morning friends🌞. What a beautiful day to be alive🌄'
  },
  {
    image: <img src={profilepic2} alt="I'm pretty" width="100%" />,
    name: 'Golden Grandma',
    text: 'My sweetie pie passed away this morning🐈💔'
  },
  {
    image: <img src={profilepic3} alt="My bedside manner is immaculate :)" width="100%" />,
    name: 'Smart Susan',
    text: 'Retired from nursing today!👩‍⚕️ Here I come Cabo!🌴'
  },
]

function PostBody(){
	return(
		<React.Fragment>
    {posts.map((post, index) =>
      <Post image={post.image}
        name={post.name}
        text={post.text}
        key={index}/>
    )}
    </React.Fragment>
	);
}

export default PostBody;