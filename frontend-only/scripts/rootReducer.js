'use sctrict';

const initialState = {
	currentCategory: 'buckwheat',
	itemsData: {buckwheat: []},
	sortBy: 'up',
	filters: {
		cheaperThan: 250,
	},
}

export const rootReducer = (state = initialState, action) => {
	const newState = {...state};

	switch (action.type) {
		case 'CHANGE_CATEGORY':
			newState.currentCategory = action.newCategoryName;
			break;
		case 'UPDATE_DATA':
			newState.itemsData = action.newData;
			break;
		case 'TOGGLE_SORT_DIRECTION':
			newState.sortBy = action.sortDirection;
			break;
		case 'UPDATE_FILTERS':
			newState.filters[action.filterName] = action.filterValue;
			break;
		default:
			if (state !== initialState) {console.error('State dont changed. Can`t operate with', action);};
			return newState;
			break;
	}

	return newState;
};