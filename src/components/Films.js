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
    //const [films, setFilms] = useState([]);
    const dispatch = useDispatch();
    const films = useSelector((state) => {
        console.log(state);
    });

    // const loading = useSelector(selectArticlesLoading);
    // const error = useSelector(selectArticlesError);

    const requestFilms = async () => {
        dispatch(getFilms());
    };


    const getFilms = async () => {
        try {
            const response = await fetch(apiUrlFilms);
            if (!response.ok) {
                throw new Error('Something went wrong')
            }
            const result = await response.json();

            console.log(result.Search);
            //setFilms(result.Search);
            dispatch(getFilms());
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
            <h2 className='mb-2 App'>Films list</h2>
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