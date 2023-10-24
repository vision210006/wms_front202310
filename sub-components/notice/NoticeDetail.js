// import node module libraries
import { useState, React } from 'react';
import { useEffect } from 'react';
import { getNotice } from 'app/api/Notice';
import { useDispatch } from 'react-redux';
import { SET_NOTICES } from 'redux/noticeSlice'
import { Col, Row, Card, Table, Nav, Tab, Container, Button } from 'react-bootstrap';

const NoticeDetail = ({ selectedNotice }) => {

    const [showDataList, setshowDataList] = useState([]);
    
    const dispatch = useDispatch();

    useEffect(() => {
        async function getAndSetNotice() { 
            console.log(selectedNotice.postSeq + "넘어오니?");
            
            const result = await getNotice(selectedNotice.postSeq); // 페이지 및 페이지 크기를 요청에 추가
            console.log(result.json.data);
            setshowDataList(result.json.data);

            // 리덕스를 이용해서 state에 값 설정
            dispatch(SET_NOTICES(result.json.data));
        }        
        getAndSetNotice();
    }, []); // currentPage 및 pageSize가 변경될 때마다 실행
    
	return (
        <Col xl={4} lg={12} md={12} sm={12}>
        {showDataList ? (
            <Card>
                <Card.Body>
                    <Table className="text-nowrap">
                        <thead className="table-light">
                            <tr>
                                <th scope="col" className='textCenter'>제목</th>
                                <th scope="col">{showDataList.title}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className='content'>내용</th>
                                <td>{showDataList.body}</td>
                            </tr>
                            <tr>
                                <th scope="row" className='textCenter'>작성자</th>
                                <td>{showDataList.userName}</td>
                            </tr>
                            <tr>
                                <th scope="row" className='textCenter'>작성일</th>
                                <td>{showDataList.date}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            ) : (
                <div><Col></Col></div>
            )}
        </Col>
	);
};

export default NoticeDetail
