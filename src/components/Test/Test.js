import React from "react";
import signs from "../../signs";
import Sign from "../Sign/Sign";

const Test = () => {
	return (
		<div>
			{signs.map((sign) => {
				return (
					<Sign
						name={sign.Caption}
						src={`https://cdn.jsdelivr.net/gh/davidbalian/road-signs/src/signs/${sign.JPG}`}
					/>
				);
			})}
		</div>
	);
};

export default Test;
