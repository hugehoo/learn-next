import React from 'react';
import styles from './productInfo.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { createCartItem } from '@/api';

export default function ProductInfo({ productDetail }) {
	const router = useRouter();
	const { id, name, price, imageUrl } = productDetail;
	const addCart = async () => {
		// 1. 장바구니에 아이템을 담는 API 함수 호출
		// 2. 장바구니 페이지로 이동
		const response = await createCartItem(productDetail);
		console.log(response);
		alert('장바구니에 추가됨');
		router.push('/cart');
	};
	return (
		<div className={styles.container}>
			<div>
				<Image src={imageUrl} width={250} height={250} alt={name}></Image>
			</div>
			<div className={styles.description}>
				<p>{name}</p>
				<p>{price}</p>
				<button onClick={addCart}>장바구니 담기</button>
			</div>
		</div>
	);
}
// Image component 를 사용해야 하는 이유
