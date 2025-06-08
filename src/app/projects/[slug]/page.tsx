import { notFound } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

type Project = {
  id: string;
  title: string;
  date: string;
  content: React.ReactElement;
  prevProject?: { id: string; title: string };
  nextProject?: { id: string; title: string };
};

const projects: Record<string, Project> = {
  'drum-machine': {
    id: 'drum-machine',
    title: 'Workshops In Creative Coding Project: Drum Machine',
    date: '2013-12-18T21:32:56+00:00',
    content: (
      <div className="entry-content">
        <p><strong>Introduction</strong></p>

        <p>
          The creative goal <span className="highlight-prepositions">of</span>{' '}
          <span className="highlight-pronouns">this</span> project initially was{' '}
          <span className="highlight-prepositions">to</span> create a software emulator{' '}
          <span className="highlight-prepositions">of</span> an{' '}
          <a href="http://www.elektron.se/products/machinedrum-uw">Elektron Machinedrum</a>.
        </p>

        <figure className="wp-block-image">
          <a href="/images/Elektron-MachineDrum-SPS1-2.jpg" target="_blank">
            <img src="/images/Elektron-MachineDrum-SPS1-2.jpg" alt="" />
          </a>
        </figure>

        <p>
          The 16-step programmable interface is a legacy <span className="highlight-prepositions">from</span> earlier hardware drum machines,{' '}
          <span className="highlight-prepositions">for</span> a history <span className="highlight-prepositions">of</span> the development{' '}
          <span className="highlight-prepositions">of</span> the drum machine check <span className="highlight-prepositions">out</span>{' '}
          <span className="highlight-pronouns">this</span>{' '}
          <a href="https://en.wikipedia.org/wiki/Drum_machine">Wikipedia article</a>.
        </p>

        <p><strong>Instructions</strong></p>

        <p>
          <span className="highlight-prepositions">Before</span> <span className="highlight-pronouns">you</span> get started{' '}
          <span className="highlight-pronouns">it</span> would probably be a good idea <span className="highlight-prepositions">to</span> watch this
          demonstration video <span className="highlight-prepositions">to</span> get an idea{' '}
          <span className="highlight-prepositions">of</span> the general operation;{' '}
          <a href="https://vimeo.com/84074546">https://vimeo.com/84074546</a>
        </p>

        <figure className="wp-block-image">
          <a href="/images/Drum-Machine-Interface.jpg" target="_blank">
            <img src="/images/Drum-Machine-Interface.jpg" alt="" />
          </a>
        </figure>

        <p><strong>Techniques Used</strong></p>

        <p>
          Max 6 <span className="highlight-conjunctions">and</span> OpenFrameworks, were used. Max handles the audio processing{' '}
          <span className="highlight-conjunctions">and</span> communicates <span className="highlight-prepositions">with</span> the interface built{' '}
          <span className="highlight-prepositions">with</span> OpenFrameworks using the
          User Datagram Protocol (UDP) <span className="highlight-prepositions">for</span> Open Sound Control (OSC) messages.
        </p>
      </div>
    ),
    nextProject: { id: 'orderly-anarchy', title: 'Advanced AV Processing: Orderly Anarchy Emerges' }
  },
  'orderly-anarchy': {
    id: 'orderly-anarchy',
    title: 'Advanced AV Processing: Orderly Anarchy Emerges',
    date: '2013-12-18T21:32:56+00:00',
    content: (
      <div className="entry-content">
        <p><strong>Introduction</strong></p>

        <p>
          <span className="highlight-pronouns">This</span> project was the culmination{' '}
          <span className="highlight-prepositions">of</span> my &ldquo;Advanced AV Processing&rdquo; module. The aim was{' '}
          <span className="highlight-prepositions">to</span> produce an audio visual presentation{' '}
          <span className="highlight-pronouns">which</span> explores <span className="highlight-pronouns">some</span>{' '}
          <span className="highlight-prepositions">of</span> the ideas that have been developing{' '}
          <span className="highlight-prepositions">in</span> my mind over the course{' '}
          <span className="highlight-prepositions">of</span> <span className="highlight-pronouns">this</span> masters program.
        </p>

        <figure className="wp-block-image">
          <a href="/images/OAE.jpg" target="_blank">
            <img src="/images/OAE.jpg" alt="Orderly Anarchy Emerges" />
          </a>
        </figure>

        <p>
          The presentation consists <span className="highlight-prepositions">of</span> a Processing sketch{' '}
          <span className="highlight-pronouns">which</span> receives messages <span className="highlight-prepositions">from</span> a Max patch.{' '}
          <span className="highlight-pronouns">Both</span> <span className="highlight-prepositions">of</span>{' '}
          <span className="highlight-pronouns">these</span> generate content procedurally, meaning{' '}
          <span className="highlight-conjunctions">that</span> <span className="highlight-pronouns">each</span> time{' '}
          <span className="highlight-pronouns">you</span> run the presentation{' '}
          <span className="highlight-pronouns">it</span> will be different.
        </p>

        <p><strong>Technical Implementation</strong></p>

        <figure className="wp-block-image">
          <a href="/images/mp1.jpg" target="_blank">
            <img src="/images/mp1.jpg" alt="mp1" />
          </a>
        </figure>

        <p><strong>References</strong></p>

        <p>
          James Gleick – &ldquo;Chaos: The Amazing Science <span className="highlight-prepositions">Of</span> The Unpredictable&rdquo;
        </p>

        <p>
          Lao Tzu – &ldquo;Tao Te Ching&rdquo;
        </p>

        <p>
          Alan Watts – &ldquo;You&rsquo;re It!&rdquo; audio lectures.
        </p>
      </div>
    ),
    prevProject: { id: 'drum-machine', title: 'Workshops In Creative Coding Project: Drum Machine' },
    nextProject: { id: 'i-ching-turntable', title: 'Physical Computing: The I Ching Turntable' }
  },
  'i-ching-turntable': {
    id: 'i-ching-turntable',
    title: 'Physical Computing: The I Ching Turntable',
    date: '2013-12-18T21:32:56+00:00',
    content: (
      <div className="entry-content">
        <p><strong>Introduction</strong></p>

        <p>
          <span className="highlight-pronouns">This</span> project combines ancient divination techniques{' '}
          <span className="highlight-prepositions">with</span> modern physical computing. The I Ching Turntable{' '}
          <span className="highlight-prepositions">is</span> a tangible interface that generates{' '}
          I Ching hexagrams through physical interaction.
        </p>

        <figure className="wp-block-image">
          <a href="/images/IChingTurntable_bb.jpg" target="_blank">
            <img src="/images/IChingTurntable_bb.jpg" alt="I Ching Turntable" />
          </a>
        </figure>

        <p>
          The project explores the intersection <span className="highlight-prepositions">between</span>{' '}
          chance, intention, <span className="highlight-conjunctions">and</span> technology,{' '}
          creating a bridge <span className="highlight-prepositions">between</span> ancient wisdom{' '}
          <span className="highlight-conjunctions">and</span> contemporary digital art.
        </p>

        <p><strong>Technical Implementation</strong></p>

        <p>
          The system uses Arduino microcontrollers, sensors, <span className="highlight-conjunctions">and</span>{' '}
          custom software <span className="highlight-prepositions">to</span> detect user interaction{' '}
          <span className="highlight-conjunctions">and</span> generate corresponding hexagrams.
        </p>
      </div>
    ),
    prevProject: { id: 'orderly-anarchy', title: 'Advanced AV Processing: Orderly Anarchy Emerges' },
    nextProject: { id: 'creative-coding-ii', title: 'Workshops In Creative Coding II: All Space-Time in a Knotshell' }
  },
  'creative-coding-ii': {
    id: 'creative-coding-ii',
    title: 'Workshops In Creative Coding II: All Space-Time in a Knotshell',
    date: '2013-12-18T21:32:56+00:00',
    content: (
      <div className="entry-content">
        <p><strong>Introduction</strong></p>

        <p>
          <span className="highlight-pronouns">This</span> advanced workshop explores{' '}
          <span className="highlight-prepositions">the</span> concept <span className="highlight-prepositions">of</span>{' '}
          space-time through computational art <span className="highlight-conjunctions">and</span>{' '}
          creative coding techniques.
        </p>

        <figure className="wp-block-image">
          <a href="/images/timewave-theory-king-wen-sequence-hexagrams-iching.jpg" target="_blank">
            <img src="/images/timewave-theory-king-wen-sequence-hexagrams-iching.jpg" alt="Timewave Theory" />
          </a>
        </figure>

        <p>
          The project investigates temporal patterns, complexity theory,{' '}
          <span className="highlight-conjunctions">and</span> the mathematical structures{' '}
          underlying <span className="highlight-pronouns">our</span> perception{' '}
          <span className="highlight-prepositions">of</span> time <span className="highlight-conjunctions">and</span> space.
        </p>

        <p><strong>Conceptual Framework</strong></p>

        <p>
          Drawing inspiration <span className="highlight-prepositions">from</span> various fields{' '}
          including mathematics, physics, <span className="highlight-conjunctions">and</span>{' '}
          philosophy, <span className="highlight-pronouns">this</span> work attempts{' '}
          <span className="highlight-prepositions">to</span> visualize complex temporal relationships.
        </p>
      </div>
    ),
    prevProject: { id: 'i-ching-turntable', title: 'Physical Computing: The I Ching Turntable' }
  }
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return (
    <article className={`post-${project.id} post type-post status-publish format-standard hentry`}>
      <header className="entry-header">
        <h1 className="entry-title">{project.title}</h1>
        <div className="entry-meta">
          <span className="posted-on">
            <time className="entry-date published" dateTime={project.date}>
              December 18, 2013
            </time>
          </span>
        </div>
      </header>

      {project.content}

      <nav className="post-navigation" role="navigation">
        <h2 className="screen-reader-text">Post navigation</h2>
        <div className="nav-links">
          {project.prevProject && (
            <div className="nav-previous">
              <Link href={`/projects/${project.prevProject.id}`} rel="prev">
                ← {project.prevProject.title}
              </Link>
            </div>
          )}
          {project.nextProject && (
            <div className="nav-next">
              <Link href={`/projects/${project.nextProject.id}`} rel="next">
                {project.nextProject.title} →
              </Link>
            </div>
          )}
        </div>
      </nav>

      <div id="comments" className="comments-area">
        <div id="respond" className="comment-respond">
          <h3 id="reply-title" className="comment-reply-title">
            Leave a Reply{' '}
            <small>
              <a
                rel="nofollow"
                id="cancel-comment-reply-link"
                href="#respond"
                style={{ display: 'none' }}
              >
                Cancel reply
              </a>
            </small>
          </h3>
          <form
            action=""
            method="post"
            id="commentform"
            className="comment-form"
          >
            <p className="comment-notes">
              <span id="email-notes">Your email address will not be published.</span>{' '}
              Required fields are marked <span className="required">*</span>
            </p>
            <p className="comment-form-comment">
              <label htmlFor="comment">Comment</label>{' '}
              <textarea
                id="comment"
                name="comment"
                cols={45}
                rows={8}
                maxLength={65525}
                required
              ></textarea>
            </p>
            <p className="comment-form-author">
              <label htmlFor="author">
                Name <span className="required">*</span>
              </label>{' '}
              <input
                id="author"
                name="author"
                type="text"
                size={30}
                maxLength={245}
                required
              />
            </p>
            <p className="comment-form-email">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>{' '}
              <input
                id="email"
                name="email"
                type="email"
                size={30}
                maxLength={100}
                aria-describedby="email-notes"
                required
              />
            </p>
            <p className="comment-form-url">
              <label htmlFor="url">Website</label>{' '}
              <input id="url" name="url" type="url" size={30} maxLength={200} />
            </p>
            <p className="form-submit">
              <input
                name="submit"
                type="submit"
                id="submit"
                className="submit"
                value="Post Comment"
              />
            </p>
          </form>
        </div>
      </div>
    </article>
  );
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
} 