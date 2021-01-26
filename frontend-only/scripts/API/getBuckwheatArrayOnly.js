'use sctrict';

import {BASE_URL} from './statements.js';
import {serverNames} from './statements.js';
import {normalizeData} from './normalizeData.js';

export const getBuckwheatArrayOnly = async () => {
	const response = await fetch(BASE_URL + serverNames.buckwheat);
	const rawData = await response.json();
	const data = normalizeData(rawData);

	return {
		buckwheat: data
	};
}