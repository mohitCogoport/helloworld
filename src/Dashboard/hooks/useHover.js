import { useState, useRef, useCallback } from 'react';

const useHover = () => {
	const [value, setValue] = useState(false);
	const ref = useRef(null);

	const handleMouseOver = useCallback(() => setValue(true), []);
	const handleMouseOut = useCallback(() => setValue(false), []);

	// Use a callback ref instead of useEffect so that event listeners
	// get changed in the case that the returned ref gets added to
	// a different element later. With useEffect, changes to ref.current
	// wouldn't cause a rerender and thus the effect would run again.
	const callbackRef = useCallback((node) => {
		ref.current?.removeEventListener('mouseover', handleMouseOver);
		ref.current?.removeEventListener('mouseout', handleMouseOut);

		ref.current = node;

		ref.current?.addEventListener('mouseover', handleMouseOver);
		ref.current?.addEventListener('mouseout', handleMouseOut);
	}, [handleMouseOver, handleMouseOut]);

	return [callbackRef, value];
};

export default useHover;
