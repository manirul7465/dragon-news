import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';
import Header from '../pages/shared/header/Header';
import Leftsidnav from '../pages/shared/leftsidenav/Leftsidnav';
import Rightsidenav from '../pages/shared/rightsidenav/Rightsidenav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <Leftsidnav></Leftsidnav>
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='3'>
                        <Rightsidenav></Rightsidenav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default Main;