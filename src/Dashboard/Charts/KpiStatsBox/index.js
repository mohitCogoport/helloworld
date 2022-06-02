import { Flex, Text } from '@cogoport/front/components';
import styled from '@cogoport/front/styled';
import { startCase } from '@cogoport/front/utils';
import kpiIconOptions from './config/options';

const kpiIcons = kpiIconOptions.reduce((pv, cv) => ({ ...pv, [cv.value]: cv.icon }), {});

const KpiStatsBox = ({ data, themeType = 'purple_orange' }) => {
	const { label, value, icon } = data?.[0] || {};

	return (
		<Flex
			direction="column"
			alignItems="center"
			width="100%"
		>
			<Avatar icon={icon}>
				{ icon in kpiIcons ? kpiIcons[icon] : '' }
			</Avatar>

			<Text marginTop={12} size={24} bold>
				{value}
			</Text>

			<Text size={12}>
				# {startCase(label)}
			</Text>
		</Flex>
	);
};

const Avatar = styled.div`
    width: 50px;
    height: 50px;
    background: ${(props) => (props.icon ? 'transparent' : 'silver')};
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
        width: 100%;
        height: 100%;
    }
`;

export default KpiStatsBox;
