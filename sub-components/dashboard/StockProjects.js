// import node module libraries
import Link from 'next/link';
import { useState } from 'react';
import { ProgressBar, Col, Row, Card, Table, Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Modals from './Modals';

// import required data files
import ProjectsData from "data/dashboard/ProjectsData";
import StockCard from './StockCard';
import { useDispatch } from 'react-redux';
import { getStocks } from 'app/api/Stock';
import { useEffect } from 'react';
import { SET_STOCKS } from 'redux/stockSlice';



const StockProjects = () => {
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

    const dataList = showDataList.map((x) => (<StockCard id={x.id} company={x.company} location={x.location}/>))

    return (
        <Row className="mt-6">
            <Col md={1} xs={1}>
                {dataList}
            </Col>
        </Row>

        )
    }

export default StockProjects;

