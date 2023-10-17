import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const ProjectThumbnail = ({title, description, img}) => {
    return (
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
                <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Ver Proyecto</Button>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
    );
}

export default ProjectThumbnail;