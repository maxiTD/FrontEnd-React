import React, {Component, useEffect, useState} from 'react';
import { Card, Row, Col, CardGroup } from 'react-bootstrap';
import { NavigationBar } from './ui/NavigationBar';
import { Paginate } from './ui/Pagination';
import { getImages } from '../helpers/images.service';
import { tokenRenew } from '../helpers/token.service';



/*
const chekToken = () => {
    
    const activeToken = localStorage.getItem('token');

    const [token, settoken] = useState(activeToken);

    const newToken = async(tkn) => {
        return await tokenRenew(tkn);
    }

    useEffect(() => {
        newToken(activeToken);
    }, [])
    console.log(activeToken);
    console.log(token);
    //if (tokenValid(token))
    return token
}
chekToken();*/
const token = localStorage.getItem('token');

const pageSize = 10


export const DataImg = () => {
    
    const [pageNumber, setpageNumber] = useState(0);
    const [images, setimages] = useState([]);
    const [totalPages, settotalPages] = useState(1);

    const setPage = async(pageNumber) => {
        const result = await getImages(pageNumber, pageSize, token);
        console.log(result);
        settotalPages(result.totalPages);
        setimages(result.data);
        console.log(totalPages);
        console.log(images);
    }

    useEffect(() => {
        setpageNumber(pageNumber);
        setPage(pageNumber);
        /*
            if (images.length == 0) {
                const result = await getImages(pageNumber, pageSize, token);
                settotalPages(result.totalPages);
                setimages(result.data);
            }*/
    }, [])
        
    const paginate = pageNumber => setPage(pageNumber);
    
    console.log(totalPages);
    console.log(images);
    
    return (
        <>
        <NavigationBar />

        <div className="content">
            <CardGroup>
                <Row key={1} xs={2} md={4} lg={6} style = {{justifyContent:'center'}}>
                {images.map(image => 
                    <Card key={image.id} style={{ margin: '10px' }}>
                    <Card.Img variant="top" src={image.url} />
                        <Card.Body>
                            <Card.Title>{image.title}</Card.Title>
                        </Card.Body>
                    </Card>
                )}
                </Row>
            </CardGroup>

            <Row key={2}>
                <Col xs={{size:4, offset:4}}>
                    <Paginate totalPages={totalPages} paginate={paginate} selected={pageNumber}></Paginate>
                    </Col>
            </Row>
    </div>
        </>
    )
};