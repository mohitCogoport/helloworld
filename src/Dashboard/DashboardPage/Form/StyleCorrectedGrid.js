import styled from '@cogoport/front/styled';
import Grid from '../Grid';

const { Row: GridRow, Col: GridCol } = Grid;

export const Row = styled(GridRow)`
	&.new-isolated {
		.ui-input-group {
			height: 32px;
			border: 1px solid #E0E0E0;
		}

		.ui-input {
			&::placeholder {
				color: #828282;
			}
			font-size: 12px;
		}

		.select__control {
			min-height: 32px;
			font-size: 12px;
			border: 1px solid #E0E0E0;
		}

		.select__placeholder {
			line-height: 1.4;
			font-size: 12px;
		}

		textarea {
			padding-left: 12px;
			padding-right: 12px;
			font-size: 12px;
			resize: none;
			line-height: 14px;
		}

		.ui-form-error-text {
			font-size: 12px;
			line-height: 18px;
		}
	}

`;

export const Col = styled(GridCol)`
	&.new-isolated {
		&.error {
			.select__control {
				border-color: #DE350B;
			}
		}
	}

`;
