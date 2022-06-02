import React from 'react';
import { Btn } from './style';

const Button = ({ children, ...rest }) => (
	<Btn {...rest}>{children}</Btn>
);

export default Button;
