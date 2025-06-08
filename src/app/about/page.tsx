export default function AboutPage() {
  return (
    <article className="page type-page status-publish hentry">
      <header className="entry-header">
        <h1 className="entry-title">This is the about page</h1>
      </header>

      <div className="entry-content">
        <p>
          Welcome to Mikrocosm, a digital laboratory where technology meets creativity. 
          This site showcases a collection of experimental projects exploring the boundaries 
          between code, sound, and visual art.
        </p>

        <p>
          The projects featured here span various domains including:
        </p>

        <ul>
          <li><strong>Creative Coding</strong> - Explorations in generative art and procedural content</li>
          <li><strong>Audio Processing</strong> - Digital signal processing and sound synthesis</li>
          <li><strong>Physical Computing</strong> - Bridging the digital and physical worlds</li>
          <li><strong>Interactive Media</strong> - User-responsive installations and interfaces</li>
        </ul>

        <p>
          Each project represents both a finished work and an ongoing investigation into 
          the possibilities that emerge when we combine computational thinking with 
          artistic expression.           The name &ldquo;Mikrocosm&rdquo; reflects the idea that even small 
          experiments can reveal universal patterns and insights.
        </p>

        <p>
          The work here uses various tools and technologies including Max/MSP, 
          OpenFrameworks, Processing, and custom hardware interfaces. All projects 
          are documented with technical details, source code, and reflections on 
          the creative process.
        </p>

        <p>
          This collection spans work from workshops, academic projects, and personal 
          investigations into the intersection of technology and art. Each piece is 
          both finished and unfinished - complete enough to demonstrate an idea, 
          yet open enough to inspire further exploration.
        </p>
      </div>
    </article>
  );
} 