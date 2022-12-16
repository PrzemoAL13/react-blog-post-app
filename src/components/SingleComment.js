import React from "react";
import pic1 from "../img/pic1.png";

const SingleComment = () => {
	return (
		<div className='comment'>
			<a href='/' className='avatart'>
				<img src={pic1} alt='profilePicture'></img>
			</a>
			<div className='content'>
				<a href='/' className='author'>
					Sarah
				</a>
				<div className='metadata'>
					<span className='date'>Today at 5:00PM</span>
				</div>
				<div className='text'>It's amazing!</div>
			</div>
		</div>
	);
};

export default SingleComment;
