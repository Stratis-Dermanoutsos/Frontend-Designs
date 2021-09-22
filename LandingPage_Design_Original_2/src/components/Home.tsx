// Official (components | stylesheets)
import React from 'react';

// Stylesheets
import '../stylesheets/Home.css';

function Home() {
    const loremIpsum = require("lorem-ipsum").loremIpsum;

    const ipsum = loremIpsum({
        count: 3,                // Number of "words", "sentences", or "paragraphs"
        format: "plain",         // "plain" or "html"
        paragraphLowerBound: 3,  // Min. number of sentences per paragraph.
        paragraphUpperBound: 7,  // Max. number of sentences per paragarph.
        random: Math.random,     // A PRNG function
        sentenceLowerBound: 5,   // Min. number of words per sentence.
        sentenceUpperBound: 15,  // Max. number of words per sentence.
        suffix: "\n",            // Line ending, defaults to "\n" or "\r\n" (win32)
        units: "paragraphs"      // paragraph(s), "sentence(s)", or "word(s)"
    });

    return (
        <div className="text-white">
            <h1 className="invisible">Home</h1> {/* Anchor link */}
            <h1 className="my-5 pt-5">STARTUP 1</h1>
            <p>{ipsum}</p>
        </div>
    )
}

export default Home;