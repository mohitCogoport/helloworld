import { useEffect, useRef } from 'react';

const useBoundedClick = (options = {}, myRef) => {
	const { onOuterClick = () => {}, onInnerClick = () => {} } = options;

	const ref = useRef();

	const currentRef = myRef || ref;

	const onClickAnywhere = (e) => {
		if (currentRef && currentRef.current) {
			const insideClick = currentRef.current.contains(e.target);
			if (insideClick) {
				onInnerClick(e);
			} else {
				onOuterClick(e);
			}
		}
	};

	useEffect(() => {
		window.addEventListener('click', onClickAnywhere, true);
		return () => {
			window.removeEventListener('click', onClickAnywhere, true);
		};
	});

	return currentRef;
};

export default useBoundedClick;
