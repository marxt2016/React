import { apiUrlFilms } from "./utils";
import { useState, useEffect } from 'react';
import { ListGroup, Button, Alert, Spinner, CardGroup, Card, Row, Col } from 'react-bootstrap';


export const Films = () => {
    const [films, setFilms] = useState([]);

    const getFilms = async () => {
        try {
            const response = await fetch(apiUrlFilms);
            if (!response.ok) {
                throw new Error('Something went wrong')
            }
            const result = await response.json();

            console.log(result.Search);
            setFilms(result.Search);
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getFilms();
    }, []);

    return (
        <>
            <div className='cards-container App'>
                <Row xs={2} md={4} className="g-4">
                    {Array.from({ length: 2 }).map((_, idx) => (
                        <>
                            {films.map((film) => (
                                <Col>
                                    <Card>
                                        <Card.Img className='card-img' variant="top" src={film.Poster} />
                                        <Card.Body className='card-title'>
                                            <Card.Title >{film.Title}</Card.Title>
                                            <Card.Text className='card-text'>
                                                This is a longer card with supporting text below as a natura
                                            </Card.Text>
                                        </Card.Body>

                                        <Card.Footer>
                                            <small className="text-muted">{film.Year}</small>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            ))
                            }
                        </>
                    ))}
                </Row>
            </div>
        </>
    )
}