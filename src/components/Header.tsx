import Link from 'next/link';

export default function Header() {
  return (
    <header id="masthead" className="site-header">
      <div className="site-branding">
        <p className="site-title">
          <Link href="/" rel="home">Mikrocosm</Link>
        </p>
        <p className="site-description">Projects, both finished and half fini…</p>
      </div>

      <nav id="site-navigation" className="main-navigation">
        <button className="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
          Primary Menu
        </button>
        <div id="primary-menu" className="menu">
          <ul aria-expanded="false" className="nav-menu">
            <li className="page_item page-item-90">
              <Link href="/">Home page</Link>
            </li>
            <li className="page_item page-item-100">
              <Link href="/about">This is the about page</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
} 