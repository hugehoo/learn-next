import React from 'react';
import ProductHeader from '@/components/ProductHeader';
import axios from 'axios';
import { fetchProducts } from '@/api';
import { log } from 'next/dist/server/typescript/utils';
import ProductInfo from '@/components/ProductInfo';

// Page Component
export default function ProductDetailPage({ message, productDetail }) {
	const title = '상품 상세 정보 페이지';
	return (
		<div>
			<ProductHeader title={title} />
			{/*<div>ProductDetailPage: {message} </div>*/}
			{/*<div>{productInfo} </div>*/}
			<ProductInfo productDetail={productDetail}></ProductInfo>
		</div>
	);
}

// 여기 function 이 동작하지 않은 이유는 제대로 된 routing 에 들어오지 않았기 때문
export async function getServerSideProps(context) {
	// Next.js 에서는 getServerSideProps 가 props 를 담당하는군
	// /products/15 -> context.params.id 에 해당
	const id = context.params.id;
	const { data } = await fetchProducts(id);

	// const response = await axios.get(`http://localhost:4000/products/${id}`);
	return {
		props: {
			productDetail: data,
		},
	};
}

// 이전까진 파일 기반 라우팅, 폴더 기반 라우팅
// 지금 방식은 동적 라우팅 -> file 하위에 대괄호로 씌워준 방식
// getServerSideProps -> 서버사이드에서 데이터를 리턴하여 컴포넌트에 뿌려주는 형식
// getServerSideProps():  페이지 컴포넌트를 그리기 전에 서버에서 데이터를 페치하기 위한 함수
