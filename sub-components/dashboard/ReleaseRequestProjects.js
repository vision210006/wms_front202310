// import node module libraries
import Link from 'next/link';
import { ProgressBar, Col, Row, Card, Table, Image } from 'react-bootstrap';

// import required data files
import ProjectsData from "data/dashboard/ProjectsData";

const ReleaseRequestProjects = () => {
    return (
        <Row className="mt-6">
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white  py-4">
                        <h4 className="mb-0">보관중인 물품들</h4>
                    </Card.Header>
                    <Table responsive className="text-nowrap mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>#</th>
                                <th>물품명</th>
                                <th>물품종류</th>
                                <th>신청수량</th>
                                <th>위치</th>
                                <th>입고일</th>
                                <th>출고신청일</th>
                                <th>출고예정일</th>
                           </tr>
                        </thead>
                        <tbody>
                            {ProjectsData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle">{item.number}</td>
                                        <td className="align-middle">{item.projectName}</td>
                                        <td className="align-middle">{item.classification}</td>
                                        <td className="align-middle">{item.release_request_quantity}</td>
                                        <td className="align-middle">{item.location}</td>
                                        <td className="align-middle">{item.storing}</td>
                                        <td className="align-middle">{item.release_request_day}</td>
                                        <td className="align-middle">{item.releaseday}</td>






                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <Card.Footer className="bg-white text-center">
                        <Link href="#" className="link-primary">View All Projects</Link>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}

export default ReleaseRequestProjects