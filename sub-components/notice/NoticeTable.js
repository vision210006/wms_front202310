// import node module libraries
import { Fragment ,useState } from 'react';
import { Col, Row, Card, Table, Nav, Tab, Container, Button, Pagination } from 'react-bootstrap';

import { useDispatch } from 'react-redux';
import { getNotices } from 'app/api/Notice';
import { useEffect } from 'react';
import { SET_NOTICES } from 'redux/noticeSlice'

// import sub components
import { NoticeDetail, CreateNotice } from 'sub-components'

const NoticeTable = () => {
    // 선택한 테이블 값을 state로 정의
    const [selectedNotice, setSelectedNotice] = useState(null);
    const [selectedComponent, setSelectedComponent] = useState(null); // 추가: 선택한 컴포넌트를 관리하는 상태
    const [showDataList, setshowDataList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(5); // 페이지 크기를 설정합니다.
    const [totalElements, setTotalElements] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    // 선택한 테이블 값을 변경하는 함수
    const handleTableSelection = (notice) => {
        setSelectedComponent('');
        setSelectedNotice(notice);
    };

    // 글쓰기 버튼 클릭 시 CreateNotice 컴포넌트를 보여주는 함수
    const showCreateNotice = () => {
        setSelectedComponent('CreateNotice');
    };
    
    const dispatch = useDispatch();

    useEffect(() => {
        async function getAndSetNotices() { 
            const result = await getNotices(currentPage, pageSize); // 페이지 및 페이지 크기를 요청에 추가
            console.log(result.json.data);
            console.log("페이지" + currentPage);
            if (Array.isArray(result.json.data.content)) {
                console.log("if문 안으로 들어옴");
                setshowDataList(result.json.data.content);
              }

            // 페이징 처리를 위해 필요한 값들을 state에 설정
            setTotalElements(result.json.data.totalElements);
            setTotalPages(result.json.data.totalPages);

            // 리덕스를 이용해서 state에 값 설정
            dispatch(SET_NOTICES(result.json.data));
        }
        getAndSetNotices();
    }, [currentPage, pageSize]); // currentPage 및 pageSize가 변경될 때마다 실행

    const handlePageChange = (page) => {
        setCurrentPage(page);
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
                            {showDataList && showDataList.map((x, i) =>
                             <tr key={i} onClick={() => handleTableSelection(x)}>
                                <th scope="row">{x.postSeq}</th>
                                <td>{x.title}</td>
                                <td>{x.userName}</td>
                                <td>{x.create_at}</td>
                            </tr>)}
                        </tbody>
                    </Table>
                    <Button variant="secondary" className="createBtn" onClick={showCreateNotice}>
                        글쓰기
                    </Button>
                    {/* Pagination 컴포넌트를 추가하여 페이지를 변경할 수 있도록 합니다. */}
                    <Pagination className="justify-content-center">
                        <Pagination.Prev
                            disabled={currentPage === 0}
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            Previous
                        </Pagination.Prev>
                        {Array.from({ length: Math.ceil(totalElements / pageSize) }).map((_, index) => (
                            <Pagination.Item
                                key={index}
                                active={currentPage === index}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </Pagination.Item>
                        ))}
                        <Pagination.Next
                            disabled={currentPage === Math.ceil(totalElements / pageSize)-1}
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            Next
                        </Pagination.Next>
                    </Pagination>
                </Card.Body>
            </Card>
        </Col>        
        {selectedComponent === 'CreateNotice' ? (
        <CreateNotice /> // CreateNotice 컴포넌트를 선택한 경우에만 보여줍니다.
      ) : (
        selectedNotice && <NoticeDetail selectedNotice={selectedNotice} />
      )}
    </>
  );
};

export default NoticeTable