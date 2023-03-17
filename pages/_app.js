import Layout from '@component/components/Layout';

// 꼭 이 파일명으로 작성해야 함.
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
