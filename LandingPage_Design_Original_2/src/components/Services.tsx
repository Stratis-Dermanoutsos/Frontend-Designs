// Official (components | stylesheets)
import React from 'react';
import { Card } from 'react-bootstrap';

// Stylesheets
import '../stylesheets/Services.css';

function Services() {
    // Hardcoded data, but it's a demo. It's easy to use an API instead
    const services: Service[] = [
        {
            title: 'Service 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, amet, amet, odio amet, fermentum fermentum aliquam posuere. Pellentesque ultrices diam at pellentesque ac et integer bibendum. Pharetra, odio turpis viverra cras morbi.',
            price: 40
        },
        {
            title: 'Service 2',
            description: 'Consectetur adipiscing elit. Nisi, amet, amet, odio amet, fermentum fermentum aliquam posuere. Pellentesque ultrices diam at pellentesque ac et integer bibendum. Pharetra, odio turpis viverra cras morbi.',
            price: 50
        },
        {
            title: 'Service 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, amet, amet, odio amet, fermentum fermentum aliquam posuere. Pellentesque ultrices diam at pellentesque ac et integer bibendum.',
            price: 80
        },
        {
            title: 'Service 4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, amet, amet, odio amet, fermentum fermentum aliquam posuere. Pellentesque ultrices diam at pellentesque ac et integer bibendum. Pharetra, odio turpis viverra cras morbi.',
            price: 60
        },
        {
            title: 'Service 5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, amet, amet, odio amet, fermentum fermentum aliquam posuere. Pellentesque ultrices diam at pellentesque ac et integer bibendum. Pharetra, odio turpis viverra cras morbi.',
            price: 150
        },
        {
            title: 'Service 6',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, amet, amet, odio amet, fermentum fermentum aliquam posuere. Pellentesque ultrices diam at pellentesque ac et integer bibendum. Pharetra, odio turpis viverra cras morbi.',
            price: 100
        },
    ]

    return (
        <div>
            <div className="custom-shape-divider-top-1631786251">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity={.5} className="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
            </div>
            <h1 className="invisible">services</h1> {/* Anchor link */}
            <div className="col-12 row pt-5 serviceContainer">
                {services.map(service => {
                    return <ServiceCard key={service.title} service={service} />;
                })}
            </div>
        </div>
    )
}

interface Service {
    title: string;
    description: string;
    price: number;
}

function ServiceCard({ service }: { service: Service }) {
    const description = service.description.length < 215 ? service.description : service.description.substring(0, 212) + '...';
    const price = '$' + service.price.toFixed(2);

    return (
        <a className="mb-5 mx-auto serviceCard text-dark text-decoration-none" href="#">
            <Card>
                <Card.Body>
                    <Card.Title className="text-center text-truncate">{service.title}</Card.Title>
                    <hr />
                    <Card.Text>{description}</Card.Text>
                    <Card.Subtitle className="text-muted text-end">{price}</Card.Subtitle>
                </Card.Body>
            </Card>
        </a>
    );
}

export default Services;