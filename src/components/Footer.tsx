export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="colophon" className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-title">Mikrocosm</h3>
            <p className="footer-description">
              A collection of creative projects exploring the intersection of technology, art, and philosophy.
            </p>
          </div>
          
          <div className="footer-search">
            <form role="search" method="get" className="search-form" action="">
              <label className="sr-only">
                Search for projects and content:
              </label>
              <input 
                type="search" 
                className="search-field" 
                placeholder="Search projects..." 
                name="s" 
                aria-label="Search projects"
              />
              <button type="submit" className="search-submit" aria-label="Submit search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Mikrocosm. Exploring the boundaries of digital creativity.
          </p>
          <p className="attribution">
            Alternative Style 1 • Modern Elegant Design
          </p>
        </div>
      </div>
    </footer>
  );
} 