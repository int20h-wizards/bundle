'use sctrict';

import * as actions from './actionCreators.js';
import {
	rootReducer
} from './rootReducer.js';
import {
	subscribers
} from './DOM_procedures/index.js';
import {
	getBuckwheatArrayOnly
} from './API/getBuckwheatArrayOnly.js';
import {
	getWholeData
} from './API/getWholeData.js';


// store creating
const store = Redux.createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export {
	store
};

subscribers.forEach(callback => {
	callback();
	store.subscribe(callback);
});

window.store = store;

// add whole scripts
window.addEventListener('load', () => {
	document.head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="./styles/main.css">`);
})

// navigation buttons
const initNavigationButtons = (store) => {
	const buttons = document.querySelectorAll('.EVENT-change-category-button');

	const clickHandler = (event) => {
		store.dispatch(
			actions.changeCategory(
				event.target.dataset.targetCategory
			)
		)
	}

	buttons.forEach(btn => btn.addEventListener('click', clickHandler));
}
initNavigationButtons(store);

// max price filter
const initMaxPriceFilter = (store, alternateMin = 0, alternateMax = 150) => {
	const input = document.querySelector('.LOGIC-max-price-filter-input');

	function getNormalizedValue(input, alternateMin = 0, alternateMax = 150) {
		const minPrice = input.min ? +input.min : alternateMin;
		const maxPrice = input.max ? +input.max : alternateMax;
		let value = +input.value;

		if (value > maxPrice) {
			value = maxPrice;
		} else if (value < minPrice) {
			value = minPrice;
		}

		return value;
	}

	const inputInputHandler = (event) => {
		const input = event.target;
		const newValue = getNormalizedValue(input);

		store.dispatch(actions.updateFilters('cheaperThan', newValue))
	}

	input.addEventListener('input', inputInputHandler);
}
initMaxPriceFilter(store);

// price switch
const initPriceSwitch = (store) => {
	const button = document.querySelector('.LOGIC-price-switch');

	button.addEventListener('click', () => {
		store.dispatch(actions.toggleSortDirection());
	})
}
initPriceSwitch(store)

// getting data from the server
getBuckwheatArrayOnly()
	.then((data) => {
		store.dispatch(actions.updateData(data))
	}).catch(error => {
		console.warn('buckwheat only didnt loaded. Error: ', error);
	});

getWholeData()
	.then((data) => {
		store.dispatch(actions.updateData(data))
	}).catch(error => {
		console.warn('all categories didnt loaded. Error: ', error);
	});

// chart
