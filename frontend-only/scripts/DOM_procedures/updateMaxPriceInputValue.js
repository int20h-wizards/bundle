'use sctrict';

import {store} from '../main.js';

export const updateMaxPriceInputValue = () => {
	const newValue = store.getState().filters.cheaperThan;

	const input = document.querySelector('.LOGIC-max-price-filter-input');

	input.value = newValue;
}