import '@/styles/globals.css';
import Link from 'next/link';
import Layout from '@/layouts/Layout';

// app component -
// 루트 컴포넌트를 의미함
export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

// 채팅 -> 서버 -> 클라-넥스트
// Link tag 는 anchor tag 와 동일한 역할을 한다.
// Link Component 장점 -> 페이지간 이동이 빨라진다.
// 다음 페이지의 내용을 미리 불러옴(prefetching) => 그래서 빠르게 이동 가능한가봄
