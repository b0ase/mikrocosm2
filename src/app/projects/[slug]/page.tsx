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

        <p>
          While I have not replicated the user interface <span className="highlight-prepositions">of</span> the Machinedrum,{' '}
          I did manage <span className="highlight-prepositions">to</span> find samples <span className="highlight-prepositions">of</span> the sounds{' '}
          <span className="highlight-prepositions">from</span> <span className="highlight-pronouns">it</span>, these are included{' '}
          <span className="highlight-prepositions">in</span> the zip file containing the application{' '}
          <span className="highlight-conjunctions">and</span> source code, found here.
        </p>

        <p>
          The technical goal <span className="highlight-prepositions">of</span> the project was{' '}
          <span className="highlight-prepositions">to</span> further my knowledge <span className="highlight-prepositions">of</span> Max{' '}
          <span className="highlight-conjunctions">and</span> OpenFrameworks/C++.
        </p>

        <p><strong>Instructions</strong></p>

        <p>
          <span className="highlight-prepositions">Before</span> <span className="highlight-pronouns">you</span> get started{' '}
          <span className="highlight-pronouns">it</span> would probably be a good idea <span className="highlight-prepositions">to</span> watch{' '}
          <span className="highlight-pronouns">this</span> demonstration video <span className="highlight-prepositions">to</span> get an idea{' '}
          <span className="highlight-prepositions">of</span> the general operation;{' '}
          <a href="https://vimeo.com/84074546">https://vimeo.com/84074546</a>
        </p>

        <p>
          <span className="highlight-prepositions">To</span> get started open the &ldquo;Start Machinedrum&rdquo; application,{' '}
          <span className="highlight-pronouns">this</span> will launch <span className="highlight-pronouns">both</span>{' '}
          &ldquo;MaxMachinedrum&rdquo; <span className="highlight-conjunctions">and</span> &ldquo;OFMachinedrum&rdquo;,{' '}
          make sure <span className="highlight-prepositions">to</span> wait until they are <span className="highlight-pronouns">both</span> open.
        </p>

        <p>Here&rsquo;s what the user interface looks like;</p>

        <figure className="wp-block-image">
          <a href="/images/Drum-Machine-Interface.jpg" target="_blank">
            <img src="/images/Drum-Machine-Interface.jpg" alt="" />
          </a>
        </figure>

        <p>
          Now drag <span className="highlight-conjunctions">and</span> drop a sound file{' '}
          <span className="highlight-prepositions">from</span> the &ldquo;Drum Sound Samples&rdquo; folder{' '}
          <span className="highlight-prepositions">into</span> <span className="highlight-pronouns">one</span>{' '}
          <span className="highlight-prepositions">of</span> the &ldquo;Drop sample here&rdquo; boxes{' '}
          <span className="highlight-prepositions">in</span> the &ldquo;OFMachinedrum&rdquo; window.{' '}
          The first 10 rows are quantised, rhythms are programmed <span className="highlight-prepositions">into</span>{' '}
          <span className="highlight-pronouns">these</span> rows <span className="highlight-prepositions">by</span> activating the cells{' '}
          <span className="highlight-prepositions">by</span> clicking <span className="highlight-prepositions">on</span> them{' '}
          (yellow/green cells are active, blue/red cells are inactive).{' '}
          A random sequence can be generated <span className="highlight-prepositions">in</span>{' '}
          <span className="highlight-pronouns">one</span> <span className="highlight-prepositions">of</span>{' '}
          <span className="highlight-pronouns">these</span> rows <span className="highlight-prepositions">by</span> clicking{' '}
          <span className="highlight-prepositions">on</span> <span className="highlight-pronouns">one</span>{' '}
          <span className="highlight-prepositions">of</span> the &ldquo;Make random sequence&rdquo; buttons.
        </p>

        <p>
          The <span className="highlight-pronouns">other</span> 6 rows are <span className="highlight-prepositions">for</span>{' '}
          non-quantised sequences, <span className="highlight-prepositions">to</span> input a sequence{' '}
          <span className="highlight-prepositions">in</span> <span className="highlight-pronouns">one</span>{' '}
          <span className="highlight-prepositions">of</span> <span className="highlight-pronouns">these</span> rows drag{' '}
          <span className="highlight-conjunctions">and</span> drop a sample <span className="highlight-prepositions">into</span> the appropriate{' '}
          &lsquo;Drop sample here&rsquo; box <span className="highlight-conjunctions">and</span> then tap{' '}
          <span className="highlight-prepositions">out</span> the sequence <span className="highlight-prepositions">with</span>{' '}
          <span className="highlight-pronouns">one</span> <span className="highlight-prepositions">of</span> the keys 1{' '}
          <span className="highlight-prepositions">to</span> 6. Non-quantised drum triggers can{' '}
          <span className="highlight-conjunctions">also</span> be set <span className="highlight-prepositions">by</span> clicking anywhere{' '}
          <span className="highlight-prepositions">in</span> <span className="highlight-pronouns">one</span>{' '}
          <span className="highlight-prepositions">of</span> the 6 non-quantised rows,{' '}
          <span className="highlight-conjunctions">and</span> a single non-quantised trigger can be removed{' '}
          <span className="highlight-prepositions">at</span> any time <span className="highlight-prepositions">by</span> clicking{' '}
          <span className="highlight-prepositions">on</span> <span className="highlight-pronouns">it</span>.
        </p>

        <p>
          <span className="highlight-prepositions">To</span> reset a row, click <span className="highlight-prepositions">on</span> the{' '}
          &ldquo;Reset row&rdquo; button <span className="highlight-prepositions">to</span> the left{' '}
          <span className="highlight-prepositions">of</span> the row. <span className="highlight-prepositions">To</span> remove a sample,{' '}
          click <span className="highlight-prepositions">on</span> the &ldquo;Clear sample&rdquo; button{' '}
          <span className="highlight-prepositions">to</span> the right <span className="highlight-prepositions">of</span> the row.{' '}
          If <span className="highlight-pronouns">you</span> drop a sample <span className="highlight-prepositions">into</span> a box{' '}
          <span className="highlight-pronouns">which</span> already has a sample <span className="highlight-prepositions">in</span>,{' '}
          the old sample will be replaced. The &ldquo;Reset all rows&rdquo;{' '}
          <span className="highlight-conjunctions">and</span> &ldquo;Clear all samples&rdquo; buttons do exactly what{' '}
          <span className="highlight-pronouns">they</span> say <span className="highlight-prepositions">on</span> the tin.
        </p>

        <p>
          If <span className="highlight-pronouns">you</span>&rsquo;ve found a rhythm sequence{' '}
          <span className="highlight-conjunctions">that</span> <span className="highlight-pronouns">you</span> like,{' '}
          <span className="highlight-pronouns">you</span> can save <span className="highlight-pronouns">it</span>{' '}
          <span className="highlight-prepositions">in</span> <span className="highlight-pronouns">one</span>{' '}
          <span className="highlight-prepositions">of</span> the 13 sequence banks{' '}
          <span className="highlight-prepositions">at</span> the bottom <span className="highlight-prepositions">of</span> the screen,{' '}
          click <span className="highlight-prepositions">on</span> the top (purple) half{' '}
          <span className="highlight-prepositions">of</span> the box <span className="highlight-prepositions">to</span> save the sequence,{' '}
          <span className="highlight-conjunctions">and</span> the bottom half <span className="highlight-prepositions">to</span> retrieve{' '}
          <span className="highlight-pronouns">it</span>. The sequence banks can be cleared{' '}
          <span className="highlight-prepositions">by</span> clicking <span className="highlight-prepositions">on</span> the{' '}
          &ldquo;Clear all saved sequences&rdquo; button. Here is a demonstration{' '}
          <span className="highlight-prepositions">of</span> recalling multiple patterns;{' '}
          <a href="https://vimeo.com/84079029">https://vimeo.com/84079029</a>
        </p>

        <p>
          (Note: There is <span className="highlight-conjunctions">but</span>{' '}
          <span className="highlight-pronouns">one</span> mysterious problem{' '}
          <span className="highlight-prepositions">with</span> the drum machines functionality,{' '}
          <span className="highlight-pronouns">this</span> regards the retrieval{' '}
          <span className="highlight-prepositions">of</span> sequences.{' '}
          <span className="highlight-pronouns">You</span> can see <span className="highlight-pronouns">this</span> a bit{' '}
          <span className="highlight-prepositions">towards</span> the end{' '}
          <span className="highlight-prepositions">of</span> <span className="highlight-pronouns">this</span> video.{' '}
          Sometimes the retrieve sequence button needs <span className="highlight-prepositions">to</span> be hit multiple times{' '}
          <span className="highlight-prepositions">for</span> the sounds <span className="highlight-prepositions">to</span> be retrieved,{' '}
          <span className="highlight-pronouns">other</span> times <span className="highlight-pronouns">it</span> works fine.{' '}
          Sometimes the sounds will disappear if the retrieve button is hit again.{' '}
          <span className="highlight-pronouns">This</span> remains an unresolved issue.)
        </p>

        <p>
          The &lsquo;s&rsquo; key starts <span className="highlight-conjunctions">and</span> stops the drum machine,{' '}
          <span className="highlight-conjunctions">and</span> the <span className="highlight-prepositions">up</span>{' '}
          <span className="highlight-conjunctions">and</span> down arrow keys change the tempo respectively.{' '}
          The tempo is displayed <span className="highlight-prepositions">at</span> the bottom{' '}
          <span className="highlight-prepositions">of</span> the last row{' '}
          <span className="highlight-prepositions">in</span> quarter sequences{' '}
          <span className="highlight-prepositions">per</span> minute, a generic house track{' '}
          <span className="highlight-prepositions">for</span> example will play{' '}
          <span className="highlight-prepositions">at</span> around 120-130 quarter sequences{' '}
          <span className="highlight-prepositions">per</span> minute.
        </p>

        <p>
          I hope <span className="highlight-pronouns">you</span> enjoy playing{' '}
          <span className="highlight-prepositions">with</span> <span className="highlight-pronouns">it</span>{' '}
          <span className="highlight-conjunctions">as</span> much{' '}
          <span className="highlight-conjunctions">as</span> I enjoyed making{' '}
          <span className="highlight-pronouns">it</span>!
        </p>

        <p><strong>Techniques Used</strong></p>

        <p>
          Max 6 <span className="highlight-conjunctions">and</span> OpenFrameworks, were used. Max handles the audio processing{' '}
          <span className="highlight-conjunctions">and</span> communicates <span className="highlight-prepositions">with</span> the interface built{' '}
          <span className="highlight-prepositions">with</span> OpenFrameworks using the
          User Datagram Protocol (UDP) <span className="highlight-prepositions">for</span> Open Sound Control (OSC) messages.
        </p>

        <p>Max patch <span className="highlight-prepositions">in</span> edit mode;</p>

        <figure className="wp-block-image">
          <a href="/images/Main-Max-Patch.jpg" target="_blank">
            <img src="/images/Main-Max-Patch.jpg" alt="Max patch in edit mode" />
          </a>
        </figure>

        <p>
          <span className="highlight-prepositions">At</span> the top left hand corner{' '}
          <span className="highlight-prepositions">of</span> the Max patch is found the [phasor~] object,{' '}
          <span className="highlight-pronouns">this</span> can be seen{' '}
          <span className="highlight-conjunctions">as</span> the driving force{' '}
          <span className="highlight-prepositions">of</span> the whole drum machine. Just{' '}
          <span className="highlight-prepositions">to</span> the right{' '}
          <span className="highlight-prepositions">of</span> the [phasor~] is a matrix{' '}
          <span className="highlight-prepositions">of</span> 10 rows{' '}
          <span className="highlight-conjunctions">and</span> 16 columns;
        </p>

        <figure className="wp-block-image">
          <a href="/images/pic1.jpg" target="_blank">
            <img src="/images/pic1.jpg" alt="pic1" />
          </a>
        </figure>

        <p>
          The pattern information is fed <span className="highlight-prepositions">from</span> the OpenFrameworks interface{' '}
          <span className="highlight-prepositions">via</span> OSC messages coming{' '}
          <span className="highlight-prepositions">into</span> the [p Row Info] subpatch shown here;
        </p>

        <figure className="wp-block-image">
          <a href="/images/rowinfo.jpg" target="_blank">
            <img src="/images/rowinfo.jpg" alt="rowinfo" />
          </a>
        </figure>

        <p>
          The random rows are generated <span className="highlight-prepositions">by</span> the [p Random Row Generator]{' '}
          <span className="highlight-prepositions">to</span> the top right{' '}
          <span className="highlight-prepositions">of</span> the matrix.
        </p>

        <p>
          The matrix stores pattern information <span className="highlight-conjunctions">and</span> feeds{' '}
          <span className="highlight-pronouns">this</span> <span className="highlight-prepositions">to</span> an array{' '}
          <span className="highlight-prepositions">of</span> toggles{' '}
          <span className="highlight-prepositions">inside</span> the [p Row 1 Drums]{' '}
          <span className="highlight-prepositions">to</span> [p Row 10 Drums] sub-patches, here is an expanded view{' '}
          <span className="highlight-prepositions">of</span> <span className="highlight-pronouns">one</span>{' '}
          <span className="highlight-prepositions">of</span> <span className="highlight-pronouns">these</span> sub-patches;
        </p>

        <figure className="wp-block-image">
          <a href="/images/Row.jpg" target="_blank">
            <img src="/images/Row.jpg" alt="Row" />
          </a>
        </figure>

        <p>
          The non-quantised beats are triggered <span className="highlight-prepositions">by</span> the [p Non-Quantised Row 1]{' '}
          <span className="highlight-prepositions">to</span> [p Non-Quantised Row 6] sub-patches, here is an expanded view{' '}
          <span className="highlight-prepositions">of</span> <span className="highlight-pronouns">one</span>{' '}
          <span className="highlight-prepositions">of</span> <span className="highlight-pronouns">these</span> sub-patches;
        </p>

        <figure className="wp-block-image">
          <a href="/images/nq.jpg" target="_blank">
            <img src="/images/nq.jpg" alt="nq" />
          </a>
        </figure>

        <p>
          Here the non-quantised trigger information is stored{' '}
          <span className="highlight-prepositions">in</span> the [coll],{' '}
          <span className="highlight-pronouns">this</span> is given the messages &ldquo;sort&rdquo;,{' '}
          &ldquo;renumber&rdquo; <span className="highlight-conjunctions">and</span> &ldquo;dump&rdquo;{' '}
          <span className="highlight-prepositions">in</span> <span className="highlight-conjunctions">that</span> order{' '}
          <span className="highlight-prepositions">at</span> the start{' '}
          <span className="highlight-prepositions">of</span> every 16-step sequence.{' '}
          <span className="highlight-pronouns">This</span> is important{' '}
          <span className="highlight-conjunctions">as</span> <span className="highlight-pronouns">it</span> keeps the triggers{' '}
          <span className="highlight-conjunctions">and</span> their corresponding indices{' '}
          <span className="highlight-prepositions">in</span> the correct (ascending) order.
        </p>

        <p>
          There&rsquo;s quite a few interesting little features{' '}
          <span className="highlight-prepositions">in</span> the Max patch,{' '}
          <span className="highlight-conjunctions">as</span> well{' '}
          <span className="highlight-conjunctions">as</span> the OpenFrameworks C++ code{' '}
          <span className="highlight-conjunctions">so</span> please have a look around the source code files.{' '}
          <span className="highlight-pronouns">They</span> are all{' '}
          <span className="highlight-prepositions">in</span> the Creative Coding Machinedrum.zip{' '}
          <span className="highlight-prepositions">from</span>;{' '}
          <a href="https://www.dropbox.com/sh/0io3v0fuya1uvim/LO-q3b5Fuj">https://www.dropbox.com/sh/0io3v0fuya1uvim/LO-q3b5Fuj</a>
        </p>

        <p><strong>Ideas <span className="highlight-prepositions">for</span> further work <span className="highlight-conjunctions">and</span> improvements</strong></p>

        <p>
          The technical knowledge <span className="highlight-prepositions">of</span>{' '}
          <span className="highlight-pronouns">these</span> creative coding tools{' '}
          <span className="highlight-conjunctions">that</span> I have gained{' '}
          <span className="highlight-prepositions">via</span> <span className="highlight-pronouns">this</span> project should be useful{' '}
          when <span className="highlight-pronouns">it</span> comes{' '}
          <span className="highlight-prepositions">to</span> my final Masters project.{' '}
          <span className="highlight-prepositions">In</span> particular having now had experience{' '}
          <span className="highlight-prepositions">of</span> getting Max{' '}
          <span className="highlight-conjunctions">and</span> OpenFrameworks{' '}
          <span className="highlight-prepositions">to</span> communicate{' '}
          <span className="highlight-prepositions">with</span> each other using OSC messages will open{' '}
          <span className="highlight-prepositions">up</span> a myriad{' '}
          <span className="highlight-prepositions">of</span> possibilities{' '}
          <span className="highlight-prepositions">for</span> project ideas.
        </p>

        <p>
          <span className="highlight-prepositions">With</span> regards{' '}
          <span className="highlight-prepositions">to</span> the drum machine project itself,{' '}
          the application could be extended <span className="highlight-prepositions">by</span> adding sampling capabilities,{' '}
          <span className="highlight-conjunctions">or</span> sound manipulation{' '}
          <span className="highlight-conjunctions">and</span> effects{' '}
          <span className="highlight-prepositions">of</span> various forms.{' '}
          <span className="highlight-pronouns">One</span> simple idea{' '}
          <span className="highlight-conjunctions">that</span> I thought{' '}
          <span className="highlight-prepositions">of</span> too late is{' '}
          <span className="highlight-prepositions">to</span> synchronise the fade-out{' '}
          <span className="highlight-prepositions">of</span> the colour interface when{' '}
          <span className="highlight-pronouns">it</span> is stopped{' '}
          <span className="highlight-prepositions">with</span> a pitch-drop{' '}
          <span className="highlight-prepositions">on</span> the sounds. I have found{' '}
          <span className="highlight-pronouns">this</span>{' '}
          <a href="http://basementhum.blogspot.co.uk/2010/03/pitch-drop-max-for-live-device.html">Max <span className="highlight-prepositions">for</span> Live device</a>{' '}
          (<a href="https://vimeo.com/10289959">https://vimeo.com/10289959</a>){' '}
          <span className="highlight-conjunctions">that</span> emulates the pitch drop{' '}
          <span className="highlight-prepositions">on</span> a vinyl record when{' '}
          <span className="highlight-pronouns">it</span> is stopped. The Max patch{' '}
          <span className="highlight-prepositions">behind</span> <span className="highlight-pronouns">it</span> looks like{' '}
          <span className="highlight-pronouns">this</span>;
        </p>

        <figure className="wp-block-image">
          <a href="/images/pitch.jpg" target="_blank">
            <img src="/images/pitch.jpg" alt="pitch" />
          </a>
        </figure>

        <p>
          The aforementioned issue <span className="highlight-prepositions">with</span> regards{' '}
          <span className="highlight-prepositions">to</span> retrieving saved patterns is{' '}
          <span className="highlight-pronouns">one</span> <span className="highlight-conjunctions">that</span> certainly needs addressing.
        </p>

        <p><strong>References</strong></p>

        <p>
          – The following OpenFrameworks example projects were used{' '}
          <span className="highlight-prepositions">for</span> inspiration/manipulated/adulterated/ripped off; oscReceiveExample, oscSenderExample, dragDropExample.
        </p>

        <p>
          – Thanks <span className="highlight-prepositions">to</span> Elektron (<a href="http://www.elektron.se/">http://www.elektron.se/</a>)
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
    date: '2014-05-13T00:00:00+00:00',
    content: (
      <div className="entry-content">
        <p><strong>Introduction</strong></p>

        <p>
          The creative goal <span className="highlight-prepositions">of</span>{' '}
          <span className="highlight-pronouns">this</span> project was an attempt{' '}
          <span className="highlight-prepositions">to</span> tie together a number{' '}
          <span className="highlight-prepositions">of</span> themes that are{' '}
          <span className="highlight-prepositions">of</span> interest{' '}
          <span className="highlight-prepositions">to</span> me, <span className="highlight-conjunctions">and</span>{' '}
          <span className="highlight-prepositions">to</span> use some{' '}
          <span className="highlight-prepositions">of</span> the physical computing skills{' '}
          that I have been learning <span className="highlight-prepositions">to</span> create{' '}
          an installation that would hopefully be beautiful{' '}
          <span className="highlight-conjunctions">and</span> engaging.
        </p>

        <p>
          The main theme <span className="highlight-prepositions">in</span>{' '}
          <span className="highlight-pronouns">this</span> project relates{' '}
          <span className="highlight-prepositions">to</span> an ongoing interest{' '}
          <span className="highlight-prepositions">of</span> mine{' '}
          <span className="highlight-prepositions">into</span> the nature{' '}
          <span className="highlight-prepositions">of</span> time,{' '}
          <span className="highlight-conjunctions">and</span> it&rsquo;s connection{' '}
          <span className="highlight-prepositions">to</span> the ancient Chinese system{' '}
          <span className="highlight-prepositions">of</span> divination the I Ching.{' '}
          A strongly interrelated theme here is an interest{' '}
          <span className="highlight-prepositions">in</span> systems{' '}
          <span className="highlight-pronouns">which</span> mimic the functioning{' '}
          <span className="highlight-prepositions">of</span> autotrophic organisms.{' '}
          <span className="highlight-pronouns">These</span> are organisms{' '}
          <span className="highlight-pronouns">which</span> nourish themselves, thus systems{' '}
          <span className="highlight-pronouns">which</span> mimic their functioning will involve{' '}
          some sort <span className="highlight-prepositions">of</span> iterative feedback loop{' '}
          <span className="highlight-prepositions">to</span> form a sort{' '}
          <span className="highlight-prepositions">of</span> auto-catalytic, self-reinforcing process.{' '}
          I became interested <span className="highlight-prepositions">in</span>{' '}
          <span className="highlight-pronouns">this</span> idea{' '}
          <span className="highlight-prepositions">after</span> seeing{' '}
          &lsquo;Talysis II, Autotrophs&rsquo;{' '}
          <span className="highlight-prepositions">by</span> Paul Prudence{' '}
          <span className="highlight-prepositions">in</span> the book{' '}
          &lsquo;Generative Design&rsquo;{' '}
          <span className="highlight-prepositions">by</span> Bohnacker et al. (page 104-107).
        </p>

        <div className="wp-block-embed__wrapper">
          <iframe src="https://player.vimeo.com/video/4489263" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
          <p>Talysis II from Paul Prudence on Vimeo.</p>
        </div>

        <p>
          <span className="highlight-prepositions">To</span> understand how autotrophism relates{' '}
          <span className="highlight-prepositions">to</span> theories{' '}
          <span className="highlight-prepositions">of</span> time,{' '}
          <span className="highlight-conjunctions">or</span> more specifically non-western theories{' '}
          <span className="highlight-prepositions">of</span> time{' '}
          <span className="highlight-pronouns">where</span> time is considered{' '}
          <span className="highlight-prepositions">to</span> be cyclical, consider the picture below{' '}
          <span className="highlight-prepositions">of</span> the Ouroboros.
        </p>

        <figure className="wp-block-image">
          <a href="/images/Serpiente_alquimica.jpg" target="_blank">
            <img src="/images/Serpiente_alquimica.jpg" alt="Serpiente_alquimica" />
          </a>
          <figcaption>
            (Figure 1: The Ouroboros, Drawing <span className="highlight-prepositions">by</span> Theodoros Pelecanos,{' '}
            <span className="highlight-prepositions">in</span> the alchemical tract <em>Synosius</em> (1478).<br />
            &ldquo;The Ouroboros often symbolizes self-reflexivity{' '}
            <span className="highlight-conjunctions">or</span> cyclicality, especially{' '}
            <span className="highlight-prepositions">in</span> the sense{' '}
            <span className="highlight-prepositions">of</span> something constantly re-creating itself, the eternal return&hellip;&rdquo;{' '}
            Source; wikipedia.org)
          </figcaption>
        </figure>

        <p>
          The western scientific view <span className="highlight-prepositions">of</span> time{' '}
          <span className="highlight-prepositions">as</span> a smooth surface,{' '}
          <span className="highlight-pronouns">where</span>{' '}
          <span className="highlight-pronouns">this</span> moment is just{' '}
          <span className="highlight-prepositions">like</span> the one{' '}
          <span className="highlight-prepositions">before</span> it,{' '}
          <span className="highlight-conjunctions">and</span> just{' '}
          <span className="highlight-prepositions">like</span> the one{' '}
          <span className="highlight-prepositions">about</span>{' '}
          <span className="highlight-prepositions">to</span> occur, is an idea{' '}
          that <span className="highlight-pronouns">this</span> project aims{' '}
          <span className="highlight-prepositions">to</span> challenge.
        </p>

        <p><strong>The System</strong></p>

        <p><strong>Overview</strong></p>

        <figure className="wp-block-image">
          <a href="/images/wen-mandala-8-bw.jpg" target="_blank">
            <img src="/images/wen-mandala-8-bw.jpg" alt="System Overview" />
          </a>
          <figcaption>(Figure 2: System Overview.)</figcaption>
        </figure>

        <p>
          My explanation <span className="highlight-prepositions">of</span> how the system works will begin{' '}
          <span className="highlight-prepositions">with</span> the electromagnetic interference (EMI) detector.{' '}
          EMI is a form <span className="highlight-prepositions">of</span> electromagnetic radiation,{' '}
          <span className="highlight-pronouns">this</span> is a combination{' '}
          <span className="highlight-prepositions">of</span> electrical{' '}
          <span className="highlight-conjunctions">and</span> magnetic waves travelling outward{' '}
          <span className="highlight-prepositions">from</span> anywhere that an electrical power signal is changing{' '}
          <span className="highlight-conjunctions">or</span> being turned off{' '}
          <span className="highlight-conjunctions">and</span>{' '}
          <span className="highlight-prepositions">on</span> rapidly. The antenna{' '}
          <span className="highlight-prepositions">for</span> detecting EMI here is simply{' '}
          a 3 foot length <span className="highlight-prepositions">of</span> solid core wire, connected{' '}
          <span className="highlight-prepositions">to</span> an analogue pin{' '}
          <span className="highlight-prepositions">of</span> Arduino 1,{' '}
          <span className="highlight-prepositions">via</span> an LM386 amplifier chip circuit.
        </p>

        <figure className="wp-block-image">
          <a href="/images/EMIsensor_bb1.jpg" target="_blank">
            <img src="/images/EMIsensor_bb1.jpg" alt="EMI detector breadboard view" />
          </a>
          <figcaption>(Figure 3: EMI detector, breadboard view. Signal amplified <span className="highlight-prepositions">with</span> LM386 amplifier chip.)</figcaption>
        </figure>

        <figure className="wp-block-image">
          <a href="/images/LM386ampschematic.jpg" target="_blank">
            <img src="/images/LM386ampschematic.jpg" alt="EMI detector schematic view" />
          </a>
          <figcaption>(Figure 4: EMI detector, schematic view. Signal amplified <span className="highlight-prepositions">with</span> LM386 amplifier chip.)</figcaption>
        </figure>
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