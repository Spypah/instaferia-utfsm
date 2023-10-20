import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

import '../stylesheets/components/button.css';

export const ProjectThumbnail = ({title, description, img, en}) => {
    return (
        <Card border="dark" style={{ height: '20rem', margin: '2rem'}}>
            <Card.Img variant="top" src={img} style={{width:'100%', height:'10vw', objectFit:'cover'}} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <div className="contenedor-boton">
                        <Button className='my-btn' 
                        variant="primary" href={"/project/"+title} 
                        disabled={en}
                        >Ver Proyecto</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProjectThumbnail;