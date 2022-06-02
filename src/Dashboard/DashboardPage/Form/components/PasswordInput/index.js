import React, { useMemo, useState, useCallback, forwardRef } from 'react';
import { Container, StyledInput } from './styles';

const PasswordInput = ({
	className = '',
	style = {},
	disabled = false,
	size = 'md',
	...props
}, ref) => {
	const [showPassword, setShowPassword] = useState(false);

	const containerDerivedClassNames = useMemo(() => {
		const classes = [className, `size-${size}`];

		if (disabled) classes.push('disabled');

		return classes.join(' ');
	}, [className, size, disabled]);

	const handleToggle = useCallback((event) => {
		event.stopPropagation();

		if (disabled) return;

		setShowPassword((prevState) => !prevState);
	}, []);

	return (
		<Container
			className={containerDerivedClassNames}
			style={{ ...style }}
		>
			<StyledInput
				ref={ref}
				{...props}
				type={showPassword ? 'text' : 'password'}
				disabled={disabled}
			/>
			<span className="toggle-password-span" onClick={handleToggle} aria-hidden="true">
				{showPassword ? 'Hide' : 'Show'}
			</span>
		</Container>
	);
};

export default forwardRef(PasswordInput);
