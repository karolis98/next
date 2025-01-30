import Link from "next/link";

const Header = () => {
  return (
    <header>
      <strong>itProger</strong>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
