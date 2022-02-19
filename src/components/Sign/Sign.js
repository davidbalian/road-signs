import React, { useState } from "react";

const Sign = ({ name, src, r1, r2, r3 }) => {
	const [choice, setChoice] = useState(null);

	let arrayOfNames = [name, r1, r2, r3];
	arrayOfNames.sort((a, b) => b.length - a.length);

	const handleInputChange = (e) => {
		setChoice(e.target.value);
	};

	return (
		<div>
			<img
				src={`https://cdn.jsdelivr.net/gh/davidbalian/road-signs/src/signs/${src}`}
				alt='road sign'
			/>

			<div className='choices'>
				<input
					type='radio'
					name='caption'
					value={arrayOfNames[0]}
					checked={choice === arrayOfNames[0]}
					onChange={handleInputChange}
				/>
				<label>{arrayOfNames[0]}</label>
				<br />
				<input
					type='radio'
					name='caption'
					value={arrayOfNames[1]}
					checked={choice === arrayOfNames[1]}
					onChange={handleInputChange}
				/>
				<label>{arrayOfNames[1]}</label>
				<br />
				<input
					type='radio'
					name='caption'
					value={arrayOfNames[2]}
					checked={choice === arrayOfNames[2]}
					onChange={handleInputChange}
				/>
				<label>{arrayOfNames[2]}</label>
				<br />
				<input
					type='radio'
					name='caption'
					value={arrayOfNames[3]}
					checked={choice === arrayOfNames[3]}
					onChange={handleInputChange}
				/>
				<label>{arrayOfNames[3]}</label>
			</div>
		</div>
	);
};

export default Sign;
