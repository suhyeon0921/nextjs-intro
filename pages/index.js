import NavBar from '@component/components/NavBar';

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>hello</h1>
      <style jsx>{`
        a {
          color: blue;
        }
      `}</style>
    </div>
  );
}
