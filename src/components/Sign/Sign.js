import React from "react";

const Sign = ({ name, src }) => {
	return (
		<div>
			<p>{name}</p>
			<img src={`../signs/${src}`} />
		</div>
	);
};

export default Sign;
