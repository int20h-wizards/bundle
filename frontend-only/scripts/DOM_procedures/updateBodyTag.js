'use sctrict';

import {store} from '../main.js';

export const updateBodyTag = () => {
	const currentCategory = store.getState().currentCategory;

	const body = document.body;

	body.classList.forEach(className => {
		if (className.includes('body--') && className !== `body--${currentCategory}`) {
			body.classList.remove(className);
		}

		body.classList.add(`body--${currentCategory}`);
	})
}