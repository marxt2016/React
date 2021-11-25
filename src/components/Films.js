import { apiUrlFilms } from "./utils";
import { useState, useEffect } from 'react';
import { ListGroup, Button, Alert, Spinner, CardGroup, Card, Row, Col } from 'react-bootstrap';
import { getFilms } from "../store/films/actions";
import { useDispatch, useSelector } from "react-redux";
import {
    selectFilmsError,
    selectFilmsList,
    selectFilmsLoading,
} from "../store/films/selectors";


export const Films = () => {
    const dispatch = useDispatch();
    const films = useSelector(selectFilmsList);
    const loading = useSelector(selectFilmsLoading);
    const error = useSelector(selectFilmsError);

    const requestFilms = async () => {
        dispatch(getFilms());
    };



    useEffect(() => {
        requestFilms();
    }, []);

    return (
        <>
            <h2 className='mb-2 App'>Films list</h2>
            <Button className='mb-2 cards-container' onClick={requestFilms}>Reload</Button>
            {loading ?
                (< Spinner className='mb-2 cards-container' animation="border" variant="primary" />) :

                (<>
                    {error &&
                        < Alert variant="danger" className="App">
                            <Alert.Heading>  <span>Error</span></Alert.Heading>
                        </Alert>
                    }
                    <div className='cards-container App' >
                        <Row xs={2} md={4} className="g-4">
                            {Array.from({ length: 2 }).map((_, idx) => (
                                <>
                                    {films.map((film) => (
                                        <Col key={film.id} >
                                            <Card className='card-container'>
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
                </>)
            }
        </>
    )
}