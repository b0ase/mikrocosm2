'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="masthead" className="site-header">
      <div className="site-branding">
        <h1 className="site-title">
          <Link href="/" rel="home">Mikrocosm</Link>
        </h1>
        <p className="site-description">Projects, both finished and half fini…</p>
      </div>

      <nav id="site-navigation" className="main-navigation">
        <button 
          className="menu-toggle" 
          aria-controls="primary-menu" 
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          {isMenuOpen ? 'Close Menu' : 'Primary Menu'}
        </button>
        <div id="primary-menu" className="menu">
          <ul aria-expanded={isMenuOpen} className="nav-menu">
            <li className="page_item page-item-90">
              <Link href="/" className="nav-link">Home page</Link>
            </li>
            <li className="page_item page-item-100">
              <Link href="/about" className="nav-link">This is the about page</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
} 