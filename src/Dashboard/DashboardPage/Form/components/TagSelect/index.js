import React from 'react';
import { useController } from '@cogoport/front/hooks';
import TagSelect from '@cogoport/front/components/Pills';

const TagSelectControled = ({ control, name, ...rest }) => {
	const { field: { ref, ...tagSelectProps } } = useController({
		name,
		control,
		rules        : rest.rules,
		defaultValue : rest.defaultValue,
	});
	return <TagSelect {...rest} {...tagSelectProps} value={rest.value || tagSelectProps.value} inputRef={ref} />;
};
export default TagSelectControled;
