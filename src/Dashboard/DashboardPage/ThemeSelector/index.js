import React, { useState } from 'react';
import {  Flex, Text } from '@cogoport/front/components';
import { Radio } from '@cogoport/front/components/admin';

import { ThemeContainer } from './styles';

const ThemeSelector = ({ themeType = 'purples', setThemeType }) => {
	const [checked, setChecked] = useState(themeType);

	const handleChange = (value) => {
		setChecked(value);
		setThemeType(value);
	};

	return (
		<ThemeContainer>
			<Text bold size={12} marginBottom={8}>Select theme</Text>
			<Flex>
				<Flex>
					<Radio
						className="primary lg"
						label="Winter"
						checked={checked === 'purple_blue'}
						onChange={() => handleChange('purple_blue')}
					/>
				</Flex>
				<Flex marginLeft="16px">
					<Radio
						className="primary lg"
						label="Monsoon"
						checked={checked === 'green_blue'}
						onChange={() => handleChange('green_blue')}
					/>
				</Flex>
			</Flex>
			<Flex>
				<Flex>
					<Radio
						className="primary lg"
						label="Spring"
						checked={checked === 'set3'}
						onChange={() => handleChange('set3')}
					/>
				</Flex>
				<Flex marginLeft="16px">
					<Radio
						className="primary lg"
						label="Autumn"
						checked={checked === 'red_grey'}
						onChange={() => handleChange('red_grey')}
					/>
				</Flex>
			</Flex>
			<Flex>
				<Flex>
					<Radio
						className="primary lg"
						label="Summer"
						checked={checked === 'yellow_orange_red'}
						onChange={() => handleChange('yellow_orange_red')}
					/>
				</Flex>
				<Flex marginLeft="1px">
					<Radio
						className="primary lg"
						label="Default"
						checked={checked === 'purples'}
						onChange={() => handleChange('purples')}
					/>
				</Flex>
			</Flex>
		</ThemeContainer>
	);
};

export default ThemeSelector;
