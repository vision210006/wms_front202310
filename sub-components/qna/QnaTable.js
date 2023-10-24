// import node module libraries
import { Fragment, useState } from 'react';
import { Col, Row, Card, Table, Nav, Tab, Container, Button } from 'react-bootstrap';

// import sub components
import { QnaDetail, CreateQna } from 'sub-components'
import NoticeData from 'data/dashboard/NoticeData';

const QnaTable = () => {
    // 선택한 테이블 값을 state로 정의
    const [selectedQna, setSelectedQna] = useState(null);
    const [selectedComponent, setSelectedComponent] = useState(null); // 추가: 선택한 컴포넌트를 관리하는 상태

    // 선택한 테이블 값을 변경하는 함수
    const handleTableSelection = (qna) => {
        setSelectedComponent('');
        setSelectedQna(qna);
    };

    // 글쓰기 버튼 클릭 시 CreateQna 컴포넌트를 보여주는 함수
    const showCreateQna = () => {
        setSelectedComponent('CreateQna');
    };

	return (
        <><Col xl={8} lg={12} md={12} sm={12}>
            <Card>
                <Card.Body>
                    <Table hover className="text-nowrap">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">제목</th>
                                <th scope="col">작성자</th>
                                <th scope="col">작성일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {NoticeData.map((x, i) =>
                             <tr key={i} onClick={() => handleTableSelection(x)}>
                                <th scope="row">{x.id}</th>
                                <td>{x.title}</td>
                                <td>{x.writer}</td>
                                <td>{x.date}</td>
                            </tr>)}
                        </tbody>
                        </Table>
                    <Button variant="secondary" className="createBtn" onClick={showCreateQna}>
                        글쓰기
                    </Button>
                </Card.Body>
            </Card>
        </Col>        
        {selectedComponent === 'CreateQna' ? (
        <CreateQna /> // CreateNotice 컴포넌트를 선택한 경우에만 보여줍니다.
      ) : (
        selectedQna && <QnaDetail selectedQna={selectedQna} />
      )}
    </>
  );
};

export default QnaTable
