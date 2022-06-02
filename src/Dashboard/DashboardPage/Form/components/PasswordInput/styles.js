import styled from '@cogoport/front/styled';

export const Container = styled.div`
	display: flex;
	align-items: center;
	box-sizing: border-box;
	cursor: text;
	color: #333;

	width: 100%;

	border-radius: 4px;
	padding: 0 8px;

	background-color: #FFFFFF;
	border: 1px solid #E0E0E0;
	will-change: border-color, box-shadow;
	transition: border-color 0.1s linear, box-shadow 0.1s linear;

	&.size-sm {
		height: 24px;
		font-size: 12px;
	}

	&.size-md {
		height: 32px;
		font-size: 12px;
	}

	&.size-lg {
		height: 40px;
		font-size: 14px;
	}

	&:hover {
		border-color: #333;
	}

	&:focus-within {
		border-color: #333;
		box-shadow: 0 0 0 1px #333;
	}

	&.disabled {
		background-color: #F9F9F9;
		cursor: not-allowed;
		color: #828282;

		&:hover {
			border-color: #E0E0E0;
		}

		&:focus-within {
			border-color: #E0E0E0;
			box-shadow: none;
		}
	}

    & .toggle-password-span {
        cursor: pointer;
    }

    &.disabled .toggle-password-span {
        cursor: not-allowed;
    }
`;

export const StyledInput = styled.input`
	display: block;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	background: transparent;
	border: none;
	outline: 0;
	font-size: 1em;
	cursor: inherit;
	color: inherit;

	&::placeholder {
		color: #BDBDBD;
	}
`;
