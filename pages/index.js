import Seo from '@component/components/Seo';
import { useEffect, useState } from 'react';

export default function Home({ results }) {
  return (
    <div className='container'>
      <Seo title='Home' />
      {results?.map((movie) => (
        <div className='movie' key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// 이 함수 이름은 바꿀 수 없음
// 여기 코드는 서버쪽에서만 작동
// 이걸 이용해서 api key를 client에게서 숨길 수 있음
// 결과적으로 리턴값이 pageProps에 들어가게 됨
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
