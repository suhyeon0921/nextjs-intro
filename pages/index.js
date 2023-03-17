import Seo from '@component/components/Seo';
import { useEffect, useState } from 'react';

const API_KEY = 'f1238be62c41593541fe8a48c195cf64';

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Seo title='Home' />
      {!movies && <h4>Loading...</h4>}
      {/* ?넣어서 movies가 없으면 실행되지 않도록 함 */}
      {movies?.map((movie) => (
        <>
          <div key={movie.id}></div>
          <h4>{movie.original_title}</h4>
        </>
      ))}
      <h1>hello</h1>
    </div>
  );
}
