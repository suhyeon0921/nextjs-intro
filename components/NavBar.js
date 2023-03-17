import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link
        className={`${styles.Link} ${
          router.pathname === '/' ? styles.active : ''
        }`}
        href='/'
      >
        Home
      </Link>
      <Link
        className={[
          styles.Link,
          router.pathname === '/about' ? styles.active : '',
        ].join(' ')}
        href='/about'
      >
        About
      </Link>
    </nav>
  );
}
