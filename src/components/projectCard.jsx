import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ProjectThumbnail = ({title, description, img}) => {
    return (
        <Card border="dark" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary" href={"/project/"+title}>Ver Proyecto</Button>
            </Card.Body>
        </Card>
    );
}

export default ProjectThumbnail;