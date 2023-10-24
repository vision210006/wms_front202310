import { Row, Col, Card, Table } from "react-bootstrap";
import { getStoreStatus } from "app/api/Store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SET_STORES } from "redux/storeSlice";

const Storing = () => {

  const [showDataList, setshowDataList] = useState([]);
    
  const dispatch = useDispatch();

  useEffect(() => {
      async function getAndSetStoreStatus() {           
          const result = await getStoreStatus();
          console.log(result.json.data);
          if (Array.isArray(result.json.data)) {
              console.log("if문 안으로 들어옴");
              setshowDataList(result.json.data);
            }

          // 리덕스를 이용해서 state에 값 설정
          dispatch(SET_STORES(result.json.data));
      }        
      getAndSetStoreStatus();
  }, []); // currentPage 및 pageSize가 변경될 때마다 실행

  const formstyle = {
    width: "100px",
    margin: "auto",
    display: "block",
  };
  const btnstyle = {
    width: "150px",
    margin: "auto",
    display: "block",
  };
  
  return (
    <Row className="mt-6">
      <Col xl={12} lg={12} md={12} xs={12} className="mb-6">
        <Card>
          <Card.Header className="bg-white  py-4"></Card.Header>
          <div>
            <select name="searchType">
              <option value="company">회사명</option>
              <option value="classification">상품분류</option>
            </select>

            <input type="text" name="keyword" />

            <button type="button">검색</button>
          </div>
          <Table responsive className="text-nowrap mb-0">
            <thead className="table-light">
              <tr>
                <th>회사명</th>
                <th>연락처</th>
                <th>주소</th>
                <th>상품수량</th>
                <th>상품분류</th>
                <th>계약일</th>
                <th>등록 및 현황</th>
              </tr>
            </thead>
            <tbody>
              {showDataList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="align-middle">{item.company}</td>
                    <td className="align-middle">{item.phone}</td>
                    <td className="align-middle">{item.address}</td>
                    <td className="align-middle">{item.storing_quantity}</td>
                    <td className="align-middle">{item.classification}</td>
                    <td className="align-middle">{item.contract_day}</td>
                    <td className="align-middle">대기/등록/완료 중 택1</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card>
      </Col>
    </Row>
  );
};

export default Storing;