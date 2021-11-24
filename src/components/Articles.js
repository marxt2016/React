import { ListGroup, Button, Alert, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {
    selectArticlesError,
    selectArticlesList,
    selectArticlesLoading,
} from "../store/articles/selectors";
import { getArticles } from "../store/articles/actions";
import React, { useEffect } from "react";

export const Articles = () => {
    const dispatch = useDispatch();
    const articles = useSelector(selectArticlesList);
    const loading = useSelector(selectArticlesLoading);
    const error = useSelector(selectArticlesError);

    const requestArticles = async () => {
        dispatch(getArticles());
    };

    useEffect(() => {
        requestArticles();
    }, []);

    return (
        <>
            <div className='mb-2 App'>

                <h2 className='mb-2 App'>Articles</h2>
                {loading ?
                    (< Spinner className='mb-2' animation="border" variant="primary" />) :
                    (<>
                        <Button className='mb-2 reload' onClick={requestArticles}>Reload</Button>
                        {error &&
                            < Alert variant="danger" className="reload">
                                <Alert.Heading>  <span>Error</span></Alert.Heading>
                            </Alert>
                        }
                        <ListGroup className='mb-2' >
                            {articles.map((article) => (
                                < ListGroup.Item key={article.id} action variant="primary" >
                                    {article.title}
                                </ListGroup.Item>
                            ))
                            }
                        </ListGroup>
                    </>)
                }
            </div>
        </>
    );
};

