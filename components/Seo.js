import Head from 'next/head';

export default function Seo({ title }) {
  return (
    <Head>
      <titlle>{title} | Next Movies</titlle>
    </Head>
  );
}
