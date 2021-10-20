import React from 'react';
import { Navbar, Form, Button, Nav } from 'react-bootstrap';

const logout = () => {
    //cookies.remove('user', {path: '/'});
    //cookies.remove('token', {path: '/'});
    window.location.href = './login';
}

const  isInImages = window.location.pathname.match('/images');


//mover el loguot a la derecha
export const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" style = {{justifyContent:'space-between'}}>
            <Navbar.Brand style={{marginLeft:'20px'}} href="/">React FrontEnd Demo</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link className={(isInImages) ? "active" : ""} href="/images">Images</Nav.Link>
            <Nav.Link className={!isInImages ? "active" : ""} href="/DataGrid">Posts</Nav.Link>

            </Nav>
            <Form inline>
                <Button variant="outline-info" style={{marginRight:'20px'}} onClick={logout}>Logout</Button>
            </Form>
        </Navbar>
    )
}