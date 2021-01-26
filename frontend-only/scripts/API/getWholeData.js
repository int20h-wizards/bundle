'use sctrict';

import {BASE_URL} from './statements.js';
import {serverNames} from './statements.js';
import {normalizeData} from './normalizeData.js';

export const getWholeData = async () => {
	const wholeData = {};

	const appendCategoryData = async (categoryName) => {
		const response = await fetch(BASE_URL + serverNames[categoryName]);
		const rawData = await response.json();
		return normalizeData(rawData);
	}
	
	wholeData.buckwheat = await appendCategoryData('buckwheat')
	wholeData.wheat = await appendCategoryData('wheat')
	wholeData.barley = await appendCategoryData('barley')
	wholeData.corn = await appendCategoryData('corn')
	wholeData.rice = await appendCategoryData('rice')

	return wholeData;
}