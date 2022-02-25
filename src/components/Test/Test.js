import React, { useEffect, useState } from "react";
import signs from "../../signs";
import "./Test.css";

const Test = () => {
	const [i, setI] = useState(0);

	const [answer, setAnswer] = useState({ caption: signs[i].Caption, source: signs[i].JPG });

	const [randomChoices, setRandomChoices] = useState([]);

	const [choice, setChoice] = useState();

	// const shuffle = (arr) => {
	// 	arr.sort(() => Math.random() - 0.5);
	// };

	// shuffle(signs);

	// state to check if test has begun or not
	const [start, setStart] = useState(0);

	const genRandom = () => {
		let isDiff = 0;
		let random;

		while (!isDiff) {
			random = signs[Math.floor(Math.random() * 658)].Caption;

			if (answer !== random) {
				isDiff = 1;
			}
		}

		return random;
	};

	useEffect(() => {
		setAnswer({ caption: signs[i].Caption, source: signs[i].JPG });
	}, [i]);

	useEffect(() => {
		setRandomChoices(
			[genRandom(), genRandom(), genRandom(), answer.caption].sort(
				(a, b) => Math.random() - 0.5
			)
		);
	}, [answer]);

	return (
		<div className='test-div'>
			{start ? (
				<div className='img-choices'>
					<img
						src={`https://cdn.jsdelivr.net/gh/davidbalian/road-signs/src/signs/${answer.source}`}
						alt='road sign'
					/>

					<div className='choices'>
						<label htmlFor='answer'>
							{randomChoices[3]}
							<input
								type='radio'
								name='sign-option'
								id='answer'
								value={randomChoices[3]}
								onChange={() => {
									setChoice(randomChoices[3]);
								}}
								checked={choice === randomChoices[3]}
							/>
						</label>

						<label htmlFor='r1'>
							{randomChoices[0]}
							<input
								type='radio'
								name='sign-option'
								id='r1'
								value={randomChoices[0]}
								onChange={() => {
									setChoice(randomChoices[0]);
								}}
								checked={choice === randomChoices[0]}
							/>
						</label>

						<label htmlFor='r2'>
							{randomChoices[1]}
							<input
								type='radio'
								name='sign-option'
								id='r2'
								value={randomChoices[1]}
								onChange={() => {
									setChoice(randomChoices[1]);
								}}
								checked={choice === randomChoices[1]}
							/>
						</label>

						<label htmlFor='r3'>
							{randomChoices[2]}
							<input
								type='radio'
								name='sign-option'
								id='r3'
								value={randomChoices[2]}
								onChange={() => {
									setChoice(randomChoices[2]);
								}}
								checked={choice === randomChoices[2]}
							/>
						</label>
					</div>
				</div>
			) : null}

			<div className='buttons'>
				{/* button starts test */}
				{start ? null : (
					<button
						onClick={() => {
							setStart(1);
						}}
					>
						Start Test
					</button>
				)}

				{/* checks answer */}
				{start ? (
					<button
						onClick={() => {
							if (choice === answer.caption) {
								alert("correect!!!!!");
							} else {
								alert("you're actually so clapped fam lmao");
							}
						}}
					>
						Check
					</button>
				) : null}

				{/* button to go to next question */}
				{start ? (
					<button
						onClick={() => {
							setI(i + 1);
						}}
					>
						Next
					</button>
				) : null}

				{/* button appears when test has started - stops test onClick */}
				{start ? (
					<button
						id='end'
						onClick={() => {
							setStart(0);
						}}
					>
						End Test
					</button>
				) : null}
			</div>
		</div>
	);
};

export default Test;

// <Sign
// 	name={sign.Caption}
// 	src={`https://cdn.jsdelivr.net/gh/davidbalian/road-signs/src/signs/${sign.JPG}`}
// />
