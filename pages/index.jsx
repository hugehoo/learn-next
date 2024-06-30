import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '@/components/ProductList';
import ProductHeader from '@/components/ProductHeader';
import ProductDetailPage from '@/pages/products/[id]';

// `/` 에 해당하는 페이지 컴포넌트
function ProductPage() {
	const headerTitle = '상품 리스트 페이지';
	// props 란 상위 컴포넌트에서 하위 컴포넌트로 값을 전달하기 위한 개념. 상속 같은건가.
	return (
		<div>
			<ProductHeader title={headerTitle} />
			<ProductList />
		</div>
	);
}

/**
 * 1. 상품 목록 페이지 - `/`
 * 2. 상품 상세 페이지 - `/products/productId`
 * 3. 장바구니 페이지 - `/cart`
 */

export default ProductPage;

/**
 * 첨엔 next.js 의 기능이 아닌 기본 리액트 기능을 활용해 rest api 를 구현해본다.
 * 그 후에 next.js 의 rest api 를 사용해보자.
 */

// 3 주면 스위프트 문법 개넉넉하게 뗄 수 있다.
// 스위프트 문법 다 떼면, 이 인강도 괜찮고
