import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/common/Footer/Footer';
import Header from '../Pages/common/Header/Header';
import Sidebar from '../Pages/common/Sidebar/Sidebar';
import FAQ from '../FAQ/FAQ';

const Main = () => {
    return (
        <div>
           <Header></Header> 
            <Container>
<Row>
<Col lg="8" xs={12} md={8}>
<Outlet>

</Outlet>
</Col>
<Col lg="4" xs={6} md={4}>
<Sidebar></Sidebar>
</Col>
</Row>

        </Container>
       <FAQ></FAQ>
        <Footer></Footer>
        </div>
    );
};

export default Main;