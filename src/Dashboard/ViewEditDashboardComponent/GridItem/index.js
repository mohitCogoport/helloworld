import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Flex } from '@cogoport/front/components';
import WidgetComponent from '../../WidgetComponent';
import { GridContainer } from '../styles';
import { WidgetContainer,CloseButton } from './styles';


const GridItem = ({
	layout = {},
	isEditable,
	widgets,
	removeChart,
	layout_props,
	themeType,
	queryVariableValues,
}) => {
	const layoutRef = useRef(null);
	const [layoutHeight, setLayoutHeight] = useState(0);

	useEffect(() => {
		let height = layoutRef.current?.closest('.react-grid-item')?.clientHeight || 0;

		if (isEditable && widgets.length > 1) height -= 35;
		if (height < 0) height = 0;

		setLayoutHeight(height);
	}, [layout?.h]);

	const onClickRemoveChart = useCallback((event) => {
		event.stopPropagation();

		removeChart(layout?.i);
	}, []);

	return (
		<GridContainer ref={layoutRef} isEditable={isEditable}>

			{isEditable && widgets.length > 1 && (
				<Flex justifyContent="flex-end" padding="4px" marginBottom="30px">
					<CloseButton
						ghost
						onClick={onClickRemoveChart}
					>
						x
					</CloseButton>
				</Flex>
			)}
			<WidgetContainer>
				<WidgetComponent
					widget_id={layout_props?.[layout?.i]?.widget_id}
					widget_type={layout_props?.[layout?.i]?.widget_type}
					themeType={themeType}
					gridItemHeight={layoutHeight}
					query_variable_values={queryVariableValues}
				/>
			</WidgetContainer>

		</GridContainer>
	);
};

export default GridItem;