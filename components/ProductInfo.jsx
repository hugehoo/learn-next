import React from 'react';
import styles from './productInfo.module.css';
import Image from 'next/image';

export default function ProductInfo({ productDetail }) {
	return (
		<div className={styles.container}>
			<div>
				{/*<img src={productDetail.imageUrl} alt="" />*/}
				<Image
					src={productDetail.imageUrl}
					width={250}
					height={250}
					alt={productDetail.name}
				></Image>
			</div>
			<div className={styles.description}>
				<p>{productDetail.name}</p>
				<p>{productDetail.price}</p>
				<button>장바구니 담기</button>
			</div>
		</div>
	);
}
// Image component 를 사용해야 하는 이유
