import React, { useEffect, useState } from "react";

const Sign = ({ name, src, r1, r2, r3 }) => {
	const [choice, setChoice] = useState(null);

	const shuffle = (array) => {
		let currentIndex = array.length,
			randomIndex;

		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}

		return array;
	};

	let arrayOfNames = [name, r1, r2, r3];
	// arrayOfNames.sort((a, b) => b.length - a.length);
	useEffect(() => {
		shuffle(arrayOfNames);
	}, []);

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
