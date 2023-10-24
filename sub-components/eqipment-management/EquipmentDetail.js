// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Card, Table, Nav, Tab, Container, Button } from 'react-bootstrap';

// import widget/custom components
import { HighlightCode }  from 'widgets';

// import react code data file
import {
	BasicTableCode,
	DarkTableCode,
	TableHeadCode,
	StripedTableCode,
	TableVariantCode,
	BorderedTableCode,
	BorderlessTableCode,
	HoverableRowsCode,
	SmallTableCode,
	ContextualClassesCode,
	ResponsiveTableCode
} from 'data/code/TablesCode';

const equipmentContent = {
    name : 'A사',
    no : 'ABD123456',
    expirationDate : '999일',
    location : '서울-A',
    itmeType : '상온'
}

const EquipmentDetail = () => {
	return (
        <Col xl={4} lg={12} md={12} sm={12}>
            <Card>
                <Card.Body>
                    <Table className="text-nowrap">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">상세내용</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">기자재명</th>
                                <td>{equipmentContent.name}</td>
                            </tr>
                            <tr>
                                <th scope="row">기자재NO</th>
                                <td>{equipmentContent.no}</td>
                            </tr>
                            <tr>
                                <th scope="row">잔여수명</th>
                                <td>{equipmentContent.expirationDate}</td>
                            </tr>
                            <tr>
                                <th scope="row">현위치</th>
                                <td>{equipmentContent.location}</td>
                            </tr>
                            <tr>
                                <th scope="row">품목</th>
                                <td>{equipmentContent.itmeType}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button variant="secondary" className='postNotice'>작성완료</Button>
                </Card.Body>
            </Card>
        </Col>
	);
};

export default EquipmentDetail
