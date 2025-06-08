import Link from 'next/link';

export default function Home() {
  const projects = [
    {
      id: 'drum-machine',
      title: 'Workshops In Creative Coding Project: Drum Machine',
      date: 'December 18, 2013',
      excerpt: 'A software emulator of an Elektron Machinedrum using Max and OpenFrameworks.',
      image: '/images/Elektron-MachineDrum-SPS1-2.jpg'
    },
    {
      id: 'orderly-anarchy',
      title: 'Advanced AV Processing: Orderly Anarchy Emerges',
      date: 'December 18, 2013',
      excerpt: 'An audio-visual experiment using random patterns and Processing.',
      image: '/images/OAE.jpg'
    },
    {
      id: 'i-ching-turntable',
      title: 'Physical Computing: The I Ching Turntable',
      date: 'December 18, 2013',
      excerpt: 'A physical computing project combining the I Ching with turntable technology.',
      image: '/images/IChingTurntable_bb.jpg'
    },
    {
      id: 'creative-coding-ii',
      title: 'Workshops In Creative Coding II: All Space-Time in a Knotshell',
      date: 'December 18, 2013',
      excerpt: 'Advanced creative coding workshop exploring space-time concepts.',
      image: '/images/timewave-theory-king-wen-sequence-hexagrams-iching.jpg'
    }
  ];

  return (
    <div>
      <header className="entry-header">
        <h1 className="entry-title">Mikrocosm</h1>
        <div className="entry-meta">
          <span>Projects, both finished and half fini…</span>
        </div>
      </header>

      <div className="entry-content">
        <p>
          Welcome to Mikrocosm, a collection of creative coding projects, physical computing experiments, 
          and audio-visual explorations. Each project represents a journey into the intersection of 
          technology, art, and creative expression.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-item">
              <header className="project-header">
                <h2 className="project-title">
                  <Link href={`/projects/${project.id}`}>
                    {project.title}
                  </Link>
                </h2>
                <div className="project-meta">
                  <time className="project-date">{project.date}</time>
                </div>
              </header>
              
              {project.image && (
                <div className="project-image">
                  <Link href={`/projects/${project.id}`}>
                    <img src={project.image} alt={project.title} />
                  </Link>
                </div>
              )}
              
              <div className="project-content">
                <p>{project.excerpt}</p>
                <Link href={`/projects/${project.id}`} className="read-more">
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
