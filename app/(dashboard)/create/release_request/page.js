'use client'
// import node module libraries
import { Fragment } from "react";
import Link from 'next/link';
import { Container, Col, Row, Card } from 'react-bootstrap';

// import widget/custom components
import { StatRightTopIcon } from "widgets";

// import sub components
import { ReleaseStats, Teams, 
    TasksPerformance 
} from "sub-components";

// import required data files
import ReleaseStatsData from "data/dashboard/ReleaseStatsData";
import ReleaseRequestProjects from "sub-components/dashboard/ReleaseRequestProjects";
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
                                    <h3 className="mb-0  text-white">출고요청</h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                    {ReleaseStatsData.map((item, index) => {
                        return (
                            //3 6 12 12 
                            <Col xl={6} lg={10} md={18} xs={18} className="mt-6" key={index}>
                                <StatRightTopIcon info={item} />
                            </Col>
                        )
                    })}
                </Row>

                {/* Active Projects  */}
                <ReleaseRequestProjects />

                    

                        

                <Row className="my-6">
                    <Col xl={4} lg={12} md={12} xs={12} className="mb-6 mb-xl-0">

                        {/* Tasks Performance  */}
                        {/* <TasksPerformance /> */}

                    </Col>
                    {/* card  */}
                    <Col xl={8} lg={12} md={12} xs={12}>

                        {/* Teams  */}
                        {/* <Teams /> */}

                    </Col>
                </Row>
            </Container>
        </Fragment>

        
    )
}
export default Home;
