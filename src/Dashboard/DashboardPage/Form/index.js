import React from 'react';
import { Flex } from '@cogoport/front/components';
import getField from './components';
import ChildFormat from './ChildFormat';
import { ErrorMessage, Label, SpaceBetween } from './styles';
import { Row, Col } from './StyleCorrectedGrid';

const Form = ({ controls, fields, errors, themeType }) => {
	const isHorizontal = (themeType || '').includes('row');

	return (
		<Flex marginLeft={-8} marginRight={-8} display="block" flex={1}>
			<Row style={{ margin: 0 }}>
				{controls?.map((control) => {
					const Element = getField(fields[control.name].type || control.type);
					const {
						span = 6,
						show = true,
						spanResponsive = { xs: 12, sm: 12 },
						showDivider = false,
						lowerlabel,
						label,
						disableButtons,
						...rest
					} = fields[control.name];

					if (control.type === 'fieldArray') {
						return show ? (
							<Col
								xs={12}
								sm={12}
								md={12}
								lg={12}
								xl={12}
								key={`${'regular_1'}_${control.name}`}
								style={{ padding: 8 }}
							>
								{label && (
									<Label>
										{label}
									</Label>
								)}
								<ChildFormat {...fields[control.name]} error={errors[control.name]} />
							</Col>
						) : <></>;
					}

					return show ? (
						<Col
							xs={12}
							sm={12}
							md={isHorizontal ? 12 : 6}
							lg={isHorizontal ? 12 : span}
							key={`${'regular_1'}_${control.name}`}
							style={{ padding: 8 }}
						>
							<SpaceBetween>
								{label && (
									<Label>
										{label}
									</Label>
								)}
								<Element {...fields[control.name]} error={errors[control.name]} />
								{errors[control.name] ? <ErrorMessage>{errors?.[control.name]?.message}</ErrorMessage> : null}
							</SpaceBetween>
						</Col>

					) : <></>;
				})}
			</Row>
		</Flex>
	);
};

export default Form;
