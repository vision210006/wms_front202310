'use client'
// import node module libraries
import { Fragment } from "react";
import Link from 'next/link';
import { Container, Col, Row, DropdownButton } from 'react-bootstrap';

// import widget/custom components
import { StatRightTopIcon } from "widgets";
import { ButtonGroup, Dropdown } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import Carousel from 'react-bootstrap/Carousel'

import Image from 'react-bootstrap/Image'
import { CarouselItem } from "react-bootstrap";
import img1 from 'public/images/create/images/1690863505414.png'
import img2 from 'public/images/create/images/KakaoTalk_20230918_091758002.png'
import BSOffCanvas from "sub-components/dashboard/BSOffCanvas";
import { useState } from "react";
import Modals from "sub-components/dashboard/Modals";

// import sub components    
import { ActiveProjects, Teams, 
    TasksPerformance 
} from "sub-components";

// import required data files
import ProjectsStatsData1 from "data/dashboard/ProjectsStatsData1";
import StockProjects from "sub-components/dashboard/StockProjects";


const Home = () => {
    return (
        
        <Fragment>
            <div className="bg-primary pt-10 pb-21"></div>
            <Container fluid className="mt-n22 px-6">
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        {/* Page header */}
                        <div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mb-2 mb-lg-0">
                                    <h3 className="mb-0  text-white">재고 현황</h3>
                                </div>
                            </div>
                        </div>
                </Col>
            </Row>


                {/* <BSOffCanvas /> */}

            
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        창고
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="\create\seoulA">서울A</Dropdown.Item>
                        <Dropdown.Item href="#">서울B</Dropdown.Item>
                        <Dropdown.Item href="#">대전A</Dropdown.Item>
                        <Dropdown.Item href="#">대전B</Dropdown.Item>
                        <Dropdown.Item href="#">부산A</Dropdown.Item>
                        <Dropdown.Item href="#">부산B</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>


                <StockProjects />
                <Row>
                    <Col>
                    </Col>
                </Row>

            </Container>
        </Fragment>
    )
}



export default Home;
