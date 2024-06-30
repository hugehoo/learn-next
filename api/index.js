import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:4000',
});

function fetchProducts(productId) {
	if (productId == null) {
		return instance.get('/products');
	}
	return instance.get(`/products/${productId}`);
}

export { fetchProducts, instance };
