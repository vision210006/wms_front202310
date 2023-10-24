// import node module libraries
import Link from 'next/link';
import { ProgressBar, Col, Row, Card, Table, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getStocks } from 'app/api/Stock';
import { useEffect } from 'react';
import { SET_STOCKS } from 'redux/stockSlice';
import { useState } from 'react';

// import required data files
import ProjectsData from "data/dashboard/ProjectsData";

const ActiveProjects = () => {

        // 선택한 테이블 값을 state로 정의
        const [showDataList, setshowDataList] = useState([]);
        
        const dispatch = useDispatch();
    
        useEffect(() => {
            async function getAndSetStocks() { 
                const result = await getStocks();
                console.log(result.json.data.dataList);
                if (Array.isArray(result.json.data.dataList)) {
                    console.log("if문 안으로 들어옴");
                    setshowDataList(result.json.data.dataList);
                  }
    
                // 리덕스를 이용해서 state에 값 설정
                dispatch(SET_STOCKS(result.json.data.dataList));
            }
    
            // 조건을 걸어 한 번만 실행되도록
            if (showDataList.length === 0) {
                getAndSetStocks();
            }
        }, [showDataList]); // 의존성 배열 설정
    

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
                                <th>상품이름</th>
                                <th>상품분류</th>
                                <th>보관기간</th>
                                <th>입고일</th>
                                <th>출고예정일</th>
                                <th>상태</th>
                                <th>보관위치</th>
                                <th>이번달 이용료</th>
                                <th>계약내용 보기</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showDataList.map((x, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle">{x.projectName}</td>
                                        <td className="align-middle">{x.classification}</td>
                                        <td className="align-middle">{x.period}</td>
                                        <td className="align-middle">{x.storing}</td>
                                        <td className="align-middle">{x.release}</td>
                                        <td className="align-middle">{x.status}</td>
                                        <td className="align-middle">{x.location}</td>
                                        <td className="align-middle">{x.fee}</td>
                                        <td className="align-middle">{x.contract}</td>


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

export default ActiveProjects