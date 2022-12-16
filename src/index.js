import { createRoot } from "react-dom/client";
import SingleComment from "./components/SingleComment.js";
import { commentProps } from "./utils/commentsMock.js";

const App = () => {
	return (
		<div className='ui comments'>
			{/* <SingleComment /> */}
			{/* <SingleComment /> */}
			{/* <SingleComment /> */}
			{commentProps.length &&
				commentProps.map(comment => (
					<SingleComment key={`comment_${comment.id}`} propsParam={comment} />
				))}
		</div>
	);
};

createRoot(document.getElementById("root")).render(<App />);
