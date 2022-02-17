import React from "react";

const Sign = ({ name, src, r1, r2, r3 }) => {
	return (
		<div>
			<img
				src={`https://cdn.jsdelivr.net/gh/davidbalian/road-signs/src/signs/${src}`}
				alt='road sign'
			/>

			<div className='choices'>
				<input type='radio' name='caption' value='answer' />
				<label>{name}</label>
				<br />
				<input type='radio' name='caption' value='r1' />
				<label>{r1}</label>
				<br />
				<input type='radio' name='caption' value='r2' />
				<label>{r2}</label>
				<br />
				<input type='radio' name='caption' value='r3' />
				<label>{r3}</label>
			</div>
		</div>
	);
};

export default Sign;
