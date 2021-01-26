'use sctrict';

export const normalizeData = (rawData) => {
	console.log('raw Data from the server ', rawData)
	const expectedData = [];

	for (const key in rawData) {
		const object = {};

		rawData[key].forEach(string => {
			let newKey = string.split(':')[0];
			const value = string.split(': ').slice(1).join('');

			switch (newKey) {
				case 'image URL':
					newKey = 'imgUrl';
					break;
				case 'resource':
					newKey = 'source';
					break;
			}

			object[newKey] = value;
		});

		object.price = parseInt(object.price);
		object.category = object.category.toLowerCase();

		if (object.weight.toLowerCase().includes('кг')) {
			object.weight = parseFloat(object.weight) * 1000;
		} else {
			object.weight = parseFloat(object.weight);
		}

		if (!isNaN(object.weight) && !isNaN(object.price)) {
			expectedData.push(object);
		}
	}

	console.log('normalized data on the fron ', expectedData)
	return expectedData;
}