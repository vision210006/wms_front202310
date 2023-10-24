// import React, { useState } from "react";
// import { Table } from "react-bootstrap";
// import Items from "../items/items";
// import { Modal } from "react-bootstrap";
// import "./list.css";

// const List = (props) => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <div>
//       <Table responsive className="text-nowrap mb-0">
//         <thead className="table-light">
//           <tr>
//             <th>회사명</th>
//             <th>연락처</th>
//             <th>상품명</th>
//             <th>상품수량</th>
//             <th>상품분류</th>
//             <th>pallet.수량</th>
//             <th>pallet.규격</th>
//           </tr>
//         </thead>
//         <tbody>
//           {props.items.map((data, index) => {
//             <Items
//               key={data.id}
//               company={data.company}
//               phone={data.phone}
//               projectName={data.projectName}
//               storing_quantity={data.storing_quantity}
//               classification={data.classification}
//               pallet_quantity={data.pallet_quantity}
//               pallet_size={data.pallet_size}
//             />;
//             return (
//               <tr key={index}>
//                 <td className="align-middle">{data.company}</td>
//                 <td className="align-middle">{data.phone}</td>
//                 <td className="align-middle">{data.projectName}</td>
//                 <td className="align-middle">{data.storing_quantity}</td>
//                 <td className="align-middle">{data.classification}</td>
//                 <td className="align-middle">{data.pallet_quantity}</td>
//                 <td className="align-middle">{data.pallet_size}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </Table>
//       <div>
//         <button onClick={handleShow}>완료</button>
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header>
//             <Modal.Title>견적사항</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             {props.items.map((data, index) => {
//               <Items
//                 key={data.id}
//                 company={data.company}
//                 phone={data.phone}
//                 projectName={data.projectName}
//                 storing_quantity={data.storing_quantity}
//                 classification={data.classification}
//                 pallet_quantity={data.pallet_quantity}
//                 pallet_size={data.pallet_size}
//               />;

//               return (
//                 <div key={index}>
//                   <h1>----------------------------</h1>
//                   <p>상품명: {data.projectName}</p>
//                   <p>상품수량: {data.storing_quantity}</p>
//                   <p>pallet.수량: {data.pallet_quantity}</p>
//                   <p>가격: {data.pallet_quantity * 6000}원</p>
//                 </div>
//               );
//             })}
//           </Modal.Body>
//           <Modal.Footer>
//             <section>
//               <h1>주의사항</h1>
//               <p>
//                 1. 1일 이용료: 6,000원(1일) * pallet.수량 (*향후 출고 시 정산){" "}
//               </p>
//               <p>2. 출고요청은 최소 출고예정일 2주전까지 해주시기 바랍니다.</p>
//               <p>
//                 3. 운영시간(월~금, 09 ~ 06시) 외의 시간에 입/출고요청을
//                 하실경우, 지연이 될 수 있습니다.
//               </p>
//             </section>
//             <section>
//               <a href="/pages/contract">진행</a>
//               <button
//                 className="btn_close"
//                 variant="secondary"
//                 onClick={handleClose}
//               >
//                 닫기
//               </button>
//             </section>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default List;

import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Items from "../items/items";
import { Modal } from "react-bootstrap";
import { useEffect } from 'react';
import './list.css';
import { getEstimates } from "app/api/Estimate";
import { getContractStatus } from "app/api/Store";
import { SET_ESTIMATES } from "redux/estimateSlice";
import { SET_STATUS } from "redux/storeSlice";
import { useDispatch } from "react-redux";



const List = () => {
    const [show, setShow] = useState(false);
    const [showDataList, setshowDataList] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const dispatch = useDispatch();

    useEffect(() => {
        async function getAndSetEstimates() { 
            const result = await getEstimates();
            console.log(result.json.data);
            if (Array.isArray(result.json.data)) {
                console.log("if문 안으로 들어옴");
                setshowDataList(result.json.data);
              }
    
            // 리덕스를 이용해서 state에 값 설정
            dispatch(SET_ESTIMATES(result.json.data));
        }
        getAndSetEstimates();
    }, []); // currentPage 및 pageSize가 변경될 때마다 실행

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

                        />
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
                            </tr>
                        )

                    })}
                </tbody>
            </Table>
            <div>
                <button onClick={handleShow}>완료</button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>견적사항</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    {showDataList.map((product, index) => {
                        <Items
                        key={product.id}
                        company={product.company}
                        phone={product.phone}
                        productName={product.productName}
                        storing_quantity={product.storing_quantity}
                        classification={product.classification}
                        pallet_quantity={product.pallet_quantity}
                        pallet_size={product.pallet_size}
                        />

                        return(
                            <div key={index}>
                                <h1>----------------------------</h1>
                            <p>상품명: {product.productName}</p>
                            <p>상품수량: {product.storing_quantity}</p>
                            <p>pallet.수량: {product.pallet_quantity}</p>
                            <p>가격: {product.pallet_quantity * 6000}원</p>
                            </div>
 
                            
                        )
                    })}
                   </Modal.Body>
                    <Modal.Footer>
                        <section>
                            <h1>주의사항</h1>
                            <p>1. 1일 이용료: 6,000원(1일) * pallet.수량 (*향후 출고 시 정산) </p>
                            <p>2. 출고요청은 최소 출고예정일 2주전까지 해주시기 바랍니다.</p>
                            <p>3. 운영시간(월~금, 09 ~ 06시) 외의 시간에 입/출고요청을 하실경우, 지연이 될 수 있습니다.</p>
                        </section>
                        <section>
                        <a href="/pages/contract">진행</a>
                        <button className="btn_close" variant="secondary" onClick={handleClose}>
                            닫기
                        </button>
                        </section>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
};

export default List;