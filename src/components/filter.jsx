import React from "react";
import { useState, useEffect} from "react";
import ProjectThumbnail from "./projectCard";
import { Row, Container, Col } from "react-bootstrap";
import barbie from "../assets/barbie.png";

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
            {"title": "Proyecto 1", "description": "Este es el proyecto 1", "img": "https://www.ceupe.com.ve/images/easyblog_articles/230/ges_proyec.png"},
            {"title": "Barbie", "description": "Hola como estamos", "img": "https://www.ceupe.com.ve/images/easyblog_articles/230/ges_proyec.png"},
            {"title": "Alimentando Barbies mediante IA", "description": "Grupo Barbiefascistas", "img": barbie},
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
                        <Row>
                            <Col className="col-md-auto">
                                <h3>Ingrese para buscar:</h3>
                            </Col>
                            <Col className="col-sm-2">
                            <div class="form">
                              <i class="fa fa-search"></i>
                              <input
                               type="text"
                               class="form-control form-input"
                               placeholder="Buscar"
                               value={searchQuery}
                               onChange={(e) => setSearchQuery(e.target.value)}/>
                            </div>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <Row xs={1} md={3} className="g-4">
                    {Array.from(search(data)).map((item) => (
                        <Col>
                        <ProjectThumbnail title={item.title} description={item.description} img={item.img}/>
                        </Col>
                    ))}
                    </Row>
                </Row>
            </Container>
        );
    }
};

export default Filter;