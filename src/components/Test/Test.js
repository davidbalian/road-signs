import React, { useEffect, useState } from "react";
import signs from "../../signs";
import Sign from "../Sign/Sign";
import "./Test.css";

const Test = () => {
	const [i, setI] = useState(0);

	const [name, setName] = useState(signs[i].Caption);
	const [source, setSource] = useState(signs[i].JPG);

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

	useEffect(() => {
		shuffle(signs);
	}, []);

	const generateCaption = () => {
		let isDifferent = false;
		let random;

		while (!isDifferent) {
			random = signs[Math.floor(Math.random() * 661)].Caption;

			if (random !== name) {
				isDifferent = true;
			}
		}

		return random;
	};

	return (
		<form
			className='test-div'
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<Sign
				name={name}
				src={source}
				r1={generateCaption()}
				r2={generateCaption()}
				r3={generateCaption()}
			/>
			<button
				className='next-button'
				type='submit'
				onClick={() => {
					setI((i) => i + 1);

					setName(signs[i + 1].Caption);
					setSource(signs[i + 1].JPG);

					console.log(source);
				}}
			>
				Next
			</button>
		</form>
	);
};

export default Test;

// <Sign
// 	name={sign.Caption}
// 	src={`https://cdn.jsdelivr.net/gh/davidbalian/road-signs/src/signs/${sign.JPG}`}
// />
