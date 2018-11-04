import Link from 'next/link';

const Header = () => (
  <div>
    <Link href="/">
      <a>Hem</a>
    </Link>
    <Link href="/Projects">
      <a>Projekt</a>
    </Link>
  </div>
);

export default Header;
