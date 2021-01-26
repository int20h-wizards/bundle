'use sctrict';

import {store} from '../main.js';

export const updateCheaperProduct = () => {
	const convertPrice = (price, weight) => 1000 * price / weight;

	const state = store.getState();
	const currentCategory = state.currentCategory;
	const items = state.itemsData[currentCategory];

	if (!items.length) {
		return;
	}

	const priceElement = document.querySelector(`.central__digits--${currentCategory}`);
	const linkElement = document.querySelector('.LOGIC-cheapest-product-link');

	items.sort((a, b) => convertPrice(a.price, a.weight) - convertPrice(b.price, b.weight));
	
	const item = items[0];
	
	priceElement.innerHTML = (1000 * item.price / item.weight).toFixed();
	linkElement.href = item.source;
}