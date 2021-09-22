// Official (components | stylesheets)
import React, { useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

// My components
import SectionType from './SectionType';
import logo from '../Images/Logo.png';

// Stylesheets
import '../stylesheets/Navbar.css';
import { ImportsNotUsedAsValues } from 'typescript';

function activateItemByKey(key: string): void {
    document.querySelector(`[data-rr-ui-event-key="#${key}"]`)?.classList.add('active');
}

function deactivateItemByKey(key: string): void {
    document.querySelector(`[data-rr-ui-event-key="#${key}"]`)?.classList.remove('active');
}

function handleActiveItem(key: string): void {
    Object.values(SectionType).forEach((section: SectionType) => {
        const val = section?.split(' ').join('-').toLowerCase()

        if (val === key)
            activateItemByKey(val);
        else
            deactivateItemByKey(val);
    });
}

function MyNavbar() {
    // Change active item based on scroll
    useEffect(() => {
        document.addEventListener("scroll", e => {
            let windowHeight = window.innerHeight;
            let scrolled = document?.scrollingElement?.scrollTop || 0;

            if (scrolled <= windowHeight - 100)
                handleActiveItem('home');
            else if (scrolled <= windowHeight * 2 - 100)
                handleActiveItem('services');
            else
                handleActiveItem('about-us');
        })
    }, [])

    return (
        <Navbar className="fixed-top px-4" bg="white" expand="lg" onScroll={(e) => console.log("scrolling!", e.currentTarget.scrollTop)}>
            <Navbar.Brand href="#home">
                <img src={logo} alt="Startup 1" width="48" height="48" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    {Object.values(SectionType).map(sectionType => 
                        <NavbarItem key={sectionType} sectionType={sectionType} />
                        )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

function NavbarItem({ sectionType }: { sectionType: string }) {
    return ( sectionType === 'HOME' ?
        <Nav.Link className="active mx-1 rounded px-3" href={'#' + sectionType?.split(' ').join('-').toLowerCase()}>{sectionType}</Nav.Link>
        :
        <Nav.Link className="mx-1 rounded px-3" href={'#' + sectionType?.split(' ').join('-').toLowerCase()}>{sectionType}</Nav.Link>
    )
}

export default MyNavbar;