import { useEffect, useState } from "react";

import { ListGroup, Alert, Spinner, Button } from 'react-bootstrap';
import React, { Fragment } from "react";


export const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const requestArticles = async () => {

    }

    useEffect(() => {
        requestArticles();
    }, [])
    return (
        <>
            <div className='mb-2 App'>
                <h2 className='mb-2 App'>Articles</h2>
                {loading ?
                    (< Spinner className='mb-2' animation="border" variant="primary" />) :
                    (<>
                        <Button className='reload' onClick={requestArticles}>Reload</Button>
                        {error &&
                            < Alert variant="danger" className="App">
                                <Alert.Heading>  <span>Error</span></Alert.Heading>
                            </Alert>
                        }
                        <ListGroup className='mt-2 mb-2' >
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
    )

}