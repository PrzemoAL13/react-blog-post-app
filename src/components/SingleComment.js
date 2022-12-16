import React from "react";

const SingleComment = ({ propsParam }) => {
	const { name, text, url, date } = propsParam;
	return (
		<div className='comment'>
			<a href='/' className='avatart'>
				<img src={url} width={100} height={100} alt='profilePicture'></img>
			</a>
			<div className='content'>
				<a href='/' className='author'>
					{name}
				</a>
				<div className='metadata'>
					<span className='date'>{date}</span>
				</div>
				<div className='text'>{text}</div>
			</div>
		</div>
	);
};

export default SingleComment;
