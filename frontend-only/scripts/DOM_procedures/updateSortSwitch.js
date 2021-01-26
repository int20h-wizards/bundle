'use sctrict';

import {store} from '../main.js';

export const updateSortSwitch = () => {
	const sortDirection = store.getState().sortBy;
	const switchBox = document.querySelector('.LOGIC-price-switch');
	
	if (sortDirection === 'up') {
		switchBox.classList.add('big-switch--mode-up');
		switchBox.classList.remove('big-switch--mode-down');
	} else {
		switchBox.classList.add('big-switch--mode-down');
		switchBox.classList.remove('big-switch--mode-up');
	}
}