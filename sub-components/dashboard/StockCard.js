import {Col, Row, Card} from 'react-bootstrap'
import ProjectsData from 'data/dashboard/ProjectsData';
import Modals from './Modals';
import React, { Fragment } from 'react'
import { Button, Modal } from 'react-bootstrap'


const StockCard = (props) => {
        return (
            <td>
            <Row className="mt-6">
                <Col md={1} xs={1}>
                    <Card style={{ width: '9rem' }}>
                        <Card.Body>
                            <Card.Title>{props.location}</Card.Title>
                            <Card.Text>                                
                                <tbody>
                                        <tr>
                                            <td className="align-middle">{props.id +'-' + props.company}</td>
                                        </tr>
                                </tbody>
                            </Card.Text>
                            <Modals id={props.id}/>
                        </Card.Body>
                    </Card>                        
                </Col>
            </Row>
            </td>
        )};

export default StockCard