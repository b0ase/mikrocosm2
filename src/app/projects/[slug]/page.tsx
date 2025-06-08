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
    date: '2014-01-09T00:00:00+00:00',
    content: (
      <div className="entry-content">
        <figure className="wp-block-image">
          <a href="/images/OAE5.jpg" target="_blank">
            <img src="/images/OAE5.jpg" alt="OAE5" />
          </a>
        </figure>

        <figure className="wp-block-image">
          <a href="/images/OAE4.jpg" target="_blank">
            <img src="/images/OAE4.jpg" alt="OAE4" />
          </a>
        </figure>

        <figure className="wp-block-image">
          <a href="/images/OAE.jpg" target="_blank">
            <img src="/images/OAE.jpg" alt="OAE" />
          </a>
        </figure>

        <figure className="wp-block-image">
          <a href="/images/OAE2.jpg" target="_blank">
            <img src="/images/OAE2.jpg" alt="OAE2" />
          </a>
        </figure>

        <p>(Screen shots <span className="highlight-prepositions">from</span> the performance.)</p>

        <p><strong>Introduction</strong></p>

        <p>
          Orderly Anarchy Emerges is an audio-visual performance created{' '}
          <span className="highlight-prepositions">with</span> Max 6 (including Max{' '}
          <span className="highlight-prepositions">for</span> Live),{' '}
          <span className="highlight-conjunctions">and</span> Processing 2. I was originally going{' '}
          <span className="highlight-prepositions">to</span> call{' '}
          <span className="highlight-pronouns">it</span> Experiments{' '}
          <span className="highlight-prepositions">in</span> Chaos,{' '}
          <span className="highlight-conjunctions">but</span> I changed the name{' '}
          <span className="highlight-prepositions">to</span> Orderly Anarchy Emerges{' '}
          <span className="highlight-prepositions">after</span> hearing{' '}
          <span className="highlight-pronouns">this</span> phrase{' '}
          <span className="highlight-prepositions">in</span> a talk{' '}
          <span className="highlight-prepositions">on</span> Zen{' '}
          <span className="highlight-conjunctions">and</span> Taoism.{' '}
          The chaotic patterns <span className="highlight-prepositions">of</span> beats are contrasted{' '}
          <span className="highlight-prepositions">by</span> the repetitively looping sample, an idea I stole{' '}
          <span className="highlight-prepositions">from</span> the Autechre track &ldquo;Flutter&rdquo;,{' '}
          <span className="highlight-conjunctions">although</span> the sweeping delay effect applied{' '}
          <span className="highlight-prepositions">to</span> the sample sometimes makes{' '}
          <span className="highlight-pronouns">it</span> hard{' '}
          <span className="highlight-prepositions">to</span> distinguish{' '}
          <span className="highlight-pronouns">any</span> two loops{' '}
          <span className="highlight-prepositions">as</span> being the same.
        </p>

        <p>
          The creative goal <span className="highlight-prepositions">of</span>{' '}
          <span className="highlight-pronouns">this</span> project was{' '}
          <span className="highlight-prepositions">to</span> investigate randomness{' '}
          <span className="highlight-conjunctions">and</span> chaos, I was inspired{' '}
          <span className="highlight-prepositions">by</span> the idea{' '}
          <span className="highlight-prepositions">of</span> Generative Art (https://en.wikipedia.org/wiki/Generative_art).{' '}
          Whereby <span className="highlight-pronouns">you</span> create a system{' '}
          <span className="highlight-prepositions">with</span> certain predefined constraints, set{' '}
          <span className="highlight-pronouns">it</span>{' '}
          <span className="highlight-prepositions">in</span> motion, then watch{' '}
          <span className="highlight-pronouns">what</span>{' '}
          <span className="highlight-pronouns">it</span> does,{' '}
          <span className="highlight-conjunctions">and</span>{' '}
          <span className="highlight-pronouns">what</span>{' '}
          <span className="highlight-pronouns">it</span> does is normally hard{' '}
          <span className="highlight-prepositions">to</span> predict.{' '}
          The technical goal <span className="highlight-prepositions">of</span> the project was{' '}
          <span className="highlight-prepositions">to</span> further my knowledge{' '}
          <span className="highlight-prepositions">of</span> Max{' '}
          <span className="highlight-conjunctions">and</span> Processing,{' '}
          <span className="highlight-conjunctions">and</span>{' '}
          <span className="highlight-prepositions">to</span> learn how{' '}
          <span className="highlight-prepositions">to</span> get Max{' '}
          <span className="highlight-conjunctions">and</span> Processing{' '}
          <span className="highlight-prepositions">to</span> communicate{' '}
          <span className="highlight-prepositions">with</span> each other.
        </p>

        <p>
          Check here <span className="highlight-prepositions">for</span> a screenshot video{' '}
          <span className="highlight-prepositions">of</span> the audio-visual output{' '}
          <span className="highlight-conjunctions">as</span> well{' '}
          <span className="highlight-prepositions">as</span> the Max patch back-end{' '}
          <span className="highlight-pronouns">while</span>{' '}
          <span className="highlight-pronouns">it</span> is playing; https://vimeo.com/84056909
        </p>

        <p>
          Check here <span className="highlight-prepositions">for</span> me talking{' '}
          <span className="highlight-prepositions">about</span>{' '}
          <span className="highlight-pronouns">it</span>; https://vimeo.com/83830361
        </p>

        <p><strong>Instructions</strong></p>

        <p>
          (Note: Orderly Anarchy Emerges requires Max 6{' '}
          <span className="highlight-conjunctions">and</span> Processing 2, there is also a version{' '}
          <span className="highlight-prepositions">for</span> Max users{' '}
          <span className="highlight-prepositions">with</span> Max{' '}
          <span className="highlight-prepositions">for</span> Live.)
        </p>

        <ol>
          <li>
            Download the Orderly Anarchy Emerges.zip{' '}
            <span className="highlight-prepositions">from</span>; https://www.dropbox.com/sh/3cikgvkcsc4ihj9/A5yNpffZ73
          </li>
          <li>
            Unzip <span className="highlight-conjunctions">and</span> open the unzipped &ldquo;Orderly Anarchy Emerges&rdquo; folder, go{' '}
            <span className="highlight-prepositions">to</span> the &ldquo;Open Me First&rdquo; folder{' '}
            <span className="highlight-conjunctions">and</span> follow the instructions{' '}
            <span className="highlight-prepositions">in</span> the &ldquo;Read Me First&rdquo;{' '}
            <span className="highlight-prepositions">on</span> installing MaxLink, [xsample~],{' '}
            <span className="highlight-conjunctions">and</span> [bonk~].
          </li>
          <li>
            Go back <span className="highlight-prepositions">to</span> the &ldquo;Orderly Anarchy Emerges&rdquo; folder{' '}
            <span className="highlight-conjunctions">and</span> open the Orderly Anarchy Emerges (without M4L).maxpat ({' '}
            <span className="highlight-conjunctions">or</span>{' '}
            <span className="highlight-pronouns">if</span>{' '}
            <span className="highlight-pronouns">you</span> have Max{' '}
            <span className="highlight-prepositions">for</span> Live open the Orderly Anarchy Emerges.maxpat.) The Max patcher will start{' '}
            <span className="highlight-prepositions">in</span> presentation mode{' '}
            <span className="highlight-conjunctions">and</span> will look{' '}
            <span className="highlight-prepositions">like</span>{' '}
            <span className="highlight-pronouns">this</span>;
          </li>
        </ol>

        <figure className="wp-block-image">
          <a href="/images/picture.jpg" target="_blank">
            <img src="/images/picture.jpg" alt="picture" />
          </a>
        </figure>

        <p>
          <span className="highlight-conjunctions">Or</span>{' '}
          <span className="highlight-pronouns">this</span>;
        </p>

        <figure className="wp-block-image">
          <a href="/images/mp7.jpg" target="_blank">
            <img src="/images/mp7.jpg" alt="mp7" />
          </a>
        </figure>

        <ol start={4}>
          <li>
            Drag <span className="highlight-conjunctions">and</span> drop the &ldquo;Samples&rdquo; folder{' '}
            <span className="highlight-prepositions">from</span> the &ldquo;Orderly Anarchy Emerges&rdquo; folder{' '}
            <span className="highlight-prepositions">into</span> the box{' '}
            <span className="highlight-prepositions">in</span> the Max patcher, check the Audio Status is{' '}
            <span className="highlight-prepositions">on</span>.
          </li>
          <li>
            Open the appropriate Processing application, e.g.{' '}
            <span className="highlight-pronouns">If</span> using a Mac, open the application{' '}
            <span className="highlight-prepositions">in</span> the; /Orderly Anarchy Emerges/application.macosx folder.
          </li>
          <li>
            Click <span className="highlight-prepositions">on</span> the opened Processing application window{' '}
            <span className="highlight-prepositions">to</span> toggle the presentation{' '}
            <span className="highlight-prepositions">on</span>{' '}
            <span className="highlight-conjunctions">and</span>{' '}
            <span className="highlight-prepositions">off</span>, make sure{' '}
            <span className="highlight-prepositions">to</span> turn{' '}
            <span className="highlight-pronouns">it</span>{' '}
            <span className="highlight-prepositions">off</span>{' '}
            <span className="highlight-prepositions">before</span> closing.
          </li>
          <li>
            Watch, listen <span className="highlight-conjunctions">and</span> enjoy ({' '}
            <span className="highlight-conjunctions">or</span> become irritated).
          </li>
        </ol>

        <p><strong>Techniques Used</strong></p>

        <p>
          Max patch <span className="highlight-prepositions">in</span> edit mode;
        </p>

        <figure className="wp-block-image">
          <a href="/images/mp10.jpg" target="_blank">
            <img src="/images/mp10.jpg" alt="mp10" />
          </a>
        </figure>

        <p>
          <span className="highlight-prepositions">At</span> the top right hand corner{' '}
          <span className="highlight-prepositions">of</span> the patch is matrix{' '}
          <span className="highlight-prepositions">of</span> 8 rows{' '}
          <span className="highlight-conjunctions">and</span> 16 columns;
        </p>

        <figure className="wp-block-image">
          <a href="/images/mp1.jpg" target="_blank">
            <img src="/images/mp1.jpg" alt="mp1" />
          </a>
        </figure>

        <p>
          <span className="highlight-pronouns">This</span> matrix is updated{' '}
          <span className="highlight-prepositions">at</span> irregular intervals{' '}
          <span className="highlight-prepositions">with</span> messages triggering a new random pattern,{' '}
          <span className="highlight-pronouns">these</span> messages are coming{' '}
          <span className="highlight-prepositions">from</span> the Random Pattern Generator subpatch{' '}
          <span className="highlight-prepositions">to</span> the top right{' '}
          <span className="highlight-prepositions">of</span> the matrix. The expanded Random Pattern Generator subpatch looks{' '}
          <span className="highlight-prepositions">like</span>{' '}
          <span className="highlight-pronouns">this</span>;
        </p>

        <figure className="wp-block-image">
          <a href="/images/mp2.jpg" target="_blank">
            <img src="/images/mp2.jpg" alt="mp2" />
          </a>
        </figure>

        <p>
          The information <span className="highlight-prepositions">from</span> the matrix is then used{' '}
          <span className="highlight-prepositions">to</span> program the various drum patterns,{' '}
          <span className="highlight-pronouns">each</span> column being triggered{' '}
          <span className="highlight-prepositions">at</span> regular intervals{' '}
          <span className="highlight-prepositions">from</span> column 1{' '}
          <span className="highlight-prepositions">to</span> 16.{' '}
          <span className="highlight-prepositions">After</span> the 16th column is triggered, the time intervals{' '}
          <span className="highlight-prepositions">between</span> the triggers randomly changes{' '}
          <span className="highlight-prepositions">up</span>{' '}
          <span className="highlight-conjunctions">or</span> down{' '}
          <span className="highlight-conjunctions">and</span> the first column is triggered again{' '}
          <span className="highlight-prepositions">at</span> the new tempo.
        </p>

        <p>
          The drum sounds are assigned <span className="highlight-prepositions">to</span> trigger various shapes{' '}
          <span className="highlight-prepositions">to</span> be drawn{' '}
          <span className="highlight-prepositions">in</span> the Processing application window,{' '}
          <span className="highlight-pronouns">these</span> messages are sent{' '}
          <span className="highlight-prepositions">to</span> Processing using the [mxj jk.link] object here;
        </p>

        <figure className="wp-block-image">
          <a href="/images/mp5.jpg" target="_blank">
            <img src="/images/mp5.jpg" alt="mp5" />
          </a>
        </figure>

        <p>
          There are also messages coming <span className="highlight-prepositions">from</span> Processing{' '}
          <span className="highlight-prepositions">via</span> the [mxj jk.link] object,{' '}
          <span className="highlight-pronouns">these</span> are triggering the presentation{' '}
          <span className="highlight-prepositions">to</span> start{' '}
          <span className="highlight-conjunctions">and</span> stop.
        </p>

        <p>
          The drum sounds are being fed <span className="highlight-prepositions">into</span> the [bonk~] object.{' '}
          &ldquo;The [bonk~] object takes an audio signal input{' '}
          <span className="highlight-conjunctions">and</span> looks{' '}
          <span className="highlight-prepositions">for</span> &lsquo;attacks&rsquo; defined{' '}
          <span className="highlight-prepositions">as</span> sharp changes{' '}
          <span className="highlight-prepositions">in</span> the spectral envelope{' '}
          <span className="highlight-prepositions">of</span> the incoming sound. Optionally,{' '}
          <span className="highlight-conjunctions">and</span> less reliably,{' '}
          <span className="highlight-pronouns">you</span> can have [bonk~] check the attack{' '}
          <span className="highlight-prepositions">against</span> a collection{' '}
          <span className="highlight-prepositions">of</span> stored templates{' '}
          <span className="highlight-prepositions">to</span> try{' '}
          <span className="highlight-prepositions">to</span> guess{' '}
          <span className="highlight-pronouns">which</span>{' '}
          <span className="highlight-prepositions">of</span> two{' '}
          <span className="highlight-conjunctions">or</span> more instruments was hit. Bonk&rsquo;s two outputs are the raw spectrum{' '}
          <span className="highlight-prepositions">of</span> the attack (provided{' '}
          <span className="highlight-prepositions">as</span> a list{' '}
          <span className="highlight-prepositions">of</span> 11 numbers giving the signal &lsquo;loudness&rsquo;{' '}
          <span className="highlight-prepositions">in</span> the 11 frequency bands used),{' '}
          <span className="highlight-conjunctions">and</span> the &lsquo;cooked&rsquo; output{' '}
          <span className="highlight-pronouns">which</span> gives only an instrument number (counting{' '}
          <span className="highlight-prepositions">up</span>{' '}
          <span className="highlight-prepositions">from</span> zero){' '}
          <span className="highlight-conjunctions">and</span> a &lsquo;velocity&rsquo;.&rdquo; (Quoted text taken{' '}
          <span className="highlight-prepositions">from</span> the [bonk~] help file.)
        </p>

        <p>
          The outputs <span className="highlight-prepositions">of</span> [bonk~] are used{' '}
          <span className="highlight-prepositions">to</span> determine parameters{' '}
          <span className="highlight-prepositions">of</span> a flanger effect,{' '}
          <span className="highlight-conjunctions">and</span> a simple monaural reverberator effect called [cverb~] ({' '}
          <span className="highlight-pronouns">this</span> is part{' '}
          <span className="highlight-prepositions">of</span> Max{' '}
          <span className="highlight-prepositions">for</span> Live doesn&rsquo;t appear{' '}
          <span className="highlight-prepositions">in</span> the Orderly Anarchy Emerges (without M4L).maxpat).{' '}
          The sound <span className="highlight-prepositions">of</span> the beats is passed{' '}
          <span className="highlight-prepositions">through</span>{' '}
          <span className="highlight-pronouns">these</span> effects{' '}
          <span className="highlight-conjunctions">as</span> well{' '}
          <span className="highlight-prepositions">as</span> a state-variable filter [svf~]{' '}
          <span className="highlight-pronouns">which</span> cuts{' '}
          <span className="highlight-prepositions">off</span> the low frequencies{' '}
          <span className="highlight-prepositions">at</span> random intervals,{' '}
          <span className="highlight-conjunctions">and</span>{' '}
          <span className="highlight-pronouns">this</span> chorus effect;
        </p>

        <figure className="wp-block-image">
          <a href="/images/mp3.jpg" target="_blank">
            <img src="/images/mp3.jpg" alt="mp3" />
          </a>
        </figure>

        <p>
          The sample, taken <span className="highlight-prepositions">from</span> &ldquo;Halcyon &amp; On &amp; On&rdquo;{' '}
          <span className="highlight-prepositions">by</span> Orbital is played{' '}
          <span className="highlight-prepositions">with</span> the [xgroove~] object, looping forwards{' '}
          <span className="highlight-conjunctions">and</span> backwards alternately{' '}
          <span className="highlight-prepositions">by</span> setting the [xgroove~] loop mode{' '}
          <span className="highlight-prepositions">to</span> &ldquo;bidirectional&rdquo;. The sound is then passed{' '}
          <span className="highlight-prepositions">through</span>{' '}
          <span className="highlight-pronouns">this</span> sweeping delay effect;
        </p>

        <figure className="wp-block-image">
          <a href="/images/mp4.jpg" target="_blank">
            <img src="/images/mp4.jpg" alt="mp4" />
          </a>
        </figure>

        <p>
          I played around <span className="highlight-prepositions">with</span> the parameters{' '}
          <span className="highlight-prepositions">of</span> the sweeping delay{' '}
          <span className="highlight-prepositions">until</span> I found settings{' '}
          <span className="highlight-pronouns">which</span> produced interesting effects, I then set a random counter{' '}
          <span className="highlight-prepositions">to</span> choose a different setting{' '}
          <span className="highlight-prepositions">for</span>{' '}
          <span className="highlight-pronouns">each</span> loop.
        </p>

        <p>
          There&rsquo;s quite a few interesting little features{' '}
          <span className="highlight-prepositions">in</span> the Max patch,{' '}
          <span className="highlight-conjunctions">so</span> please have a look around{' '}
          <span className="highlight-pronouns">it</span>{' '}
          <span className="highlight-conjunctions">as</span> well{' '}
          <span className="highlight-prepositions">as</span> the Processing source code.{' '}
          <span className="highlight-pronouns">They</span> are all{' '}
          <span className="highlight-prepositions">in</span> the Orderly Anarchy Emerges.zip{' '}
          <span className="highlight-prepositions">from</span>; https://www.dropbox.com/sh/3cikgvkcsc4ihj9/A5yNpffZ73
        </p>

        <p>
          (Note: <span className="highlight-pronouns">If</span>{' '}
          <span className="highlight-pronouns">you</span> are having trouble hearing the audio then go{' '}
          <span className="highlight-prepositions">to</span> the Max patcher{' '}
          <span className="highlight-conjunctions">and</span> check{' '}
          <span className="highlight-prepositions">in</span> Max; Options &gt; Audio Status,{' '}
          <span className="highlight-conjunctions">and</span> check the output device.)
        </p>

        <p><strong>Ideas <span className="highlight-prepositions">for</span> further work</strong></p>

        <p>
          Building <span className="highlight-prepositions">on</span> the &ldquo;Generative Art&rdquo; idea, a further extension{' '}
          <span className="highlight-prepositions">of</span>{' '}
          <span className="highlight-pronouns">this</span> project would be{' '}
          <span className="highlight-prepositions">to</span> build an audio visual presentation{' '}
          <span className="highlight-pronouns">which</span> uses{' '}
          <span className="highlight-pronouns">some</span> sort{' '}
          <span className="highlight-prepositions">of</span> iterative algorithm.{' '}
          <span className="highlight-prepositions">For</span> example,{' '}
          <span className="highlight-pronouns">you</span> could measure{' '}
          <span className="highlight-pronouns">some</span> output data{' '}
          <span className="highlight-prepositions">from</span>{' '}
          <span className="highlight-pronouns">each</span> 16-step sequence{' '}
          <span className="highlight-conjunctions">and</span> use{' '}
          <span className="highlight-pronouns">this</span>{' '}
          <span className="highlight-prepositions">to</span> control a parameter{' '}
          <span className="highlight-prepositions">of</span> the following sequence{' '}
          <span className="highlight-conjunctions">and</span> then allow the process{' '}
          <span className="highlight-prepositions">to</span> organically unfold.
        </p>

        <p>
          <span className="highlight-pronouns">You</span> could possibly use [bonk~]{' '}
          <span className="highlight-prepositions">for</span> a music information retrieval project,{' '}
          <span className="highlight-conjunctions">such</span>{' '}
          <span className="highlight-prepositions">as</span> a beat tracker,{' '}
          <span className="highlight-prepositions">as</span>{' '}
          <span className="highlight-pronouns">its</span> ability{' '}
          <span className="highlight-prepositions">to</span> store templates allows{' '}
          <span className="highlight-prepositions">for</span> greater a scope{' '}
          <span className="highlight-prepositions">of</span> applications{' '}
          <span className="highlight-conjunctions">than</span> the way{' '}
          <span className="highlight-pronouns">it</span> was used{' '}
          <span className="highlight-prepositions">in</span>{' '}
          <span className="highlight-pronouns">this</span> project.
        </p>

        <p><strong>References</strong></p>

        <p>
          – Communication <span className="highlight-prepositions">between</span> Max{' '}
          <span className="highlight-conjunctions">and</span> Processing thanks{' '}
          <span className="highlight-prepositions">to</span> Maxlink (jklabs.net/maxlink/), one{' '}
          <span className="highlight-prepositions">of</span> the MaxLink example Processing sketches I heavily modified{' '}
          <span className="highlight-prepositions">to</span> create the visuals.
        </p>

        <p>
          – Chorus, flanger, <span className="highlight-conjunctions">and</span> sweeping delay effect taken{' '}
          <span className="highlight-conjunctions">and</span> modified{' '}
          <span className="highlight-prepositions">from</span>; cnmat.berkeley.edu/files/maxdl/ALL/CNMAT-Everything-OSX-MachO.tar.gz.
        </p>

        <p>
          – The [xgroove~] object was part <span className="highlight-prepositions">of</span> the [xsample~] extension{' '}
          <span className="highlight-prepositions">to</span> Max found here; grrrr.org/research/software/xsample/
        </p>

        <p>
          – The [bonk~] object used <span className="highlight-prepositions">to</span> gather data{' '}
          <span className="highlight-prepositions">on</span> the sounds was found here; crca-archive.ucsd.edu/~tapel/software.html
        </p>

        <p>
          – Looping sample taken <span className="highlight-prepositions">from</span> &ldquo;Halcyon &amp; On &amp; On&rdquo;{' '}
          <span className="highlight-prepositions">by</span> Orbital.
        </p>

        <p>
          – Inspiration <span className="highlight-prepositions">from</span>;
        </p>

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
    date: '2014-03-27T00:00:00+00:00',
    content: (
      <div className="entry-content">
        <p><strong>Where Did <span className="highlight-pronouns">This</span> Idea Come <span className="highlight-prepositions">From</span>?</strong></p>

        <p>
          The I Ching Turntable project originated <span className="highlight-prepositions">from</span> an interest{' '}
          <span className="highlight-prepositions">in</span> how one could generate random numbers{' '}
          <span className="highlight-prepositions">in</span> a computer system using a physical event,{' '}
          I have never been convinced that computer generated random numbers are truly random.{' '}
          I was specifically interested <span className="highlight-prepositions">in</span> how{' '}
          <span className="highlight-prepositions">to</span> replicate the throwing{' '}
          <span className="highlight-prepositions">of</span> three coins{' '}
          <span className="highlight-prepositions">as</span>{' '}
          <span className="highlight-prepositions">in</span> the traditional technique{' '}
          <span className="highlight-prepositions">for</span> casting the I Ching,{' '}
          <span className="highlight-prepositions">in</span> a way that feels{' '}
          <span className="highlight-prepositions">in</span> tune{' '}
          <span className="highlight-prepositions">with</span> the Tao.
        </p>

        <p>
          An early (<span className="highlight-conjunctions">and</span> fairly crude) idea,{' '}
          that I prototyped <span className="highlight-prepositions">in</span> Max/MSP was{' '}
          <span className="highlight-prepositions">to</span> simply have a box{' '}
          <span className="highlight-pronouns">where</span>{' '}
          <span className="highlight-pronouns">you</span> press either 0, 1, 2{' '}
          <span className="highlight-conjunctions">or</span> 3 buttons{' '}
          <span className="highlight-prepositions">to</span> represent the number{' '}
          <span className="highlight-prepositions">of</span> heads{' '}
          <span className="highlight-pronouns">you</span>&rsquo;ve thrown{' '}
          <span className="highlight-prepositions">with</span> three coins.{' '}
          Do <span className="highlight-pronouns">this</span> 6 times{' '}
          <span className="highlight-conjunctions">and</span> the system then displays{' '}
          <span className="highlight-pronouns">your</span> generated{' '}
          <span className="highlight-conjunctions">and</span> transformed hexagrams{' '}
          <span className="highlight-prepositions">on</span> an 6×6 matrix{' '}
          <span className="highlight-prepositions">of</span> LEDs.
        </p>

        <p>
          <span className="highlight-conjunctions">Although</span> the Max patch looked impressive (see Figure 7),{' '}
          <span className="highlight-pronouns">this</span> idea was a bit weak. (Max patch can be found here.{' '}
          Open <span className="highlight-pronouns">it</span>{' '}
          <span className="highlight-prepositions">in</span> presentation mode,{' '}
          I&rsquo;ve added some explanatory comments)
        </p>

        <figure className="wp-block-image">
          <a href="/images/maxching.jpg" target="_blank">
            <img src="/images/maxching.jpg" alt="Max patch" />
          </a>
          <figcaption>(Figure 1: Patch cord madness.)</figcaption>
        </figure>

        <p>
          I then investigated the possibility <span className="highlight-prepositions">of</span> using a Roulette wheel,{' '}
          placing sensors <span className="highlight-prepositions">in</span> the pockets{' '}
          that detect <span className="highlight-pronouns">where</span> the ball has landed{' '}
          <span className="highlight-conjunctions">and</span> relay{' '}
          <span className="highlight-pronouns">this</span> information{' '}
          <span className="highlight-prepositions">to</span> an Arduino.{' '}
          I really <span className="highlight-prepositions">like</span> the idea{' '}
          <span className="highlight-prepositions">of</span> hacking existing devices,{' '}
          <span className="highlight-conjunctions">but</span> there were a couple{' '}
          <span className="highlight-prepositions">of</span> problems{' '}
          <span className="highlight-prepositions">with</span> the Roulette wheel idea;
        </p>

        <ul>
          <li>
            Roulette wheels have 37 pockets (<span className="highlight-prepositions">in</span> French/European roulette){' '}
            <span className="highlight-conjunctions">or</span> 38 (<span className="highlight-prepositions">in</span> American roulette),{' '}
            <span className="highlight-prepositions">to</span> recreate the throwing{' '}
            <span className="highlight-prepositions">of</span> three coins I would have{' '}
            <span className="highlight-prepositions">to</span> find a Roulette wheel{' '}
            <span className="highlight-pronouns">whose</span> number{' '}
            <span className="highlight-prepositions">of</span> pockets is a multiple{' '}
            <span className="highlight-prepositions">of</span> 8. As far{' '}
            <span className="highlight-prepositions">as</span> I can tell{' '}
            <span className="highlight-pronouns">these</span> don&rsquo;t exist.
          </li>
          <li>
            Getting a wheel <span className="highlight-prepositions">to</span> spin smoothly{' '}
            <span className="highlight-conjunctions">and</span> also be able{' '}
            <span className="highlight-prepositions">to</span> relay information{' '}
            <span className="highlight-prepositions">to</span> a physical location{' '}
            <span className="highlight-prepositions">beyond</span> the point{' '}
            <span className="highlight-prepositions">on</span>{' '}
            <span className="highlight-pronouns">which</span>{' '}
            <span className="highlight-pronouns">it</span> is rotating would require{' '}
            some sort <span className="highlight-prepositions">of</span> wireless technology.{' '}
            Also, Roulette wheels are finely balanced, thus embedding any sort{' '}
            <span className="highlight-prepositions">of</span> Arduino, sensors, infra-red transmitters etc{' '}
            <span className="highlight-prepositions">on</span> the wheel itself would be quite likely{' '}
            <span className="highlight-prepositions">to</span> disrupt{' '}
            <span className="highlight-pronouns">this</span> balance{' '}
            <span className="highlight-conjunctions">and</span> cause the ball{' '}
            <span className="highlight-prepositions">to</span> have a greater probability{' '}
            <span className="highlight-prepositions">in</span> landing{' '}
            <span className="highlight-prepositions">in</span> certain pockets.
          </li>
        </ul>

        <p>
          I eventually ditched the Roulette wheel idea,{' '}
          <span className="highlight-conjunctions">but</span> I didn&rsquo;t let go{' '}
          <span className="highlight-prepositions">of</span> the idea{' '}
          <span className="highlight-prepositions">of</span> spinning things. Then I saw an old direct-drive vinyl turntable{' '}
          <span className="highlight-prepositions">in</span> my loft&hellip;
        </p>

        <p><strong>How I Made The I Ching Turntable</strong></p>

        <p>
          I opened <span className="highlight-prepositions">up</span> the turntable casing;
        </p>

        <figure className="wp-block-image">
          <a href="/images/142193.jpg" target="_blank">
            <img src="/images/142193.jpg" alt="Opened turntable casing" />
          </a>
        </figure>

        <p>
          I removed the direct drive motor <span className="highlight-pronouns">which</span> is a synchronous motor.{' '}
          The turntable carries permanent magnets. Magnetic coils{' '}
          <span className="highlight-prepositions">in</span> the body{' '}
          <span className="highlight-prepositions">of</span> the turntable produce a rotating magnetic field{' '}
          <span className="highlight-pronouns">which</span> drags the turntable round{' '}
          <span className="highlight-pronouns">when</span> the turntable is working normally.{' '}
          A property <span className="highlight-prepositions">of</span> such a motor is{' '}
          that <span className="highlight-pronouns">if</span>{' '}
          <span className="highlight-pronouns">you</span> turn the turntable{' '}
          <span className="highlight-prepositions">by</span> hand, the magnets will induce voltages{' '}
          <span className="highlight-prepositions">in</span> the magnetic coils.{' '}
          <span className="highlight-pronouns">This</span> will occur regardless{' '}
          <span className="highlight-prepositions">of</span> the direction{' '}
          <span className="highlight-prepositions">of</span> spin.
        </p>

        <p>
          <span className="highlight-prepositions">During</span> each spin{' '}
          <span className="highlight-prepositions">of</span> the turntable{' '}
          <span className="highlight-pronouns">we</span> sample{' '}
          <span className="highlight-pronouns">these</span> voltages{' '}
          <span className="highlight-prepositions">as</span> fast{' '}
          <span className="highlight-prepositions">as</span>{' '}
          <span className="highlight-pronouns">we</span> can using one{' '}
          <span className="highlight-prepositions">of</span> the Arduino&rsquo;s analogue input pins{' '}
          <span className="highlight-conjunctions">and</span> simply total the readings.{' '}
          <span className="highlight-pronouns">We</span> can say confidently{' '}
          that the least significant three bits{' '}
          <span className="highlight-prepositions">of</span>{' '}
          <span className="highlight-pronouns">this</span> total will be a random number.
        </p>

        <p><strong>Finding The Motor</strong></p>

        <figure className="wp-block-image">
          <a href="/images/P1450242.jpg" target="_blank">
            <img src="/images/P1450242.jpg" alt="Motor components" />
          </a>
        </figure>

        <figure className="wp-block-image">
          <a href="/images/P1450241.jpg" target="_blank">
            <img src="/images/P1450241.jpg" alt="Motor components 2" />
          </a>
        </figure>

        <p>
          I used a voltmeter <span className="highlight-prepositions">to</span> find{' '}
          <span className="highlight-prepositions">out</span>{' '}
          <span className="highlight-pronouns">which</span> connectors{' '}
          <span className="highlight-prepositions">on</span> the direct drive motor produce a current{' '}
          <span className="highlight-pronouns">when</span> the shaft{' '}
          <span className="highlight-prepositions">of</span> the motor is manually spun;
        </p>

        <figure className="wp-block-image">
          <a href="/images/142191.jpg" target="_blank">
            <img src="/images/142191.jpg" alt="Motor testing 1" />
          </a>
        </figure>

        <figure className="wp-block-image">
          <a href="/images/142192.jpg" target="_blank">
            <img src="/images/142192.jpg" alt="Motor testing 2" />
          </a>
        </figure>

        <p>
          Once I worked <span className="highlight-prepositions">out</span>{' '}
          <span className="highlight-pronouns">which</span> connectors{' '}
          <span className="highlight-pronouns">they</span> were I soldered wires{' '}
          <span className="highlight-prepositions">to</span>{' '}
          <span className="highlight-pronouns">them</span>{' '}
          <span className="highlight-conjunctions">and</span> ran the wires{' '}
          <span className="highlight-prepositions">through</span> a pair{' '}
          <span className="highlight-prepositions">of</span> very conveniently positioned holes{' '}
          <span className="highlight-prepositions">to</span> the other side{' '}
          <span className="highlight-prepositions">of</span> the motor;
        </p>

        <figure className="wp-block-image">
          <a href="/images/P1450260.jpg" target="_blank">
            <img src="/images/P1450260.jpg" alt="Motor wiring" />
          </a>
        </figure>

        <p>
          I then ripped pretty much everything else{' '}
          <span className="highlight-prepositions">out</span>{' '}
          <span className="highlight-prepositions">of</span> the turntable casing, the power supply, the pitch control, the audio cable, etc;
        </p>

        <figure className="wp-block-image">
          <a href="/images/P1450239.jpg" target="_blank">
            <img src="/images/P1450239.jpg" alt="Gutted turntable" />
          </a>
        </figure>

        <p>
          <span className="highlight-prepositions">In</span> the spaces now made{' '}
          <span className="highlight-prepositions">inside</span> the casing, I found nice places{' '}
          <span className="highlight-prepositions">to</span> position the Raspberry Pi;
        </p>

        <figure className="wp-block-image">
          <a href="/images/P1450243.jpg" target="_blank">
            <img src="/images/P1450243.jpg" alt="Raspberry Pi positioning" />
          </a>
        </figure>

        <p>
          <span className="highlight-conjunctions">And</span> the Arduino;
        </p>

        <figure className="wp-block-image">
          <a href="/images/P1450244.jpg" target="_blank">
            <img src="/images/P1450244.jpg" alt="Arduino positioning" />
          </a>
        </figure>

        <p>
          There were existing screw holes <span className="highlight-prepositions">in</span> just the right places{' '}
          <span className="highlight-prepositions">to</span> attach the Raspberry Pi{' '}
          <span className="highlight-conjunctions">and</span> Arduino.
        </p>

        <p>
          I found a hole left <span className="highlight-prepositions">from</span>{' '}
          <span className="highlight-pronouns">when</span> I removed the pitch control{' '}
          that was the perfect size <span className="highlight-prepositions">for</span> my rotary encoder;
        </p>

        <figure className="wp-block-image">
          <a href="/images/P1450248.jpg" target="_blank">
            <img src="/images/P1450248.jpg" alt="Rotary encoder installation" />
          </a>
        </figure>

        <p>
          I threaded a USB cable <span className="highlight-prepositions">between</span> the Raspberry Pi{' '}
          <span className="highlight-conjunctions">and</span> the Arduino. Now the inside{' '}
          <span className="highlight-prepositions">of</span> the turntable looks{' '}
          <span className="highlight-prepositions">like</span>{' '}
          <span className="highlight-pronouns">this</span>;
        </p>

        <figure className="wp-block-image">
          <a href="/images/P1450251.jpg" target="_blank">
            <img src="/images/P1450251.jpg" alt="Internal layout" />
          </a>
        </figure>

        <div className="wp-block-embed__wrapper">
          <iframe src="https://player.vimeo.com/video/88736632" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
          <p>I Ching Turntable Fully Operational from George Haworth on Vimeo.</p>
        </div>

        <p><strong>Materials Used</strong></p>

        <ul>
          <li>1x Direct Drive Turntable (heavily gutted).</li>
          <li>1x Arduino Uno.</li>
          <li>1x TellyMate Shield.</li>
          <li>1x Raspberry Pi Model A (<span className="highlight-prepositions">with</span> 4GB SD card).</li>
          <li>1x Mini Breadboard.</li>
          <li>1x CRT Monitor.</li>
          <li>1x LCD Monitor.</li>
          <li>1x USB Cable (<span className="highlight-prepositions">to</span> connect Arduino{' '}
            <span className="highlight-prepositions">to</span> Raspberry Pi).</li>
          <li>1x USB extension cable (<span className="highlight-prepositions">to</span> connect Raspberry Pi{' '}
            <span className="highlight-prepositions">to</span> keyboard{' '}
            <span className="highlight-conjunctions">and</span> mouse{' '}
            <span className="highlight-pronouns">when</span> the casing is closed)</li>
          <li>1x RCA <span className="highlight-prepositions">to</span> mono-jack cable{' '}
            (<span className="highlight-prepositions">to</span> connect TellyMate shield{' '}
            <span className="highlight-prepositions">to</span> CRT monitor).</li>
          <li>HDMI cable (<span className="highlight-prepositions">to</span> connect Raspberry Pi{' '}
            <span className="highlight-prepositions">to</span> LCD monitor).</li>
          <li>Blackberry Mini-USB charger.</li>
          <li>Rotary encoder (notched <span className="highlight-prepositions">with</span> push button).</li>
          <li>3x 10k Ohm resistors</li>
          <li>1x LM386 amplifier chip</li>
          <li>1x 220 uF capacitor</li>
          <li>1x 10 uF capacitor</li>
          <li>1x 0.1 uF capacitor</li>
          <li>1x Potentiometer.</li>
          <li>A whole bunch <span className="highlight-prepositions">of</span> jumper cables{' '}
            <span className="highlight-conjunctions">and</span> wires.</li>
          <li>2x plastic casings (i.e. half a Ferrero Rocher box){' '}
            <span className="highlight-conjunctions">and</span> elastic bands{' '}
            <span className="highlight-prepositions">to</span> hold{' '}
            <span className="highlight-pronouns">them</span>{' '}
            <span className="highlight-prepositions">on</span>.</li>
        </ul>

        <figure className="wp-block-image">
          <a href="/images/wen-mandala-8-bw.jpg" target="_blank">
            <img src="/images/wen-mandala-8-bw.jpg" alt="Mandala derived from King Wen sequence" />
          </a>
          <figcaption>
            (Figure 2: Mandala geometrically derived <span className="highlight-prepositions">from</span> the King Wen sequence.)
          </figcaption>
        </figure>

        <p><strong>A Plan <span className="highlight-prepositions">for</span> Further Work</strong></p>

        <p>
          Think <span className="highlight-prepositions">of</span> the stereotypical image{' '}
          <span className="highlight-prepositions">of</span> the man{' '}
          <span className="highlight-conjunctions">or</span> woman{' '}
          <span className="highlight-prepositions">in</span> search{' '}
          <span className="highlight-prepositions">of</span> truth traveling{' '}
          <span className="highlight-prepositions">to</span> the top{' '}
          <span className="highlight-prepositions">of</span> a mountain{' '}
          <span className="highlight-prepositions">in</span> a far away land{' '}
          <span className="highlight-prepositions">to</span> consult a wise old sage{' '}
          <span className="highlight-pronouns">who</span> is always available{' '}
          <span className="highlight-conjunctions">and</span> knows the answer{' '}
          <span className="highlight-prepositions">to</span>{' '}
          <span className="highlight-pronouns">your</span> question{' '}
          <span className="highlight-prepositions">before</span>{' '}
          <span className="highlight-pronouns">you</span>&rsquo;ve asked{' '}
          <span className="highlight-pronouns">it</span>.{' '}
          <span className="highlight-pronouns">This</span> can be achieved{' '}
          <span className="highlight-prepositions">through</span> the magic{' '}
          <span className="highlight-prepositions">of</span> physical computing! Here&rsquo;s how;
        </p>

        <figure className="wp-block-image">
          <a href="/images/tdc_fig_04.jpg" target="_blank">
            <img src="/images/tdc_fig_04.jpg" alt="Germanium TDC Receptor" />
          </a>
          <figcaption>(Figure 4: Germanium TDC Receptor)</figcaption>
        </figure>

        <figure className="wp-block-image">
          <a href="/images/LM386ampschematic.jpg" target="_blank">
            <img src="/images/LM386ampschematic.jpg" alt="LM386 amplifier chip schematic" />
          </a>
          <figcaption>(Figure 5: LM386 amplifier chip schematic)</figcaption>
        </figure>

        <figure className="wp-block-image">
          <a href="/images/tdcrx.jpg" target="_blank">
            <img src="/images/tdcrx.jpg" alt="Overview of system" />
          </a>
          <figcaption>(Figure 6: Overview <span className="highlight-prepositions">of</span> system)</figcaption>
        </figure>

        <figure className="wp-block-image">
          <a href="/images/timewave-theory-king-wen-sequence-hexagrams-iching.jpg" target="_blank">
            <img src="/images/timewave-theory-king-wen-sequence-hexagrams-iching.jpg" alt="The King Wen Sequence" />
          </a>
          <figcaption>(Figure 7: The King Wen Sequence)</figcaption>
        </figure>

        <figure className="wp-block-image">
          <a href="/images/8x8plasmatest.jpg" target="_blank">
            <img src="/images/8x8plasmatest.jpg" alt="8x8 LED matrix test" />
          </a>
        </figure>

        <figure className="wp-block-image">
          <a href="/images/thermistor_bb.jpg" target="_blank">
            <img src="/images/thermistor_bb.jpg" alt="Posistor with 555 timer chip test setup" />
          </a>
          <figcaption>(Figure 8: Posistor (PTC) <span className="highlight-prepositions">with</span> 555 timer chip test setup, breadboard view)</figcaption>
        </figure>

        <figure className="wp-block-image">
          <a href="/images/1119859_10153100854565632_436747754_o.jpg" target="_blank">
            <img src="/images/1119859_10153100854565632_436747754_o.jpg" alt="On Holy Island" />
          </a>
        </figure>

        <p>
          <span className="highlight-pronouns">This</span> is essentially a minimal{' '}
          <span className="highlight-conjunctions">and</span> ultra-robust version{' '}
          <span className="highlight-prepositions">of</span> the basic idea{' '}
          <span className="highlight-prepositions">behind</span> the I Ching turntable, designed{' '}
          <span className="highlight-prepositions">to</span> be installed outdoors{' '}
          <span className="highlight-prepositions">in</span> a remote mountaintop location{' '}
          <span className="highlight-prepositions">without</span> an electricity supply.
        </p>

        <p><strong>References (not previously quoted)</strong></p>

        <ul>
          <li>– The I Ching text was the Richard Wilhelm Translation (1950) taken <span className="highlight-prepositions">from</span>; http://deoxy.org/iching</li>
          <li>– Special thanks <span className="highlight-prepositions">to</span> my girlfriends mate Shelly{' '}
            <span className="highlight-pronouns">who</span> kindly gave me the Raspberry Pi{' '}
            <span className="highlight-prepositions">in</span> return{' '}
            <span className="highlight-prepositions">for</span> me DJing{' '}
            <span className="highlight-prepositions">at</span> a party{' '}
            <span className="highlight-prepositions">for</span> her. Nice one</li>
        </ul>
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

        <p>
          The system is listening <span className="highlight-prepositions">for</span> electromagnetic energy being emitted{' '}
          <span className="highlight-prepositions">from</span> various electronic devices{' '}
          <span className="highlight-prepositions">in</span> the local environment. Sometimes, an electrical device{' '}
          that has the potential <span className="highlight-prepositions">to</span> give{' '}
          <span className="highlight-prepositions">off</span> EMI is shielded{' '}
          <span className="highlight-prepositions">to</span> prevent interference{' '}
          <span className="highlight-prepositions">from</span> escaping; however a great many devices{' '}
          that emit EMI are shielded very lightly{' '}
          <span className="highlight-conjunctions">or</span> not{' '}
          <span className="highlight-prepositions">at</span> all.
        </p>

        <p>
          One unexpected autotrophic element <span className="highlight-prepositions">of</span>{' '}
          <span className="highlight-pronouns">this</span> system became apparent{' '}
          <span className="highlight-pronouns">when</span> I later added a servo motor right next{' '}
          <span className="highlight-prepositions">to</span> the wire antenna{' '}
          <span className="highlight-prepositions">of</span> the EMI detector. The values being read{' '}
          <span className="highlight-prepositions">by</span> the EMI detector determine{' '}
          <span className="highlight-pronouns">whether</span>{' '}
          <span className="highlight-conjunctions">or</span> not the servo should move,{' '}
          <span className="highlight-conjunctions">and</span>{' '}
          <span className="highlight-pronouns">if</span> so{' '}
          <span className="highlight-pronouns">where</span>. But every time the servo motor moves{' '}
          <span className="highlight-pronouns">this</span> creates a clearly perceptible change{' '}
          <span className="highlight-prepositions">in</span> the EMI detected,{' '}
          <span className="highlight-pronouns">this</span> was apparent{' '}
          <span className="highlight-prepositions">by</span> either looking{' '}
          <span className="highlight-prepositions">at</span> the values being read{' '}
          <span className="highlight-prepositions">by</span> the analogue pin{' '}
          <span className="highlight-prepositions">on</span> Arduino 1,{' '}
          <span className="highlight-conjunctions">or</span> just listening{' '}
          <span className="highlight-prepositions">to</span> the tone being generated{' '}
          <span className="highlight-prepositions">out</span>{' '}
          <span className="highlight-prepositions">of</span> digital pin 11{' '}
          <span className="highlight-prepositions">on</span> Arduino 1 (see figures 5{' '}
          <span className="highlight-conjunctions">and</span> 6), using the code below;
        </p>

        <pre><code>{`void loop() {

  int analIP = analogRead(aPiNoise);
  showDiag=0;
  if (minNoise>analIP) { minNoise=analIP; showDiag=0; }    
  if (maxNoise<analIP) { maxNoise=analIP; showDiag=0; }    
  if (opct < 1050 && showDiag) {     Serial.print(" no: "); Serial.print(minNoise); Serial.print(" "); Serial.print(maxNoise);     if (++opct % 12 != 0) Serial.print(" "); else Serial.println("");   }   if (abs(currAnal-analIP)>10) {
    currAnal=analIP;
    totAnal += currAnal;
    
    if (muteState) 
      noTone(spkrPin);
    else
      tone(spkrPin, map(currAnal, minNoise, maxNoise, 30, 10000), 200);  // pin, Hz, mS

  }`}</code></pre>

        <figure className="wp-block-image">
          <a href="/images/speaker_bb.jpg" target="_blank">
            <img src="/images/speaker_bb.jpg" alt="Speaker and amplifier breadboard view" />
          </a>
          <figcaption>(Figure 5: Speaker <span className="highlight-conjunctions">and</span> amplifier, breadboard view. Signal amplified <span className="highlight-prepositions">with</span> LM386 amplifier chip.)</figcaption>
        </figure>

        <figure className="wp-block-image">
          <a href="/images/LM386ampschematic.jpg" target="_blank">
            <img src="/images/LM386ampschematic.jpg" alt="Speaker and amplifier schematic view" />
          </a>
          <figcaption>(Figure 6: Speaker <span className="highlight-conjunctions">and</span> amplifier, schematic view. Signal amplified <span className="highlight-prepositions">with</span> LM386 amplifier chip.)</figcaption>
        </figure>

        <p>
          The EMI values being read <span className="highlight-prepositions">by</span> Arduino 1{' '}
          <span className="highlight-prepositions">on</span> analogue pin 5 are used{' '}
          <span className="highlight-prepositions">to</span> generate the lines{' '}
          (<span className="highlight-conjunctions">or</span> yao){' '}
          <span className="highlight-prepositions">of</span> an I Ching hexagram.{' '}
          <span className="highlight-prepositions">Before</span> I explain how{' '}
          <span className="highlight-pronouns">this</span> is done, I will first describe one{' '}
          <span className="highlight-prepositions">of</span> the traditional methods{' '}
          <span className="highlight-prepositions">for</span> casting the I Ching; the throwing{' '}
          <span className="highlight-prepositions">of</span> three coins. The lines{' '}
          <span className="highlight-prepositions">of</span> an I Ching hexagram are either;
        </p>

        <ul>
          <li>Old Yin (—X—)</li>
          <li>Young Yang (———)</li>
          <li>Young Yin (— —)</li>
          <li>Old Yang (—θ—)</li>
        </ul>

        <p>
          <span className="highlight-prepositions">For</span> the three coins method,{' '}
          <span className="highlight-pronouns">we</span> give the lines the following values;
        </p>

        <ul>
          <li>6 = Old Yin (—X—)</li>
          <li>7 = Young Yang (———)</li>
          <li>8 = Young Yin (— —)</li>
          <li>9 = Old Yang (—θ—)</li>
        </ul>

        <p>
          <span className="highlight-conjunctions">And</span>{' '}
          <span className="highlight-pronouns">we</span> say that a tails = 2,{' '}
          <span className="highlight-conjunctions">and</span> heads = 3. Then{' '}
          <span className="highlight-pronouns">when</span> throwing three coins;
        </p>

        <ul>
          <li>Three tails = 6 = Old Yin (—X—)</li>
          <li>Two tails <span className="highlight-conjunctions">and</span> one head = 7 = Young Yang (———)</li>
          <li>Two heads <span className="highlight-conjunctions">and</span> one tail = 8 = Young Yin (— —)</li>
          <li>Three heads = 9 = Old Yang (—θ—)</li>
        </ul>

        <p>
          Thus there is a 1/8 chance <span className="highlight-prepositions">of</span> throwing a 6,{' '}
          a 1/8 chance <span className="highlight-prepositions">of</span> throwing a 9,{' '}
          a 3/8 chance <span className="highlight-prepositions">of</span> throwing a 7,{' '}
          <span className="highlight-conjunctions">and</span> a 3/8 chance{' '}
          <span className="highlight-prepositions">of</span> throwing an 8.
        </p>

        <p>
          <span className="highlight-pronouns">What</span>{' '}
          <span className="highlight-pronouns">we</span> have streaming{' '}
          <span className="highlight-prepositions">from</span>{' '}
          <span className="highlight-pronouns">our</span> EMI detector is a constant flow{' '}
          <span className="highlight-prepositions">of</span> noise data (values{' '}
          <span className="highlight-prepositions">between</span> 0{' '}
          <span className="highlight-conjunctions">and</span> 1023).{' '}
          <span className="highlight-prepositions">To</span> replicate the throwing{' '}
          <span className="highlight-prepositions">of</span> three coins{' '}
          <span className="highlight-pronouns">we</span> take the values being read{' '}
          <span className="highlight-prepositions">by</span> the EMI detector{' '}
          <span className="highlight-conjunctions">and</span> sum them every time the value changes{' '}
          <span className="highlight-prepositions">by</span> 10{' '}
          <span className="highlight-conjunctions">or</span> more.
        </p>

        <figure className="wp-block-image">
          <a href="/images/timewave-theory-king-wen-sequence-hexagrams-iching.jpg" target="_blank">
            <img src="/images/timewave-theory-king-wen-sequence-hexagrams-iching.jpg" alt="King Wen Sequence" />
          </a>
          <figcaption>(Figure 9: The King Wen Sequence. Source; http://fractalenlightenment.com/14061/enlightening-video/mckenna-and-bradens-fractal-nature-of-time)</figcaption>
        </figure>

        <figure className="wp-block-image">
          <a href="/images/145139.jpg" target="_blank">
            <img src="/images/145139.jpg" alt="Project setup photo 1" />
          </a>
        </figure>

        <figure className="wp-block-image">
          <a href="/images/145140.jpg" target="_blank">
            <img src="/images/145140.jpg" alt="Project setup photo 2" />
          </a>
        </figure>

        <figure className="wp-block-image">
          <a href="/images/145142.jpg" target="_blank">
            <img src="/images/145142.jpg" alt="Project setup photo 3" />
          </a>
        </figure>

        <figure className="wp-block-image">
          <a href="/images/145143.jpg" target="_blank">
            <img src="/images/145143.jpg" alt="Project setup photo 4" />
          </a>
        </figure>

        <div className="wp-block-embed__wrapper">
          <iframe src="https://player.vimeo.com/video/92886069" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
          <p>Workshops In Creative Coding 2 Project Demo from George Haworth on Vimeo.</p>
        </div>

        <p>
          The great work continues&hellip;
        </p>

        <p><strong>Source Code</strong></p>

        <ul>
          <li>Arduino sketch running <span className="highlight-prepositions">on</span> Arduino 1 is found here.</li>
          <li>Arduino sketch running <span className="highlight-prepositions">on</span> Arduino 2 is found here.</li>
          <li>Processing sketch running <span className="highlight-prepositions">on</span> Beagleboard xM is found here.</li>
          <li>Processing sketch running <span className="highlight-prepositions">on</span> PC is found here.</li>
        </ul>

        <p><strong>References <span className="highlight-conjunctions">and</span> Acknowledgements</strong></p>

        <ul>
          <li>&lsquo;Talysis II, Autotrophs&rsquo; <span className="highlight-prepositions">by</span> Paul Prudence taken <span className="highlight-prepositions">from</span> the book &lsquo;Generative Design&rsquo; <span className="highlight-prepositions">by</span> Bohnacker et al. (page 104-107).</li>
          <li>EMI detector idea taken <span className="highlight-prepositions">from</span> &lsquo;Environmental Monitoring <span className="highlight-prepositions">with</span> Arduino: Building Simple Devices <span className="highlight-prepositions">to</span> Collect Data <span className="highlight-prepositions">About</span> the World <span className="highlight-prepositions">Around</span> Us&rsquo; <span className="highlight-prepositions">by</span> Gertz et al. (Chapter 4.)</li>
          <li>Values <span className="highlight-prepositions">for</span> Temporal Flux taken <span className="highlight-prepositions">from</span> &lsquo;The Invisible Landscape&rsquo; <span className="highlight-prepositions">by</span> Terence McKenna (pages 162-163), a full derivation <span className="highlight-prepositions">of</span> <span className="highlight-pronouns">these</span> values is explained <span className="highlight-prepositions">in</span> Chapter 10.</li>
          <li>Idea <span className="highlight-prepositions">for</span> homemade opto-isolator taken <span className="highlight-prepositions">from</span> &lsquo;Handmade Electronic Music&rsquo; <span className="highlight-prepositions">by</span> Nicolas Collins. Page 181. (My favourite book <span className="highlight-prepositions">at</span> the moment!).</li>
          <li>Fractal idea adapted <span className="highlight-prepositions">from</span>; http://glsl.heroku.com/e#16063.0, <span className="highlight-conjunctions">and</span> inspired <span className="highlight-prepositions">by</span> http://www.fractalforums.com/new-theories-and-research/very-simple-formula-for-fractal-patterns/</li>
          <li>Breadboard diagrams created using Fritzing.</li>
          <li>Project title <span className="highlight-prepositions">from</span> &lsquo;Finnegans Wake&rsquo; <span className="highlight-prepositions">by</span> James Joyce.</li>
        </ul>
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