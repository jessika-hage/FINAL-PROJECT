import React from 'react';

import { SubmitButton } from './SubmitButton';
import { Form, NumberInput } from './Styling';

export const MathForm = ({ handleSubmit, answerField, value, onChange }) => {
	return (
		<Form onSubmit={handleSubmit} action=''>
			<NumberInput
				ref={answerField}
				value={value}
				onChange={onChange}
				type='text'
				autoComplete='off'
				placeholder='Type answer'
			/>
			<SubmitButton />
		</Form>
	);
};
