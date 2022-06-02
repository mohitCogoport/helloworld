import Input from '@cogoport/front/components/Input';
import { TextArea } from '@cogoport/front/components';
import Select from './Select';
import Switch from './Switch';
import TagSelect from './TagSelect';
import Toggle from './Toggle';
import SingleDatePicker from './SingleDatePicker';
import PasswordInput from './PasswordInput';
import AsyncSelect from './Controlled/AsyncSelectController';
import NestedSelection from './Controlled/CollectionController';

const getField = (type) => {
	const mapping = {
		select           : Select,
		number           : Input,
		text             : Input,
		switch           : Switch,
		tagSelect        : TagSelect,
		toggle           : Toggle,
		singleDatePicker : SingleDatePicker,
		password         : PasswordInput,
		asyncSelect      : AsyncSelect,
		nestedSelection  : NestedSelection,
		textarea         : TextArea,
	};

	const element = mapping[type];

	if (!element) {
		// TODO remove this, and throw an error
		return <div>No element found</div>;
	}

	return element;
};

export default getField;
