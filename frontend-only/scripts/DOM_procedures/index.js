'use sctrict';

import {updateBodyTag} from './updateBodyTag.js';
import {updateMaxPriceInputValue} from './updateMaxPriceInputValue.js';
import {updateProductsHtml} from './updateProductsHtml.js';
import {updateCheaperProduct} from './updateCheaperProduct.js';
import {updateSortSwitch} from './updateSortSwitch.js';
import {updateChart} from './updateChart.js';

export const subscribers = [
	updateBodyTag,
	updateMaxPriceInputValue,
	updateProductsHtml,
	updateCheaperProduct,
	updateSortSwitch,
	updateChart
]
