'use sctrict';

import {
	store
} from '../main.js';

const getProductsHtml = (items) => {
	const getProductHtml = (item) => {
		const {
			imgUrl = '#', name = 'Назва невідома', price = 9999, producer = 'Невідомий', source = '#', weight = 'weight'
		} = item;
		return `
			<li class="product-card">
				<a href="${source}" class="product-card__link" target="_blank">
					<div class="product-card__illustration-wrapper">
						<img
								src="${imgUrl}"
								alt="ілюстрація до товару з назвою ${name}"
								class="product-card__image"
								width="100%"
								height="170px"
						>
					</div>
					<h3 class="product-card__title">
						${name}
					</h3>
					<p class="product-card__info-row">
						<span class="product-card__producer">${producer}</span>
						<span class="product-card__portion">${weight} г / упакова</span>
					</p>
					<p class="product-card__price">
						<span class="product-card__price-big">${(1000 * price / weight).toFixed()}</span>
						<span class="product-card__price-small">грн / кг</span>
					</p>
				</a>
			</li>
		`;
	};

	let output;

	if (items.length > 0) {
		output = `<ul class="another-prices-l__cards-box"> ${items
				.map(item => getProductHtml(item))
				.join('')}
			</ul>
		;`
	} else {
		output = `
			<p class="another-prices-l__sorry-block">
				<span class="another-prices-l__sad-emoji">😢</span>
				На жаль, ми не змогли знайти товари за заданими вимогами.
				<br>
				Спробуйте змінити фільтри або перевірити своє інтернет з'єднання
			</p>`;
	}

	return output;
}

export const updateProductsHtml = () => {
	const convertPrice = (price, weight) => 1000 * price / weight;

	const state = store.getState();
	const itemsData = state.itemsData;
	const currentCategory = state.currentCategory;
	const maxPrice = state.filters.cheaperThan;
	const sortDirection = state.sortBy;
	const productsContainer = document.querySelector('.LOGIC-products-container');

	const currentItems = itemsData[currentCategory];

	const suitableItems = currentItems
		.filter(item => (1000 * item.price / item.weight) < maxPrice)
	
	suitableItems.sort((a, b) => (sortDirection === 'up') ? convertPrice(a.price, a.weight) - convertPrice(b.price, b.weight) : convertPrice(b.price, b.weight) - convertPrice(a.price, a.weight));

	const productsHtml = getProductsHtml(suitableItems);

	productsContainer.innerHTML = productsHtml;
}