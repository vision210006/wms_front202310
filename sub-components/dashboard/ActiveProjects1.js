// import node module libraries
import Link from 'next/link';
import { ProgressBar, Col, Row, Card, Table, Image } from 'react-bootstrap';

// import required data files
import ProjectsData from "data/dashboard/ProjectsData";

const ActiveProjects1 = () => {
    return (
        <Row className="mt-6">
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white  py-4">
                        <h4 className="mb-0">입출고 내역</h4>
                    </Card.Header>
                    <Table responsive className="text-nowrap mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>서울-A-1</th>

                            </tr>
                        </thead>
                        <tbody>
                            {ProjectsData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle">{item.projectName+ " (" + item.classification+")"}</td>
                                        <td className="align-middle">{item.classification}</td>
                                        <td className="align-middle">{item.status}</td>
                                        <td className="align-middle">{item.location}</td>
                                        <td className="align-middle">{item.period}</td>
                                        <td className="align-middle">{item.storing}</td>
                                        <td className="align-middle">{item.release}</td>
                                        <td className="align-middle">{item.allfee}</td>
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

export default ActiveProjects1