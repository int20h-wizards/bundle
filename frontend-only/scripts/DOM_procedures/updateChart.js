'use strict'

import {
	store
} from '../main.js';

export const updateChart = () => {
	const convertPrice = (price, weight) => 1000 * price / weight;

	// preparing data to integration

	const state = store.getState();
	const currentCategory = state.currentCategory;
	const currentItems = state.itemsData[currentCategory];

	let currentLabel;
	switch (currentCategory) {
		case 'buckwheat':
			currentLabel = 'Ціни за гречку у порівнянні (грн / кг)';
			break;
		case 'wheat':
			currentLabel = 'Ціни за пшеницю у порівнянні (грн / кг)';
			break;
		case 'barley':
			currentLabel = 'Ціни за ячмінь у порівнянні (грн / кг)';
			break;
		case 'rice':
			currentLabel = 'Ціни за рис у порівнянні (грн / кг)';
			break;
		case 'corn':
			currentLabel = 'Ціни за кукурудзу у порівнянні (грн / кг)';
			break;
		default:
			currentLabel = 'Ціни за чарівну крупу у порівнянні (грн / кг)';
			break;
	}

	const chartData = currentItems.map(item => Math.floor(convertPrice(item.price, item.weight)));
	const chartLabels = currentItems.map(item => `${item.name}, ${item.producer}`);

	const basicBackgrounds = [
		'rgba(255, 0, 98, 0.2)',
		'rgba(255, 51, 0, 0.25)',
		'rgba(255, 198, 133, 0.35)'
	];
	const basicBorderColors = [
		'#A33F66',
		'#A85741',
		'#A8855D'
	];

	
	const newBackgrounds = [];
	const newBorderColors = [];
	let j = 0;

	for (let i = j = 0; i < currentItems.length; i++) {
		if (j >= basicBackgrounds.length || j >= basicBorderColors.length) {
			j = 0;
		}

		newBackgrounds.push(basicBackgrounds[j]);
		newBorderColors.push(basicBorderColors[j]);

		j++;
	}

	// preparing DOM to integration
	document.querySelectorAll('.chartjs-size-monitor, #myChart').forEach(elemnt => elemnt.remove());

	const newCanvas = document.createElement('canvas');
	newCanvas.id = 'myChart';

	document.querySelector('.chart').appendChild(newCanvas);

	// integration
	const ctx = newCanvas.getContext('2d');

	const myChart = new Chart(ctx, {
		type: 'bar',

		data: {
			labels: chartLabels,
			datasets: [{
				label: currentLabel,
				data: chartData,
				backgroundColor: newBackgrounds,
				borderColor: newBorderColors,
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		}
	});
}