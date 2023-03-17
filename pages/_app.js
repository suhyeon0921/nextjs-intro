import NavBar from '@component/components/NavBar';

// 꼭 이 파일명으로 작성해야 함.
export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </>
  );
}
