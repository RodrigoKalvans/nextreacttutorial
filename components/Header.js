import Link from "next/link";

// https://ourroaming.blogspot.com

export default function Header() {
  return (
    <header>
      <h1>Rodrigo Kalvans</h1>
      <nav>
        <div class='nav'>
          <Link href="/">
            Home
          </Link>
        </div>
        <div class='nav'>
          <Link href="/blog">
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}