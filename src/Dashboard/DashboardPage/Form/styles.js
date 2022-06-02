import styled from '@cogoport/front/styled';

export const ErrorMessage = styled.div`
    color: red;
    font-size: 12px;
`;

export const SpaceBetween = styled.div`
	&.row {
		layout: flex row space-between center;
		padding: 3px 6px;
		&:hover {
			background: #f2f2f2;
			&.error {
				background: #fef9f9;
				border: 1px solid #cb6464;
			}
		}
		&.error {
			background: #fef9f9;
			border: 1px solid #cb6464;
		}
	}
	&.row.no-padding{
		padding: 3px 0px;
	}
`;

export const Label = styled.label`
	margin-bottom: _s2;
	display: inline-block;
	font-size: 14px;
	color: #393F70;
	line-height: 20px;
	font-weight: normal;
	&.bold {
		font-weight: bold;
		line-height: 1.43;
		margin-bottom: 0px;
	}

	&.row {
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		line-height: 14px;
		/* identical to box height */
		margin-bottom: 0px;
		letter-spacing: 0.02em;
		color: #4f4f4f;
		&.bordered {
			padding: 0px 28px;
			max-width: 100%;
			margin-bottom: 10px;
		}
	}

	&.new {
		font-size: 12px;
		font-weight: 700;
		color: #4F4F4F;
	}
	&.big {
		font-weight: bold;
		font-size: 12px;
		color: #000000;
		margin-bottom: 8px;
		/* text-transform: uppercase; */
	}
`;
