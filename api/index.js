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

function createCartItem({ id, name, price, imageUrl }) {
	return instance.post('/carts', {
		id,
		name,
		price,
		imageUrl,
	});
}

function fetchCarts() {
	return instance.get('/carts');
}

function removeCartItem(id) {
	console.log('ddd', id);
	return instance.delete(`/carts/${id}`);
}

export { fetchProducts, createCartItem, fetchCarts, removeCartItem };
