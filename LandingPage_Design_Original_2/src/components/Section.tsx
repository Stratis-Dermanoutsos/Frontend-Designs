// Official (components | stylesheets)
import React from 'react';
import { Container } from 'react-bootstrap';

// My components
import About from './About';
import Home from './Home';
import SectionType from './SectionType';
import Services from './Services';

function Section({ section }: { section?: SectionType }) {
    return (
        <div className="text-dark" id="section">
            <div className="box" id={section?.split(' ').join('-').toLowerCase()}>
                <Container>
                    {(() => {
                        switch (section) {
                            case 'HOME': return <Home />;
                            case 'SERVICES': return <Services />;
                            case 'ABOUT US': return <About />;
                            default: return <p>No section.</p>;
                        }
                    })()}
                </Container>
            </div>
        </div>
    )
}

export default Section;