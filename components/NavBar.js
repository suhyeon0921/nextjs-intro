import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href='/' legacyBehavior>
        <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
      </Link>
      <Link href='/about' legacyBehavior>
        <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
      </Link>
      {/* jsx사용해서 이 스타일들은 오직 이 컴포넌트 내부로 범위 한정 */}
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}
