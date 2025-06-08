export default function Footer() {
  return (
    <footer id="colophon" className="site-footer">
      <div className="site-info">
        <div id="footer-sidebar">
          <section id="search-2" className="widget widget_search">
            <form role="search" method="get" className="search-form" action="">
              <label>
                <span className="screen-reader-text">Search for:</span>
                <input 
                  type="search" 
                  className="search-field" 
                  placeholder="Search …" 
                  name="s" 
                />
              </label>
              <input type="submit" className="search-submit" value="Search" />
            </form>
          </section>
        </div>
      </div>
    </footer>
  );
} 