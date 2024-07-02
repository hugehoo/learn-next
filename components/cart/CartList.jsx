import Image from 'next/image';
import styles from './CartList.module.css';
import { removeCartItem } from '@/api';

export default function CartList({ carts }) {
	const totalPrice = carts.reduce((acc, cur) => {
		return (acc += parseFloat(cur.price));
	}, 0);

	const removeItem = async id => {
		await removeCartItem(id);
		alert('삭제가 되었습니다');
	};

	return (
		<>
			<div>
				<ul>
					{carts.map(cart => {
						return (
							<li key={cart.id} className={styles.item}>
								<div>
									<Image
										src={cart.imageUrl}
										alt={cart.name}
										width={75}
										height={75}
									></Image>
								</div>
								<div className={styles.description}>
									<div>{cart.name}</div>
									<div>{cart.price}</div>
									<button onClick={() => removeItem(cart.id)}>삭제</button>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			<div>
				<p>총 가격: {totalPrice}</p>
				<p>총 수량: {carts.length}</p>
			</div>
		</>
	);
}
