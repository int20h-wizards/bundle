'use sctrict';

import {store} from './main.js';

export function changeCategory(name) {
	const defultValue = 'buckwheat';

	if (typeof name !== 'string') {
		console.error(`name should be string. Setted "${defultValue} value instead`);
		name = defultValue;
	}

	return {
		type: 'CHANGE_CATEGORY',
		newCategoryName: name
	}
}

export function toggleSortDirection() {
	const newSortDirection = store.getState().sortBy === 'up' ? 'down' : 'up';

	return {
		type: 'TOGGLE_SORT_DIRECTION',
		sortDirection: newSortDirection
	}
}

export function updateFilters(filterName, filterValue) {
	const defaultName = 'cheaperThan';
	const defaultValues = {
		cheaperThan: 50,
	};

	switch (filterName) {
		case 'cheaperThan':
			if (typeof filterValue !== 'number') {
				const defaultValue = 50;
				console.error('filterValue should be number, setted ', defaultValue, ' instead');
				filterValue = defaultValue;
			}
			break;
	
		default:
			console.error(`can't add filter with "${filterName}" name. Will updated "${defaultName}" instead`);
			filterValue = defaultValues[defaultName];
			break;
	}
	
	return {
		type: 'UPDATE_FILTERS',
		filterName,
		filterValue
	}
}

export function updateData(newData) {
	if (!(newData instanceof Object)) {
		console.error('invalid data, setted current data instead');
		newData = store.getState().itemsData;
	}

	return {
		type: 'UPDATE_DATA',
		newData
	}
}