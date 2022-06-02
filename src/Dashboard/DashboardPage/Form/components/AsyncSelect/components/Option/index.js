import React from 'react';
import { components } from 'react-select';

const Option = (props) => {
	const { data, finalLabelKey = 'name' } = props;

	if (data === null) {
		return null;
	}

	const getChild = () => {
		if (data.__isNew__) {
			return data.label;
		}

		return data[finalLabelKey];
	};

	return <components.Option {...props}>{getChild()}</components.Option>;
};

export default Option;
