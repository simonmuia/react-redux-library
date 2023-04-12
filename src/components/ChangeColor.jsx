import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../features/theme';

const ChangeColor = () => {
	const [color, setColor] = useState('');
	const dispatch = useDispatch();

	return (
		<div>
			<input
				className="
				border-b-2
				border-neutral-300
				p-3
				m-4
				focus:border-b-2
				"
				type="text"
				placeholder="Type color"
				onChange={(event) => {
					setColor(event.target.value);
				}}
			/>
			<button
				className="px-10 py-3 text-white rounded-md m-5 bg-green-400"
				onClick={() => dispatch(changeColor(color))}
			>
				Change Color
			</button>
		</div>
	);
};

export default ChangeColor;
