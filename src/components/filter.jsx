import React from "react";
import { useState, useEffect} from "react";
import ProjectThumbnail from "./projectCard";
import { Row, Container, Col } from "react-bootstrap";
import barbie from "../assets/barbie.png";

import '../stylesheets/filter/filter.css';

export const Filter = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // set search query to empty string
    const [searchQuery, setSearchQuery] = useState("");

    // set search parameters to title and description
    const [searchParameters] = useState(["title", "description"]);

    useEffect(() => {
        setIsLoaded(true);
        setItems([
            {"title": "Robotron Ayudón", "description": "Robot que realiza ayudantías", "img": "https://openexpoeurope.com/wp-content/uploads/2019/04/IA-PLATAFORMAS-OS.jpg", "en" : true},
            {"title": "Max estilos", "description": "IA que ayuda a elegir outfits", "img": "https://images.milenio.com/WDS1VczduXBZlXc3at7_RahPD8U=/618x0/uploads/media/2023/07/11/ia-revela-muneco-ken-harry.jpeg", "en" : true},
            {"title": "Alimentando IA con barbies", "description": "Grupo Barbies", "img": barbie, "en" : false},
        ]); 
    }, []);
    
    const data = Object.values(items);

    function search(items) {
        return items.filter((item) => {
            return searchParameters.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(searchQuery.toLowerCase()) > -1
                );
            });
        });
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }else {
        return (
            <Container >
                <Row>
                    <Container>
                        <Row className="justify-content-center" style={{ marginTop: '1rem' }}>
                            <Col className="col-sm-6">  
                            <div className="form">
                              <i class="fa fa-search"></i>
                              <input
                               cl
                               type="text"
                               className="form-control form-input bg-celeste-input"
                               placeholder="Busca un proyecto"
                               value={searchQuery}
                               onChange={(e) => setSearchQuery(e.target.value)}/>
                            </div>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <Row xs={1} md={3} className="g-4 ">
                    {Array.from(search(data)).map((item) => (
                        <Col>
                        <ProjectThumbnail title={item.title} description={item.description} img={item.img} en={item.en}/>
                        </Col>
                    ))}
                    </Row>
                </Row>
            </Container>
        );
    }
};

export default Filter;