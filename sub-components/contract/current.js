// import { Row, Col, Card, Table } from "react-bootstrap";
// import Button from "react-bootstrap";
// import ProjectsData from "data/dashboard/ProjectsData";
// import Link from "next/link";

// const Current = () => {
//   const formstyle = {
//     width: "100px",
//     margin: "auto",
//     display: "block",
//   };
//   const btnstyle = {
//     width: "150px",
//     margin: "auto",
//     display: "block",
//   };
//   return (
//     <Row className="mt-6">
//       <Col xl={12} lg={12} md={12} xs={12} className="mb-6">
//         <Card>
//           <Card.Header className="bg-white  py-4"></Card.Header>
//           <div>
//             <select name="searchType">
//               <option value="company">회사명</option>
//               <option value="classification">상품분류</option>
//             </select>

//             <input type="text" name="keyword" />

//             <button type="button">검색</button>
//           </div>
//           <Table responsive className="text-nowrap mb-0">
//             <thead className="table-light">
//               <tr>
//                 <th>회사명</th>
//                 <th>연락처</th>
//                 <th>주소</th>
//                 <th>상품수량</th>
//                 <th>상품분류</th>
//                 <th>계약일</th>
//               </tr>
//             </thead>
//             <tbody>
//               {ProjectsData.map((item, index) => {
//                 return (
//                   <tr key={index}>
//                     <td className="align-middle">{item.company}</td>
//                     <td className="align-middle">{item.phone}</td>
//                     <td className="align-middle">{item.address}</td>
//                     <td className="align-middle">{item.storing_quantity}</td>
//                     <td className="align-middle">{item.classification}</td>
//                     <td className="align-middle">{item.contract_day}</td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </Table>
//         </Card>
//       </Col>
//     </Row>
//   );
// };

// export default Current;

import React, { useState, useEffect, useCallback } from "react";
import { Table } from "react-bootstrap";
import Items from "sub-components/estimate/items/items";
import "./current.css";
import { getEstimates } from "app/api/Estimate";
import { useDispatch } from "react-redux";
import { SET_ESTIMATES } from "redux/estimateSlice";

const Current = () => {

  const [showDataList, setshowDataList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function getAndSetEstimates() { 
        const result = await getEstimates();
        console.log(result.json.data.contents);
        setshowDataList(result.json.data.contents);

        // 리덕스를 이용해서 state에 값 설정
        dispatch(SET_ESTIMATES(result.json.data.contents));
    }
    getAndSetEstimates();
}, []);

  return (
    <div>
      <Table responsive className="text-nowrap mb-0">
        <thead className="table-light">
          <tr>
            <th>회사명</th>
            <th>연락처</th>
            <th>상품명</th>
            <th>상품수량</th>
            <th>상품분류</th>
            <th>보관위치</th>
            <th>pallet.수량</th>
            <th>pallet.규격</th>
            <th>계약일</th>
          </tr>
        </thead>
        <tbody>
          {showDataList.map((product, index) => {
            <Items
              key={product.id}
              company={product.company}
              phone={product.phone}
              productName={product.productName}
              storing_quantity={product.storing_quantity}
              classification={product.classification}
              location={product.location}
              pallet_quantity={product.pallet_quantity}
              pallet_size={product.pallet_size}
            />;
            // {
            //   props.dates.map((date) => {
            //     <Dates 
            //     key={date.id} 
            //     contract_date={date.contract_date} />;
            //   });
            // }
            return (
              <tr key={index}>
                <td className="align-middle">{product.company}</td>
                <td className="align-middle">{product.phone}</td>
                <td className="align-middle">{product.productName}</td>
                <td className="align-middle">{product.storing_quantity}</td>
                <td className="align-middle">{product.classification}</td>
                <td className="align-middle">{product.location}</td>
                <td className="align-middle">{product.pallet_quantity}</td>
                <td className="align-middle">{product.pallet_size}</td>
                {/* <td className="align-middle">
                  {moment(date.contract_date).format("YYYY-MM-DD")}
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Current;
