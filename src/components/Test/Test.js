import React, { useEffect, useState } from "react";
import signs from "../../signs";
import "./Test.css";

const Test = () => {
	const [i, setI] = useState(0);

	const [answer, setAnswer] = useState({ caption: signs[660].Caption, source: signs[660].JPG });

	const [randomChoices, setRandomChoices] = useState([]);

	const [choice, setChoice] = useState();

	const [bg, setBg] = useState({ backgroundColor: "rgb(45, 79, 158)" });
	const [buttons, setButtons] = useState(1);

	const shuffle = (arr) => {
		arr.sort(() => Math.random() - 0.5);
	};

	// state to check if test has begun or not
	const [start, setStart] = useState(0);

	const genRandom = () => {
		let isDiff = 0;
		let random;

		while (!isDiff) {
			random = signs[Math.floor(Math.random() * 661)].Caption;

			if (answer !== random) {
				isDiff = 1;
			}
		}

		return random;
	};

	useEffect(() => {
		shuffle(signs);
	}, []);

	useEffect(() => {
		setAnswer({ caption: signs[i].Caption, source: signs[i].JPG });
	}, [i]);

	useEffect(() => {
		if (i <= signs.length) {
			setRandomChoices(
				[genRandom(), genRandom(), genRandom(), answer.caption].sort(
					(a, b) => Math.random() - 0.5
				)
			);
		}
	}, [answer]);

	return i <= signs.length - 2 ? (
		<div className='test-div'>
			{!start ? (
				<div className='desc'>
					<p>
						Press the "Start Test" button on the bottom of the page to start the test.
					</p>
					<p>
						Once the test has started, select any of the options that are shown below
						the image.
					</p>
					<p>To check you answer, press the "Check" </p>
				</div>
			) : null}
			{start ? (
				<div className='img-choices'>
					<img
						src={`https://cdn.jsdelivr.net/gh/davidbalian/road-signs/src/signs/${answer.source}`}
						alt='road sign'
					/>

					<div className='choices'>
						<label htmlFor='r4'>
							<input
								type='radio'
								name='sign-option'
								id='r4'
								value={randomChoices[3]}
								onChange={() => {
									setChoice(randomChoices[3]);
								}}
								checked={choice === randomChoices[3]}
							/>
							{randomChoices[3]}
						</label>

						<label htmlFor='r1'>
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
							{randomChoices[0]}
						</label>

						<label htmlFor='r2'>
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
							{randomChoices[1]}
						</label>

						<label htmlFor='r3'>
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
							{randomChoices[2]}
						</label>
					</div>
				</div>
			) : null}

			<div className='buttons' style={{ display: buttons ? "flex" : "none" }}>
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
						style={bg}
						onClick={() => {
							if (choice === answer.caption) {
								setBg({
									backgroundColor: "green"
								});
							} else {
								setBg({ backgroundColor: "red" });
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
							if (i <= 659) {
								setI(i + 1);
							}
							setBg({ backgroundColor: "rgb(45, 79, 158)" });
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
				{start ? (
					<p className='counter'>
						{i + 1} / {signs.length}
					</p>
				) : null}
			</div>
		</div>
	) : (
		<p style={{ marginTop: "10rem", textAlign: "center" }}>test is done go away</p>
	);
};

export default Test;

// <Sign
// 	name={sign.Caption}
// 	src={`https://cdn.jsdelivr.net/gh/davidbalian/road-signs/src/signs/${sign.JPG}`}
// />
