import React from 'react';

// Page Component
export default function ProductDetailPage({ message }) {
	return <div>ProductDetailPage: {message} </div>;
}

export async function getServerSideProps(context) {
	// /products/15 -> context.params.id 에 해당
	console.log(context.params.id);
	return {
		props: { message: 'server data' },
	};
}

// 이전까진 파일 기반 라우팅, 폴더 기반 라우팅
// 지금 방식은 동적 라우팅 -> file 하위에 대괄호로 씌워준 방식
// getServerSideProps -> 서버사이드에서 데이터를 리턴하여 컴포넌트에 뿌려주는 형식
