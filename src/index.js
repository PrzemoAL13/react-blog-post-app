import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./components/SingleComment.js";

const App = () => {
	return (
		<div className='ui comments'>
			<SingleComment />
			<SingleComment />
			<SingleComment />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
