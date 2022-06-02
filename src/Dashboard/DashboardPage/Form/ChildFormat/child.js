import React from 'react';
import { Flex } from '@cogoport/front/components';
import getField from '../components';
import { Row, Col } from '../StyleCorrectedGrid';
import {DeleteIcon} from '../../../assets/icons/index';
import {Label} from './styles'

const Child = ({ controls, control, register, field, index, name, remove, error }) => (
	<div className={`form-fieldArray-${name}-${index}`} key={field.id}>
		<Row style={{ margin: 0, display: 'flex', alignItems: 'flex-end' }}>
			<Col
				xs={11}
				sm={11}
				md={11}
				lg={11}
				xl={11}
			>
				<Row>
					{controls?.map((controlItem) => {
						const Element = getField(controlItem.type);
						const {
							span = 6,
							showDivider = false,
							lowerlabel,
							label,
							disableButtons,
							show = true,
							...rest
						} = controlItem;

						if (controlItem.watch) {
							return show ? (
								<Col
									xs={12}
									sm={12}
									md={span}
									lg={span}
									key={field.id}
									style={{ padding: 8 }}
								>
									{label && (
										<Label>
											{label}
										</Label>
									)}
									<Element
										{...controlItem}
										key={`${name}.${index}.${controlItem.name}`}
										control={control}
										name={`${name}.${index}.${controlItem.name}`}
										value={field[controlItem.name]}
									/>
								</Col>
							) : <></>;
						}

						return show ? (
							<Col
								xs={12}
								sm={12}
								md={span}
								lg={span}
								key={field.id}
								style={{ padding: 8 }}
							>
								{label && (
									<Label>
										{label}
									</Label>
								)}
								<Element
									{...controlItem}
									key={`${name}.${index}.${controlItem.name}`} // important to include key with field's id
									{...register(`${name}.${index}.${controlItem.name}`, { ...(controlItem.rules || {}) })}
									defaultValue={field[controlItem.name]}
								/>
							</Col>
						) : <></>;
					})}
				</Row>
			</Col>
			{index > 0
			&& (
				<Col
					xs={1}
					sm={1}
					md={1}
					lg={1}
					xl={1}
					style={{ padding: 2 }}
				>
					{/* <Button ghost size="sm" onClick={() => remove(index, 1)}>Delete</Button> */}
					<Flex display="block" style={{ cursor: 'pointer' }} onClick={() => remove(index, 1)}>
						<DeleteIcon style={{ height: 24, width: 24 }} />
					</Flex>
				</Col>
			)}
		</Row>
	</div>
);
export default Child;
