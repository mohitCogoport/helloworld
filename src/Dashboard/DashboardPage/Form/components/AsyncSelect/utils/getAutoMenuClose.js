const getAutoMenuClose = (autoCloseMenu, multiple) => {
	let closeMenuOnSelect = autoCloseMenu === null ? true : autoCloseMenu;

	if (multiple) {
		closeMenuOnSelect = autoCloseMenu === null ? false : autoCloseMenu;
	}

	return closeMenuOnSelect;
};

export default getAutoMenuClose;
