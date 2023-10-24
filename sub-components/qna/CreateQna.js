// import node module libraries
import { Fragment, React } from 'react';
import { Col, Row, Card, Table, Nav, Tab, Container, Button } from 'react-bootstrap';

const CreateQna = () => {
    const textareaStyle = {
      height: '400px', // 원하는 높이로 지정하세요.
    };
	return (
        <Col xl={4} lg={12} md={12} sm={12}>
            <Card>
                <Card.Body>
                    <form action='/notice' method='get'>
                    <Table className="text-nowrap">
                        <thead className="table-light">
                            <tr>
                                <th scope="col" className='textCenter'>제목</th>
                                <th scope="col"><input class='form-control'></input></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className='content'>내용</th>
                                <td>
                                    <div class="form-floating">
                                    <textarea className="form-control" style={textareaStyle}></textarea>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className='textCenter'>작성자</th>
                                <td><input class="form-control"></input></td>
                            </tr>
                            <tr>
                                <th scope="row" className='textCenter'>작성일</th>
                                <td><input class="form-control"></input></td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button type="submit" variant="secondary" className='createSuccesBtn'>작성완료</Button>
                    </form>
                </Card.Body>
            </Card>
        </Col>
	);
};

export default CreateQna
